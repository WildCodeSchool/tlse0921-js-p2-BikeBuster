# React Boilerplate with linters config  
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation and requirements
### Step 1 : installing the deps

Start by installing the dependencies by typing `npm install` in your terminal.

### Step 2 : Needed extensions for linting

This project comes with a set of common styling rules both for JS and CSS.

To benefit from the linting, you will need to have the following extensions installed in VScode :
- Prettier
- ESLint
- Stylelint

Ensure that prettier is the selected formatter for css

### Step 3

Once everything above is installed, reload your VScode window by pushing `ctrl + shift + p` and select `Developper: Reload window`

## Checks and Linters

### Pre-commits checks with Husky and Lint-staged

Before each commit, linters will be launched to check your code. If your code break some linting rules, you won't be able to commit your staged files. Ensure that your codebase is clean before each commit. 

You can launch manually the checks with `npm run lint`
### ESLint configuration

ESLint is configured to enforce an lightened version of AirBnB style rules.

Here are the differences with the AirBnB rules :
  - Props spreading is allowed
  - No need to add `import React from 'react'` stuff
  - Missing PropTypes only returns warning 
  - Enforced "one expression per line" is off
 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
