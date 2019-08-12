/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.
*/

const compareStrings = (string1, string2) => {
  let count = 0;
  let temp;
  if (string1.length < string2.length) {
    temp = string1;
    string1 = string2;
    string2 = temp;
    }
  for (i=0; i<string1.length; i++) {
    console.log("loop # ", i, ", (x,y): ", string1[i],", ", string2[i])
    if (string1[i] != string2[i]) {
      count++;
    }
    console.log("count is = ", count)
  }
  return count;
}

// let test1 = "kitten";
// let test2 = "sitting";
// console.log(compareStrings(test1,test2))

let test3 = "reopen";
let test4 = "open";
console.log(compareStrings(test3,test4))

$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  console.log(input1)
  $('#output-section-1').text(input1);
  })
});
