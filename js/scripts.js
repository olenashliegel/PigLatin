function pigLatin(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const textArray = text.toLowerCase().split(" ");
  const resultArray = [];
  textArray.forEach(function (word) {
    if (vowels.includes(word.charAt(0))) {
      resultArray.push(word + "way");
    }
    else {
      let resultWord = word;
      for (let i = 0; i < word.length; i++) {
        //  debugger;
        if (consonants.includes(word[i])) {
          resultWord = resultWord.concat(word[i]);
        } else if (vowels.includes(word[i])) {
          resultArray.push(resultWord.slice(i).concat("ay"));
          break;
        }
      }
    }
  });
  return resultArray;
}

//console.log(pigLatin("a"));
//console.log(pigLatin("A"));
//console.log(pigLatin("A a E e I"));
//console.log(pigLatin("Acv add Ert ert Iui"));
console.log(pigLatin("ba bba"));