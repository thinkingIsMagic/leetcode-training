// 思路：合并有序数组 + 返回中位数
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums = mergeSort(nums1, nums2);
    console.log("nums ", nums);
    const len =  nums.length;
    if(len % 2 === 0){
        const mid = len / 2;
        return (nums[mid-1] + nums[mid]) / 2;
    }else{
        const mid = Math.floor(len / 2);
        return nums[mid];
    }
};

// 合并有序数组
function mergeSort(nums1: number[], nums2: number[]): number[] {
    const res: number[] = [];
    let i: number = 0;
    let j: number = 0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] <= nums2[j]){
            res.push(nums1[i]);
            i++;
        }else{
            res.push(nums2[j]);
            j++
        }
    }
    return [...res, ...nums1.slice(i), ...nums2.slice(j)]
}
