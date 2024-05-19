let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(4, 5));

let PrintFunction = (inputFunction) => {
  let result1 = inputFunction(4, 5);
  let result2 = inputFunction(6, 7);
  return [result1, result2];
};
console.log(PrintFunction(multiply));
