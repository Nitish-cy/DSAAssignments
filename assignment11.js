//Q-1 
// Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.
// You **must not use** any built-in exponent function or operator.
var mySqrt = function(x) {
    let low = 1,
      high = x,
      ans = 0;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (Math.floor(x / mid) === mid) return mid;
      else if (Math.floor(x / mid) < mid) high = mid - 1;
      else {
        low = mid + 1;
        ans = mid;
      }
    }
    return ans;
};

//Q2- A peak element is an element that is strictly greater than its neighbors.
// Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.
// You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in `O(log n)` time.