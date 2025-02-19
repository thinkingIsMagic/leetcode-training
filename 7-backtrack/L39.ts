// 组合总和，回溯
function combinationSum(candidates: number[], target: number): number[][] {
    if(candidates === null || candidates.length === 0){
        return [];
    }
    const res: number[][] = [];
    const state: number[] = [];
    backTrack(state, 0, 0);
    return res;

    function backTrack(state: number[], sum: number, start: number){
        //（1） 终止条件
        if(sum === target){
            res.push([...state]);
            return;
        }
        if(sum > target){
            return;
        }
        //（2） 遍历
        // 剪枝，从start开始，避免重复
        for(let i=start;i<candidates.length;i++){
            // 更新状态
            const candidate = candidates[i];
            sum += candidate;
            start = i;
            state.push(candidate);
            // 迭代
            backTrack(state, sum, start)
            // 回退
            state.pop();
            sum -= candidate;
        }
    }
};
