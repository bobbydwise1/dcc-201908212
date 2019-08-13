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
  //Find suffixes
  for (i=0; i<string1.length; i++) {
    if (string1[i] != string2[i]) {
      count1++;
    }
  }
  //find prefixes
  for (i=0; i<string1rev.length; i++) {
    if (string1rev[i] != string2rev[i]) {
      count2++;
    }
  }
  //find prefixes+suffixes
  let regex = new RegExp(string2)
  if (string1.match(regex) != null) {
    if (string1.match(regex)[0]==string2) {count3 = string1.length-string2.length}
  }
  //Pick the smallest change delta
  return Math.min(count1,count2,count3)
}

const reverseString = (yourString) => {
  let output = '';
  for (i=yourString.length-1; i>=0; i--) {
    output = output + yourString[i];
  }
  return output;
}

$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  let input2 = $('#input2').val();
  $('#output-section-1').text(compareStrings(input1,input2));
  })
});
