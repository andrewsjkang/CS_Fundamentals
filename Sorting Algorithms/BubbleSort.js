/*
  Bubble sort!

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order

  Bubble Sort Complexities:
    Time Complexity:
      Best: O(n)
      Average: O(n^2)
      Worst: O(n^2)
    Space Complexity:
      Worst: O(1);
*/

const bubbleSort = (nums) => {
  let didSwap = false;

  do {
    didSwap = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temps;
        didSwap = true;
      }
    }
  } while (didSwap);

  return nums;
}