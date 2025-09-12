/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var returningNums = [];

    for(var i = 0; i < nums.length; i++)
    {
        let numToAdd = 0;
        for(var j = 0; j <= i; j++)
        {
            numToAdd += nums[j];
        }
        returningNums.push(numToAdd);
    }
    return returningNums;
};


let nums1 = [1,2,3,4];
let nums2 = [1,1,1,1,1]
let nums3 = [3,1,2,10,1]

console.log(runningSum(nums1));
console.log(runningSum(nums2));
console.log(runningSum(nums3));