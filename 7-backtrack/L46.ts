// 全排列（无重复），回溯，关键：用visited数组去重
function permute(nums: number[]): number[][] {
    if(nums === null || nums.length === 0){
        return [];
    }
    const res: number[][] = [];
    const state: number[] = [];
    const visited: boolean[] = new Array(nums.length).fill(false);
    backTrack(state, nums, visited, res);
    return res;
};

function backTrack(state: number[], choices: number[], selected: boolean[], res: number[][]){
    // 结束条件，记录解
    if(state.length === choices.length){
        res.push([...state]);
        return;
    }
    for(let i=0; i<choices.length; i++){
        // 剪枝
        if(selected[i]){
            //nothing
        }else{
            // 做出选择，更新状态
            state.push(choices[i]);
            selected[i] = true;
            // 递归
            backTrack(state, choices, selected, res);
            // 回溯操作
            state.pop();
            selected[i] = false;
        }
    }
}