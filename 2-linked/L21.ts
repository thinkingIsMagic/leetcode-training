// 标签：链表、递归
import { ListNode } from '../types/ListNode';

/**
 * @description 合并两个升序链表
 * @param list1 第一个有序链表
 * @param list2 第二个有序链表
 * @returns 合并后的有序链表
 * @complexity 时间复杂度 O(n + m)，其中 n 和 m 分别为两个链表的长度
 * @complexity 空间复杂度 O(n + m)，递归调用栈的深度
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 处理边界情况：如果其中一个链表为空，返回另一个链表
    if(list1 === null){
        return list2;
    }
    if(list2 === null){
        return list1;
    }

    // 递归合并：比较当前节点值，较小的节点作为头节点
    if(list1.val < list2.val){
        // list1当前节点值较小，将list1.next与list2合并的结果接在list1后面
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
        // list2当前节点值较小，将list1与list2.next合并的结果接在list2后面
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}