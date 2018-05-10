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