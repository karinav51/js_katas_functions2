function add(a, b) {
  return a + b;
}
console.log(add(2, 4));
//console.log(2 + 4);

function multiply(a, b) {
  let count = 0;
  let result = 0;
  while (count < b) {
    result = add(a, result);
    //console.log("hi");
    count = count + 1;
  }
  return result;
}
console.log(multiply(6, 4));

function power(x, n) {
  let count = 0;
  let result = 1;
  while (count < n) {
    result = multiply(x, result);
    count = count + 1;
  }
  return result;
}
console.log(power(2, 8));

function factorial(n) {
  let result = 1;
  let count = 0;
  while (count < n) {
    result = multiply(n - count, result);
    count = count + 1;
  }
  return result;
}
console.log(factorial(5));
