// 单调栈：要求从 栈底 到 栈顶 的元素是单调递增（或者单调递减）
// 单调递减栈：只有比栈顶元素小的元素才能直接进栈，否则需要先将栈中比当前元素大的元素出栈，再将当前元素入栈。
// 算法模拟：
// 输入: [73,74,75,71,69,72,76,73]
// 处理过程：
// i=0 → 栈空入栈 [0]
// i=1 → 74>73 → 弹出0，ans[0]=1 → 入栈1 [1]
// i=2 → 75>74 → 弹出1，ans[1]=1 → 入栈2 [2]
// i=3 → 71<75 → 入栈3 [2,3]
// i=4 → 69<71 → 入栈4 [2,3,4]
// i=5 → 72>69 → 弹出4，ans[4]=1 → 72>71 → 弹出3，ans[3]=2 → 入栈5 [2,5]
// i=6 → 76>72 → 弹出5，ans[5]=1 → 76>75 → 弹出2，ans[2]=4 → 入栈6 [6]
// i=7 → 73<76 → 入栈7 [6,7]
// 最终结果: [1,1,4,2,1,1,0,0]
function dailyTemperatures(temperatures: number[]): number[] {
    if(temperatures.length === 0) return [];
    if(temperatures.length === 1) return [0];
    const resList: number[] = new Array(temperatures.length).fill(0);
    const len = temperatures.length;
    // 单调递减栈
    const minStack: number[] = [];
    // 遍历温度列表，计算结果数组
    for(let i=0; i< len; i++){
        const cur = temperatures[i];
        // 当前温度高于栈顶日期温度时，更新答案
        while(minStack.length > 0 && cur > temperatures[minStack[minStack.length - 1]]){
            const prev_day = minStack.pop();
            resList[prev_day] = i - prev_day;
        }
        minStack.push(i);
    }
    return resList;
};