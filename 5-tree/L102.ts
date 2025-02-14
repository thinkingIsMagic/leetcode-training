/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../types/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
    if(root === null) return [];
    const res: number[][] = [];
    const queue: TreeNode[] = [];
    queue.push(root);
    while(queue.length > 0){
        // 保存当前队列长度
        const queueLen = queue.length;
        // 记录当前层级节点
        const levelNode: number[] = [];
        for(let i = 0; i<queueLen; i++){
            // 出队
            const node = queue.shift();
            // 记录
            levelNode.push(node.val);
            // 左右子节点入队
            if(node.left !== null){
                queue.push(node.left);
            }
            if(node.right !== null){
                queue.push(node.right);
            }
        }
        res.push(levelNode);
    }
    return res;
};