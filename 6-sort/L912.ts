// 归并排序
// 分解 + 合并
function sortArray(nums: number[]): number[] {
    //（1）分解
    // 终止条件
    if(nums.length <= 1) return nums;
    const mid = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0,mid));
    const right = sortArray(nums.slice(mid));
    //（2）合并
    return merge(left, right);
};

function merge(nums1: number[], nums2: number[]): number[] {
    const res: number[] = [];
    let i: number =0;
    let j: number =0;
    while(i<nums1.length && j < nums2.length){
        if(nums1[i] <= nums2[j]){
            res.push(nums1[i]);
            i++;
        }else{
            res.push(nums2[j]);
            j++;
        }
    }
    return [...res, ...nums1.slice(i), ...nums2.slice(j)]
}