import { TreeNode } from "../types/TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null){
        return true;
    }
    // 需要扩充参数
    return dfs(root.left, root.right);
};

function dfs(left: TreeNode | null, right: TreeNode | null): boolean {
    // 叶子节点
    if(left === null && right === null){
        return true;
    }
    // 左右子树其中一个不为空
    if(left !==null && right === null){
        return false;
    }
    if(right !==null && left === null){
        return false;
    }
    // 左右子树都不为空
    // （1）子节点值是否相同
    const isValid1 = (left.val === right.val);
    // （2）孙子节点对称条件
    const isValid2 = dfs(left.left, right.right) && dfs(left.right, right.left);
    return isValid1 && isValid2;
};