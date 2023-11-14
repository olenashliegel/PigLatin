function pigLatin(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  const textArray = text.toLowerCase().split(" ");
  const resultArray = [];
  //debugger;
  for (let i = 0; i < textArray.length; i++) {

    if (vowels.includes(textArray[i].charAt(0))) {
      resultArray.push(textArray[i] + "way");
    }

  }
  return resultArray;
}

console.log(pigLatin("a"));
console.log(pigLatin("A"));
console.log(pigLatin("A a E e I"));
console.log(pigLatin("Acv add Ert ert Iui"));
