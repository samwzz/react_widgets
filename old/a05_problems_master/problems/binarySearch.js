function myBsearch(array, target) {
  if (array.length === 0) {
    return -1;
  }

  let mid = Math.floor(array.length / 2);

  if (target === array[mid]) {
    return mid;
  } else if (target < array[mid]) {
    return myBsearch(array.slice(0, mid), target);
  } else {
    let search = myBsearch(array.slice(mid + 1), target);
    if (search === -1) {
      return -1;
    } else {
      return mid + 1 + search;
    }
  }
}

console.log(myBsearch([1,2,3,4,5], 2) ); // 1
console.log(myBsearch([1,2,3,4,5], 5)); // 4
console.log(myBsearch([1,2,3,4,5], 6)); // -1
