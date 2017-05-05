//Hint: quicksort checks by pivoting!
//Hint 2: The solution is a bit different than the solution in Ruby!


Array.prototype.quickSort = function () {
  if (this.length <= 1) {
    return this;
  }

  let pivot = this[0];
  let left = [];
  let right = [];

  for (var i = 1; i < this.length; i++) {
    if (pivot > this[i]) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }

  return left.quickSort().concat(pivot).concat(right.quickSort());

};

// this call back is essentially the prc we would pass in ruby.


const test = [7,3,5,2,8,1,9,3,4,].quickSort();
console.log(test);
