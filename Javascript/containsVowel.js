function containsVowel(strOne, strTwo) {
  if (strOne.match(/[aeiouAEIOU]/)) {
    console.log("The input string of " + strOne + " has a vowel in it")
  } else console.log("The input string of " + strOne + " does not have a vowel in it")

  if (strTwo.match(/[aeiouAEIOU]/)) {
    console.log("The input string of " + strTwo + " has a vowel in it")
  } else console.log("The input string of " + strTwo + " does not have a vowel in it")

}


containsVowel ("alpha", "hmph")
