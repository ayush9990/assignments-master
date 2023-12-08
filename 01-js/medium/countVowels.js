/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    let countVowels = 0 ; 
    let strSplit = str.split("");
    for (i in strSplit)
    {
      //console.log(strSplit[i]);
      if (vowelsArray.includes(strSplit[i].toLowerCase()))
      {
        countVowels = countVowels + 1
        //console.log(countVowels);
      }
    }
    return countVowels
}

module.exports = countVowels;