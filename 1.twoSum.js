/**
 * 📌 Two Sum - LeetCode (Easy)
 *
 * 📝 Problem Description:
 * --------------------------------
 * Given an array of integers `nums` and an integer `target`,
 * return the indices of the two numbers such that they add up to `target`.
 *
 * 🚨 Constraints:
 * - Each input will have **exactly one solution**.
 * - **Do not use the same element twice**.
 * - Return the answer in **any order**.
 *
 * 🎯 Goal:
 * Find the indices of two numbers that sum to the target efficiently.
 *
 * --------------------------------
 * 🌟 Examples:
 *
 * Example 1:
 * ----------
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] = 9, so we return [0, 1].
 *
 * Example 2:
 * ----------
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 *
 * Example 3:
 * ----------
 * Input: nums = [3, 3], target = 6
 * Output: [0, 1]
 *
 * --------------------------------
 * 🔢 Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 *
 * ✅ Assumptions:
 * - Exactly one valid solution exists for each input.
 *
 * --------------------------------
 * ⚡ Follow-up Challenge:
 * Can you solve it with a time complexity of **less than O(n²)**?
 *
 */

var twoSum = function (nums, target) {
  let objSet = {};
  for (let i = 0; i < nums.length; i++) {
    let com = target - nums[i];

    if (objSet[com] !== undefined) {
      return [objSet[com], i];
    }

    objSet[nums[i]] = i;
  }

  return [];
};

let sample = [2, 3, 4, 5, 6];

console.log(twoSum(sample, 6));
