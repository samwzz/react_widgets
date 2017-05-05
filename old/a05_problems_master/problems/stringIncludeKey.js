// Write a recursive method that takes in a string to search and a key string.
// Return true if the string contains all of the characters in the key
// in the same order that they appear in the key.



const stringIncludeKey = (string, key) => {
  if (key.length === 0){
    return true;
  }

  const nextKey = key[0];
  const stringIndex = string.indexOf(nextKey);

  if (stringIndex === -1){
    return false;
  }

  return stringIncludeKey(string.slice(stringIndex+1), key.slice(1));

};


console.log(stringIncludeKey("cadbpc", "abc")); //true
console.log(stringIncludeKey("cba", "abc")); // false
