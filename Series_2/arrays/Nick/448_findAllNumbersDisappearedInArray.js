/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/
const findDisappearedNumbers = nums => {
  let res = nums.slice().fill(1);
  nums.forEach((num, i) => {
    res[num - 1] = -1;
  });
  return res.reduce((memo, curr, i) => {
    if (curr > 0) {
      memo.push(i + 1);
    }
    return memo;
  }, []);
};
