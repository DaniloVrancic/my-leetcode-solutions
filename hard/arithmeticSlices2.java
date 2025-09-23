public class Solution {
	
    /**
     * Take total count and initialize as 0.
     * Create n HashMaps where n equals to the length of nums array.
     * Each HashMap represents a key-value pair where the key serves as a possible difference that occurs between the subarray members, and the value is the number of occurences for that difference value.
     * We can picture this as an n x n matrix, where each cell  represents the value of aritmethic occurences happening until the i-th index of the given *nums* array;
     * Use a HashMap (map) to store indices of elements with the same value. This will help efficiently find indices for the same values during the iteration.
        Iterate over pairs of indices (i, j) with i < j. For each pair, calculate the potential common difference a = 2 * nums[i] - nums[j].
        If map contains a, iterate over the indices in map.get(a) and check if the index k is less than i. If true, update dp[i][j] with dp[k][i] + 1 to extend the arithmetic subsequence. Otherwise, break the loop.
        Accumulate the counts from dp[i][j] into the variable sum.
        Return the final value of sum.
     * @param nums
     * @return Number of Arithmetic Slices including subarrays.
     */
	public int numberOfArithmeticSlices(int[] nums) {
		
		int total_count = 0;
		int n = nums.length;
		
		HashMap<Long, Integer>[] dp = new HashMap[n];
		for (int i = 0; i < n; ++i) dp[i] = new HashMap<Long, Integer>();
		
		for(int i = 1; i < n; ++i) {
			 for (int j = 0; j < i; j++) {
	                long diff = (long) nums[i] - (long) nums[j];
	                int cnt = dp[j].getOrDefault(diff, 0);
	                dp[i].put(diff, dp[i].getOrDefault(diff, 0) + cnt + 1);
	                total_count += cnt;
	            }
			}
		
		
		return total_count;
	}
}