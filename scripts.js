/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.
*/

const compareStrings = (string1, string2) => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 99;
  let string1rev;
  let string2rev;
  //Make string1 the longer of the two strings
  if (string1.length < string2.length) {
    string1rev = string1;
    string1 = string2;
    string2 = string1rev;
    }
  string1rev = reverseString(string1);
  string2rev = reverseString(string2);
  for (i=0; i<string1.length; i++) {
    //console.log("loop # ", i, ", (x,y): ", string1[i],", ", string2[i])
    if (string1[i] != string2[i]) {
      count1++;
    }
    //console.log("count1 is = ", count1)
  }
  for (i=0; i<string1rev.length; i++) {
    //console.log("loop # ", i, ", (x,y): ", string1rev[i],", ", string2rev[i])
    if (string1rev[i] != string2rev[i]) {
      count2++;
    }
    //console.log("count2 is = ", count2)
  }
  let regex = new RegExp(string2)
  console.log(regex)
  console.log(string1.match(regex), [string2])
  if (string1.match(regex)[0]==string2) {count3 = string1.length-string2.length}
  return Math.min(count1,count2,count3)
}

const reverseString = (yourString) => {
  let output = '';
  for (i=yourString.length-1; i>=0; i--) {
    output = output + yourString[i];
  }
  return output;
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
  let input2 = $('#input2').val();
  $('#output-section-1').text(compareStrings(input1,input2));
  })
});
