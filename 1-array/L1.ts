// 标签：数组、哈希表
/**
 * @description 给定一个整数数组 nums 和一个目标值 target，在数组中找出和为目标值的两个数的索引
 * @param nums 输入的整数数组
 * @param target 目标和
 * @returns 返回两个数的索引数组，如果未找到则返回空数组
 */
function twoSum(nums: number[], target: number): number[] {
    // 第一层循环：遍历数组中的每个数
    for(let i = 0;i<nums.length;i++){
        // 第二层循环：从i+1开始遍历，避免重复使用同一个元素
        for(let j = i + 1; j<nums.length;j++){
            // 如果找到两个数的和等于目标值，返回这两个数的索引
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    // 如果未找到符合条件的两个数，返回空数组
    return [];
}

/**
 * @description 使用哈希表优化的两数之和解法
 * @param nums 输入的整数数组
 * @param target 目标和
 * @returns 返回两个数的索引数组，如果未找到则返回空数组
 */
function twoSumOptimized(nums: number[], target: number): number[] {
    // 创建哈希表存储数字和索引
    const map = new Map<number, number>();
    
    for(let i = 0; i < nums.length; i++) {
        // 计算当前数字需要的配对数
        const complement = target - nums[i];
        
        // 如果哈希表中存在配对数，直接返回结果
        if(map.has(complement)) {
            return [map.get(complement)!, i];
        }
        
        // 将当前数字和索引存入哈希表
        map.set(nums[i], i);
    }
    
    return [];
}

// 测试用例
const nums = [2,7,11,15];
const target = 9;

// 输出结果
console.log(twoSum(nums,target));
console.log(twoSumOptimized(nums,target));