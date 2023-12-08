/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let currentLargestElement = null ;
    if (numbers.length == 0){
        return undefined;
    }
    else{
        for (i = 0; i < numbers.length ; i++)
        {
            if (i == 0)
            {
                currentLargestElement = numbers[i]; 
            }
            else
            {
                if (numbers[i] > currentLargestElement)
                {
                    currentLargestElement = numbers[i];
                }
            }
        } 
        return currentLargestElement ;
    }
}

module.exports = findLargestElement;