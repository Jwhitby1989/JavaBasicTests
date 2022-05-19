function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
  const sum = b * a;
  const sum2 = sum;
  return sum2;
}

function round(a) {
  return Math.round(a);
}

function roundUp(a) {
  return Math.ceil(a);
}

function roundDown(a) {
  return Math.floor(a);
}

function absolute(a) {
  return Math.abs(a);
}

function quotient(a, b) {
  const sums = (a / b) % 1;
  const sums2 = Math.trunc(a, b);
  console.log(sums, sums2);
}

function remainder(a, b) {
  return a % b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
