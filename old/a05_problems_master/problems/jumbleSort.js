// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e'])  // 'ollhe'


const jumbleSort = (str, alphabet = 'abcdefghijklmnopqrstuvwxyz') => {
  let swapped = true;
  const letters = str.split("");
  while(swapped){
    swapped = false;

    for (var i = 0; i < letters.length-1; i++) {
      let first = letters[i];
      let second = letters[i+1];
      if (alphabet.indexOf(first) > alphabet.indexOf(second)){
        letters[i] = second;
        letters[i+1] = first;
        swapped = true;
      }
    }
  }
  return letters.join("");
};


console.log(jumbleSort("hello")); // ehllo
