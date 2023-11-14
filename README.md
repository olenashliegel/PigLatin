Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("A");
Expected Output: "away"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("A a E e I");
Expected Output: "away away eway eway Iway"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("Acv add Ert ert Iui");
Expected Output: "acvway addway ertway ertway iuiway"

Test: "It will move all of the first consecutive consonants to the end and add "ay" to the end of words that begin with a consonant."
Code: pigLatin("ba bba");
Expected Output: "abay abbay"

Test: "It  will add "ay" to the end of all words that consist of only one consonant letter"
Code: pigLatin("b b");
Expected Output: "bay bay"