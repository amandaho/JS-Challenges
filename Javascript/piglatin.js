function pigLatin(str) {
  var pigLatinWord = str.split(' ');
  let vowels = /[aeiou]/;

  if(str[0].match(vowels)){
    pigLatinWord = str + 'way';
  } else {
    var findConsonant = str.indexOf(str.match(vowels)[0]);
    pigLatinWord = str.substr(findConsonant) + str.substr(0,findConsonant) + 'ay';

  }
  console.log(pigLatinWord);
}

pigLatin('amanda');
pigLatin('good');
