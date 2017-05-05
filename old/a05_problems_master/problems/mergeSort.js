//Write an Array#merge_sort method; it should not modify the original array.
// function mergeSort(array) {
//
// }
//
// function merge(left, right) {
//
// }
const defaultComp = (x,y) => {
  if (x < y) {
    return 1;
  } else if ( x > y) {
    return -1;
  } else {
    return 0;
  }
};

Array.prototype.mergeSort = function (comparable = defaultComp) {
  if (this.length <= 1){
    return this;
  }

  const mid = Math.floor(this.length / 2);
  const left = this.slice(0, mid).mergeSort(comparable);
  const right = this.slice(mid).mergeSort(comparable);

  return merge(left, right, comparable);

};

function merge(left, right, comparable) {
  const merged = [];
  while (left.length > 0 && right.length > 0){
    if (comparable(left[0], right[0]) === -1) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left, right);
}

const comparable = (x,y) => {
  if (x > y) {
    return 1;
  } else if ( x < y) {
    return -1;
  } else {
    return 0;
  }
};

console.log([1,9,2,3,0,5,6,43,24].mergeSort(comparable));
console.log([1,9,2,3,0,5,6,43,24].mergeSort());
