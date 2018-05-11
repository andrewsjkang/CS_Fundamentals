/*
  Insertion sort!

  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.

  Insertion Sort Complexities:
  Time Complexity:
    Best: O(n)
    Average: O(n^2)
    Worst: O(n^2)
  Space Complexity:
    Worst: O(1);
*/

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const spliced = nums.splice(i, 1);
      nums.splice(j, 0, spliced[0]);
    }
  }
}