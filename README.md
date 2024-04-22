## Test Automation Project 

This project is to automate Manuel Test cases for testing krieger Digital website using Cypress and Javascript.


## Project Overview

## Technologies Used
[Cypress](https://www.cypress.io/)is a modern end-to-end testing framework for web applications. It enables developers to write and execute automated tests in a fast, reliable, and intuitive manner. Cypress provides features such as built-in test runner, automatic waiting, real-time reloads, and easy debugging, making it a powerful tool for testing web applications.

## JavaScript
The tests are written in JavaScript, which is the primary language supported by Cypress. 

## npm (Node.js Package Manager)
[npm](https://www.npmjs.com/) is the package manager for JavaScript and the world's largest software registry. It is used to install and manage dependencies for the Cypress testing framework and any other required packages.


### Setup the Project

### Prerequisites 
This setup is for macOS Monterey or latest version  
Homebrew installed 
Installion of Node.js packages  

#### Getting started
- clone the github repo `git clone URL`
- navigate to the cloned directory `cd automation test`

- Install Node.js and NPM using homebrew
Step 1: Run the given command in your terminal.

`brew install node `

Some files will be downloaded. confirm and install the downloaded files

Step 2: Verify Node.js and NPM Installation

	For Node: `node -v`

	For NPM: `npm -v`

Homebrew will update the version of Node and NPM you have installed. Make sure that your Homebrew has the latest version of the Node package.

If not, then run the below command to update the Homebrew.

`brew update`

Run this command to update version of node:

`brew upgrade node`

It will update Node and NPM to the latest version.


- Install the npm 
`npm install`

- Install Cypress
`npm install cypress --save-dev`

#### Run the test automation
Navigate to the test cases folder e2e 
/automation-test/cypress/e2e/cypress/e2e

Run from cypress lanucher
`npx cypress open`


run in headles mode
```bash
npm run cy:silent-prod
```

run in cypress browser mode
````bash
npm run cy:editor-prod
````


