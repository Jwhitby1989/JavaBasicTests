const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    return array[index - array.length];
  } else {
    return array[index];
  }
}; // try this again

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array2) => {
  const newArr = [...array2];
  newArr.push(element);
  return newArr;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);

  return array;
};

const numbersToStrings = numbers => {
  const newArr = numbers.map(number => {
    return number.toString();
  });
  return newArr;
};

const uppercaseWordsInArray = strings => {
  const arr = strings.map(string => {
    return string.toUpperCase();
  });
  return arr;
};

const reverseWordsInArray = strings => {
  const arry = strings.map(string => {
    return string
      .split('')
      .reverse()
      .join('');
  });
  return arry;
};

const onlyEven = numbers => {
  const array = numbers.filter(number => {
    return number % 2 === 0;
  });
  return array;
};

const removeNthElement2 = (index, array) => {
  const newArr = [...array];
  newArr.splice(index, 1);
  return newArr;
};

const elementsStartingWithAVowel = strings => {
  const newArr = [];
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  strings.forEach(string => {
    vowels.forEach(vowel => {
      if (string.charAt(0) === vowel) {
        newArr.push(string);
      }
    });
  });

  return newArr;
};

const removeSpaces = string => {
  const array = string.map(item => {
    item.join('');
  });
  return array;
};

const sumNumbers = numbers => {
  // let initialVal = 0;
  // const sum = numbers.reduce(prevVal, currentVal) => prevVal + currentVal, initialVal;
  // console.log(sum)
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
