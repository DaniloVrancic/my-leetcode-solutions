class Solution {
    public:
        /**
        * @brief Generate the FizzBuzz sequence for numbers from 1 to n.
        * 
        * This function iterates through all numbers from 1 to n, and for each number,
        * it pushes to the back of the result array: "Fizz", "Buzz", or "FizzBuzz"based on the divisibility rules:
        * - Divisible by 3 -> "Fizz"
        * - Divisible by 5 -> "Buzz"
        * - Divisible by both 3 and 5 -> "FizzBuzz"
        * - Otherwise -> the number itself (as a string).
        *
        * @param n The upper limit of the range (inclusive).
        * @return A vector of strings containing the FizzBuzz results for all numbers from 1 to n.
        */
        vector<string> fizzBuzz(int n) {
            
        vector<string> stringsToReturn;
        stringsToReturn.reserve(n); // Reserving memory to avoid reallocation
         
        
         //Iterate through all the numbers in the given range (range always starts with 1)
         for(int i = 1; i <= n; ++i)
         {
             stringsToReturn.push_back(evaluateFizzBuzz(i));
         }
         
         return stringsToReturn;
        }
        
    private:
        // Helper function to check whether a number is divisible by 15, 5 or 3
        string evaluateFizzBuzz(int val){
            if(val % 15 == 0)
            {
                return "FizzBuzz";
            }
            else if(val % 5 == 0){
                return "Buzz";
            }
            else if(val % 3 == 0){
                return "Fizz";
            }
            else{
                return std::to_string(val); // Return the number as a string if not divisible by 15, 5 or 3
            }
        }
};