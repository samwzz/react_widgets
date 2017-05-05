// Implement a method that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0

const fibSum = (num) => {
  if (num === 2) {
    return 2;
  }
  if (num <= 1) {
    return 1;
  }

  return fibSum(num - 1) + fibSum(num - 2) + 1;

};
console.log(fibSum(5)); //
