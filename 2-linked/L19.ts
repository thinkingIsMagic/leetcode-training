import { ListNode } from '../types/ListNode';

// 标签：链表、双指针
/**
 * @description 删除链表的倒数第 N 个结点
 * @param head 链表头节点
 * @param n 要删除的倒数第n个节点
 * @returns 返回删除节点后的链表头节点
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(head === null) return null;
    
    // 创建虚拟头节点，处理删除第一个节点的情况
    const dummy = new ListNode(0, head);
    let current = head;
    let deletePreNode = dummy;
    
    // 先让 current 指针移动 n 步
    for(let i = 0; i < n; i++) {
        if(current === null) return null;
        current = current.next;
    }
    
    // current 和 deletePreNode 同时移动，直到 current 到达末尾
    while(current !== null) {
        current = current.next;
        deletePreNode = deletePreNode.next!;
    }
    
    // 删除目标节点
    deletePreNode.next = deletePreNode.next!.next;
    
    return dummy.next;
}