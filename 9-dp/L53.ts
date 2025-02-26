// 动态规划
function maxSubArray(nums: number[]): number {
    if(nums === null || nums.length === 0){
        return -100000000;
    }
    if(nums.length === 1){
        return nums[0];
    }
    const dp: number[] = [];
    dp[0] = nums[0];
    for(let i=1; i<nums.length; i++){
        dp[i] = Math.max(dp[i-1]+nums[i], nums[i]);
    }
    return Math.max(...dp);
}