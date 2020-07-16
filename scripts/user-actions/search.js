'use strict';
console.log('--- loading: search.js');

const searchHandler = () => {
  debugger;
  const userInput = prompt('Enter a search query: letter, syllable or word');
  if (userInput === null) {
    return;
  }

  const includesSubstring = (entry) => {
    return entry === userInput;
  };
  const foundWord = words.filter(includesSubstring);

  displayHandler(`search results for "${userInput}" ${foundWord}`, []);
  
};
