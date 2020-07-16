'use strict';
console.log('--- loading: remove.js');

const removeHandler = () => {
  debugger;
  const userInput = prompt('Enter a word to remove: ');
  if (userInput === null) {
    return;
  }

  const isUserInput = (entry) => {
    return entry === userInput;
  };
  const inputIsInArray = words
    .find(isUserInput);

  if (inputIsInArray) {
    const isNotUserInput = (entry) => {
      return entry !== userInput;
    };
    words = words.filter(isNotUserInput);
    displayHandler(`'${userInput}' has been removed`, words);
  } else {
    alert(`'${userInput}' does not exist`);
  }
};
