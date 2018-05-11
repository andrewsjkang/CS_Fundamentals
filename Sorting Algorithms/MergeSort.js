/*
  Merge sort is actually very useful and one of the easier divide-and-conquer 
  algorithms to understand. It's easier to conceptualize than some of the other 
  ones. A key to merge sort is that it is recursive. If you're struggling to 
  grasp recursion, this is going to be doubly hard to understand this algorithm.

  The basic gist of merge sort is that you're going to take your big list, and 
  first divide down in two half size lists and recursively call merge sort on 
  those smaller list, which in turn will do the same. The base case is when you 
  have a list of one, at which point you will return that sorted list of one. On 
  the way up the recursive calls, you will merge those sorted lists together 
  (preferably by another merge function you'll write) that walks through both 
  lists simultaneously and inserts the smaller value first, effectively creating 
  a bigger sorted list.


  [1, 5, 6] sublist 1
  [2, 7, 8] sublist 2

  -> compare 1 and 2, take 1 and put it in new list
  -> compare 5 and 2, take 2 and put it in new list
  -> compare 5 and 7, take 5 and put it in new list
  -> compare 6 and 7, take 6 and put it in new list
  -> list one has no more elements
  add the rest of list two in order (7 and 8)
                    
  This combined merge with the divide-and-conquer recursion proves to be pretty 
  effective. When you call Array.prototype.sort it often uses MergeSort (depending 
  on the engine and the types of the elements in the array.) MergeSort is also 
  stable which just means if you have equivalent elements, it will keep their 
  original order in the array. This is sometimes important and sometimes not.

  Merge Sort Complexities:
  Time Complexity:
    Best: O(n log(n))
    Average: O(n log(n))
    Worst: O(n log(n))
  Space Complexity:
    Worst: O(n);
*/

const stitch = (left, right) => {
  const results = [];
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  
  return [...results, ...left, ...right];
}

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  
  return stitch(mergeSort(left), mergeSort(right));
}