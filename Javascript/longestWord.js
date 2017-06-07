function longestWord(str) {
  var splitString = str.split(' ');
  var maxLength = 0;
  var maxWord = [];

  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i].length > maxLength) {
    maxLength = splitString[i].length;
    maxWord = splitString[i];
    }
  }
  console.log(maxLength);
  console.log(maxWord);
  //console.log(splitString);
}

longestWord('have you ever seen a penguin go to tea?');
longestWord('fool me once, shame on me. fool me twice, shame on heathcliff');
