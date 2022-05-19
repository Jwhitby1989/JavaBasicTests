const getNthElement = (index, array) => {
  if (index > array.length) {
    return array[0];
  } else {
    return array[index];
  }
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  // return array.push(element);
};

const addToArray2 = (element, array2) => {
  return array2.map(() => {
    return array2.push(element);
  });
};

const removeNthElement = (index, array) => {
  // console.log(array.splice(index, 0, index));
};

const numbersToStrings = numbers => {
  // return numbers.split(',').toString();
};

const uppercaseWordsInArray = strings => {
  // console.log(strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  // console.log(
  //   strings
  //     .split(',')
  //     .reverse(' ')
  //     .join(',')
  // );
};

const onlyEven = numbers => {
  if (numbers % 2) {
    console.log(numbers);
  }
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  const newArr = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[0] === ['a', 'e', 'i', 'o', 'u']) {
      newArr.push(strings[i]);
    }
    return newArr;
  }
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
