import { ListNode } from '../types/ListNode';

// 标签：链表、分治、递归、deepseek-r1
/**
 * @description 合并 K 个有序链表（分治策略）
 * @param lists 包含多个有序链表的数组
 * @returns 合并后的有序链表头节点
 * @complexity 时间复杂度 O(N * logk)，其中 k 是链表个数，N 是所有链表节点总数
 * @complexity 空间复杂度 O(logk)，递归调用栈的深度
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 处理边界情况
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    // 分治策略：将链表数组分成两半处理
    const mid = Math.floor(lists.length / 2);
    const left = mergeKLists(lists.slice(0, mid));
    const right = mergeKLists(lists.slice(mid));

    // 复用双链表合并算法
    return mergeTwoLists(left, right);
}

// 复用已有的双链表合并函数
function mergeTwoLists(a: ListNode | null, b: ListNode | null): ListNode | null {
    if (!a) return b;
    if (!b) return a;
    
    if (a.val < b.val) {
        a.next = mergeTwoLists(a.next, b);
        return a;
    } else {
        b.next = mergeTwoLists(a, b.next);
        return b;
    }
}