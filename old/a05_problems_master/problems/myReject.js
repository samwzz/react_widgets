Array.prototype.myReject = function (cb) {
  let result = [];

  for (var i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

//tester callback
function lessThan10(num){
  return num < 10;
}

console.log([1,2,3,4,12,13,14].myReject(lessThan10));
