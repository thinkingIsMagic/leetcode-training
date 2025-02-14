import { TreeNode } from "../types/TreeNode";

// 中序遍历
// 是否是递增：上一个节点值小于当前节点值
function isValidBST(root: TreeNode | null): boolean {
    if(root === null) return true;
    let preVal = -Infinity;
    let res = true;
    dfs(root);
    return res;
    
    function dfs(root: TreeNode | null){
        if(root === null) return;
        dfs(root.left);
        // 中序遍历位置
        // 判断是否递增
        if(preVal >= root.val){
            res = false;
            return;
        }
        // 更新上一个节点值
        preVal = root.val;
        dfs(root.right);
    }
};