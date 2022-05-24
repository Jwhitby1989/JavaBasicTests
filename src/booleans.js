function negate(a) {
  return !a;
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  if ((a && !b) || (!a && b)) {
    return true;
  } else {
    return false;
  }
}

function truthiness(a) {
  return Boolean(a);
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
}

function isOdd(a) {
  return a % 2 === 1;
}

function isEven(a) {
  return a % 2 === 0;
}

function isSquare(a) {
  // your code here
}

function startsWith(char, string) {
  return string[0] === char;
  /* if (string[0] === char) {
    return true;
  } else {
    return false;
  } */
}

function containsVowels(string) {
  // your code here - regex
}

function isLowerCase(string) {
  // your code here - regex
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
