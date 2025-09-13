/**
 * Solved using Sliding Windows
 * Goes through the entire input string with two range pointers that
 * point to the indexes of substrings, and moved
 * the right pointer while the strings aren't repeatedly occuring,
 * and the left one if a repeated character is present until it no longer is,
 * and gives the number of the longest substring without repeating characters.
 * 
 * IDEA:
 * Sets keep only unique variables stored. Use a set to store unique characters, whenever a repeating character occurs, compare
 * the counts of the biggest until that point and ongoing count, then clear the Set and fill it with the next repeating character.
 * 
 * @param {string} s The input string
 * @return {number} The number of characters of the substring without repeating characters
 */
    var lengthOfLongestSubstring = function(s) {
        let mySet = new Set();
        let left = 0;
        let maxLength = 0;

        for(let right = 0; right < s.length; right++)
        {
            while(mySet.has(s[right])){
                mySet.delete(s[left++]);
            }
            mySet.add(s[right]);
            maxLength = Math.max(maxLength, mySet.size);
        }
        return maxLength;
    };

    let testString1 = "dvdf";
    let testString2 = "abcabcc2aabbcdf";

    console.log(testString1);
    console.log(lengthOfLongestSubstring(testString1));