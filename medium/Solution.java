public class Solution {
	
	static final int MINIMAL_NUM_OF_ELEMENTS = 3;
	
	public int numberOfArithmeticSlices(int[] nums) {
	       int range = MINIMAL_NUM_OF_ELEMENTS;
	       
	       
	       if(nums.length < 3) {
	    	   return 0;
	       }
	       
	    /*
	     *  If the length of the array is more than 3, use this value to return the number of counted subarrays that match the criteria
	     */
	       int numOfSlices = 0; 
	       
	       //numOfSlices = bruteForceNumberOfAritmeticSlicesMethod(nums, range, numOfSlices);
	       int current = 0;
	       
	       for(int i = 2; i < nums.length; ++i) {
	    	   
	    	   if(nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2])
	    	   {
	    		   current++;
	    		   numOfSlices += current; // Chain the number of the slices if the sequence continues with the next three
	    	   }
	    	   else {
	    		   current = 0;
	    	   }
	       }
	       return numOfSlices;
	}

	/**
	 * Brute force method that works with sliding windows.
	 * Checks subarrays by range and if the subarray is arithmetic
	 * the counter goes up. Parses till the end of the array then increases the range that will be checked.
	 * O(n^3) complexity
	 * 
	 * @param nums The numbers array that is to be checked for Arithmetic subarrays
	 * @param range	The length of the subarrays
	 * @return The number of subarrays that meet the Arithmetic array criteria
	 */
	private int bruteForceNumberOfAritmeticSlicesMethod(int[] nums, int range) {
		int numOfSlices = 0;
		while(range <= nums.length) {
	    	   
	    	   for(int i = 0; i < nums.length; ++i) {
	    		   int startIndex = i;
	    		   int endIndex = i + range - 1;
	    		   
	    		   if (endIndex >= nums.length) {
	    			   continue;
	    		   }
	    		   
	    		   if(isArithmeticSubarray(nums, startIndex, endIndex)) {
	    			   numOfSlices++;
	    		   }
	    	   }
	    	  range++;
	       }
		return numOfSlices;
	}
	
	/**
	 * Helper function which checks any array if it is arithmetic
	 * 
	 * @param nums (Sub)array which will get checked
	 * @return boolean value on whether the given array is an arithmetic array
	 */
	private boolean isArithmeticSubarray(int[] nums, int startIndex, int endIndex) {
		//check the difference of the first two members of the candidate array
		int requiredDiff = nums[startIndex + 1] - nums[startIndex]; 
		boolean flag = true;
		
		for(int i = startIndex + 1; i <= endIndex; i++) {
			if(nums[i] - nums[i-1] != requiredDiff) {
				flag = false;
				break;
			}
		}
		
		return flag;
	}
}
