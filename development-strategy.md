# Development Strategy

> `project-favorite-words`

A simple webpage where we work collaboratively on arrays. You can add more than one word then you can display, remove, replace and search them.

## Wireframe

![wireframe](.\images\wireframe.png)

## 0. Set-Up

### Repository

- Created a new repository [generated](https://github.com/HackYourFutureBelgium/favorite-words)
- Cloned the repository
- Added Html and Css features for user interface
- Started `development-strategy.md` file
- Added [this wireframe](.\images\wireframe.png)
- Created issues
- Pushed the changes
- Turned on GitHub Pages

## 1. Display

**As a site visitor, I want to see all words**

> assigned to `Oguz`  
> reviewers `Olga` , `Pavel` and `Sayed`

## Repo

This user story was developed on a branch called `display`

### HTML

- Added a box to displaying words and using with `innerHTML`

### CSS

- Added some features for better user interface

## JS

- Added `reduce()` method to reduces the global array `words` to a single value.   
- Added `document.getElementById('').innerHTML` to display the result in the webpage

## 2. Add-word

**As a site visitor, I would like to add my word by pressing a button!**

> assigned to `Yauhenia`  
> reviewers `Oguz` , `Sayed` and `Olga`

## Repo

This user story was developed on a branch called `add_word`

## JS

- The core of function logic is input and the method "push"
- As well as a condition in case there is no input

## 3. Remove-word

**As a site visitor, I want to have possibility remove any word from the array**

> assigned to `Olga`  
> reviewers `Oguz` and `Sayed`

## Repo

This user story was developed on a branch called `remove`

### HTML

nothing to change

### CSS

nothing to change

## JS

- Used `promt`-method for enter word which will be removed from array;
- Used `find`-method for find entered word in the array;
- Used `filter`-method for return new array without removed word.

## 4. Find-word

**As a site visitor, I want to see if my word is in all words or not**

> assigned to `Oguz`  
> reviewers `Olga` and `Sayed`

## Repo

This user story was developed on a branch called `find-word`

### HTML

- nothing changed

### CSS

- nothing changed

## JS

- Added `find()` method to find if the user-input exists in `words` array or not

## 5. Replace-word

**As a site visitor, **

> assigned to `Pavel`  
> reviewers `...` , `...` and `...`

## Repo

This user story was developed on a branch called `....`

### HTML

-

### CSS

-

## JS

-

## 6. Search-letters/word

**As a site visitor, I want to enter an symbol (letter or word) and see all wirds from array which contain this symbol**

> assigned to `Olga`  
> reviewers `Oguz` and `Sayed`

## Repo

This user story was developed on a branch called `search`

### HTML

It hasn't changes.

### CSS

It hasn't changes.

## JS

- Use `includes`-method for determine whether an array contains a queried element
- Use `filter`-method for return items of array with queried symbol

## 7. Clear-all

**As a site visitor, I want to be able to destroy the entire array and clear all what others have saved so far by just one click**

> assigned to `Sayed`  
> reviewers `Oguz`

## Repo

This user story was developed on a branch called `clear-all`

### HTML

- Nothing changed

### CSS

- Nothing changed

## JS

- [x] assigned empty array to the variable `words`
- [x] wrote alert message `all words have been cleared`
