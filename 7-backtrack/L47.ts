// 全排列（无重复），回溯，相对1：加个set判断重复的元素
function permuteUnique(nums: number[]): number[][] {
    if(nums === null || nums.length === 0){
        return [];
    }
    const res: number[][] = [];
    const state: number[] = [];
    const visited: boolean[] = new Array(nums.length).fill(false);
    backTrack(nums, state, res, visited);
    return res;
};

function backTrack(nums: number[], state: number[] , res: number[][], visited: boolean[]){
    // 结束条件，记录解
    if(state.length === nums.length){
        res.push([...state]);
        return;
    }
    // !!! 和全排列只有这里有区别，加个set判断重复的元素
    const set = new Set();
    for(let i=0; i<nums.length; i++){
        const curState = nums[i];
        // 剪枝
        if(visited[i] || set.has(curState)){
            //nothing
        }else{
            // 做出选择，更新状态
            state.push(curState);
            visited[i] = true;
            set.add(curState);
            // 递归
            backTrack(state, nums, visited, res);
            // 回溯操作
            state.pop();
            visited[i] = false;
            // ！！！不需要回退set
        }
    }
}