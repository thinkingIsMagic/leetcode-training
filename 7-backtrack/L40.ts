// 组合总和(有重复元素)，相对1：多了visited和set去重和排序
function combinationSum2(candidates: number[], target: number): number[][] {
    if(candidates === null || candidates.length === 0){
        return [];
    }
    const res: number[][] = [];
    const state: number[] = [];
    const visited: boolean[] = new Array(candidates.length).fill(false);
    candidates.sort();
    backTrack(state, 0, 0, visited);
    return res;

    function backTrack(state: number[], sum: number, start: number, visited: boolean[]){
        //（1） 终止条件
        if(sum === target){
            res.push([...state]);
            return;
        }
        if(sum > target){
            return;
        }
        const set = new Set();
        //（2） 遍历
        // 剪枝，从start开始，避免重复
        for(let i=start;i<candidates.length;i++){
            if(visited[i] || set.has(candidates[i])){
                //nothing;
                continue;
            }
            // 更新状态
            const candidate = candidates[i];
            sum += candidate;
            start = i;
            visited[i] = true;
            set.add(candidate);
            state.push(candidate);
            // 迭代
            backTrack(state, sum, start, visited)
            // 回退
            state.pop();
            sum -= candidate;
            visited[i] = false;
        }
    }
};
