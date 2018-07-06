/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

const maxSubArray = nums => {
  let currSum = nums[0];
  let maxSum = nums[0];

  nums.forEach((num, i) => {
    if (i > 0) {
      currSum = Math.max(num, currSum + num);
      maxSum = Math.max(maxSum, currSum);
    }
  });
  return maxSum;
};
