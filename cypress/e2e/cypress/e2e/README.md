*Install Node.js:*
You can download and install Node.js from the official website: https://nodejs.org/en/download/

*Create a new project:*
Create a new directory for your project and initialize a new Node.js project using the following command in your terminal:



`npm init -y`

Install Selenium WebDriver: Install the selenium-webdriver package by running the following command in your terminal:



`npm install selenium-webdriver`
`npm install -g webdriver-manager`

Install Puppeteer: 
Run the command `npm install puppeteer` in your project directory to install Puppeteer as a project dependency.


*Download a web driver:* 
Download the web driver for your browser of choice. You can download the ChromeDriver for Google Chrome from the following link: https://chromedriver.chromium.org/downloads

*Set up the web driver:*
Extract the downloaded web driver and place it in a directory in your project. Add the path to the web driver to your system's PATH environment variable.

*Create a new JavaScript file:*
Create a new JavaScript file in your project directory and add the following code to it:

javascript
```const { Builder, By, Key, until } = require('selenium-webdriver');

(async function runTests() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Add your test code here
  } finally {
    await driver.quit();
  }
})();
```
*Run your tests:*
Run your tests by executing the JavaScript file using Node.js in your terminal:


`node Automation_Trello_UI_Test_scenarios.js`
That's it! You should now be able to run Selenium WebDriver tests with JavaScript. 

### Assignment
Please create a simple test suite that combines verification of basic functionality of [Trello](https://trello.com/) task management tool both through its UI and REST API.

### Some example flows that you could cover in your tests
With this task we would love to see an example of how you would handle test automation for a project where both UI and backend are rich in important functionality.
Automating tests for basic Trello features, like creating boards, adding lists and cards to them, editing tasks and moving them between lists, is enough.
Please decide which steps/tests should be done through UI, and which through REST API, based on your experience (for example, setting up a new board with a few cards though API, and then performing some actions with created cards through UI).

### Our expectations for this task
* Please use any programming language and testing tools/libraries of your preference (for example, Java with RestAssured and Selenium, JavaScript with Cypress, etc.).
* Optional: think about reporting or some other way to make test results quick to interpret and test failures easier to investigate.
* Include description of your solution, choice of tools and instructions on how to execute the tests in the readme file.
* Please push your code to the provided git repository and submit your assignment within 5 calendar days.

### Trello API Reference
To be able to use Trello API you would need to register an account and generate access token as described [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/).
Detailed API reference can be found [here](https://developer.atlassian.com/cloud/trello/rest).
Please consider parametrizing the credentials in your test project and don't share your access data with us.

### Tips
* Let us know if you have any questions - we're happy to help.
* Keep it simple, no need to spend too much time on this task or implement more than 5 test cases.
* Think about easiness of adding new test cases and making changes when building your test suite/framework.
* If there is something you would have improved or done differently if you had more time, please feel free to mention it in the readme file.


*UI Test Cases:*
Verify user can create a new board.
Verify user can add a list to a board.
Verify user can add a card to a list.
Verify user can move a card from one list to another.
Verify user can edit a card's title and description.
Verify user can delete a card.
Verify user can archive a list.

*REST API Test Cases:*
Verify user can create a new board via REST API.
Verify user can add a list to a board via REST API.
Verify user can add a card to a list via REST API.
Verify user can move a card from one list to another via REST API.
Verify user can edit a card's title and description via REST API.
Verify user can delete a card via REST API.
Verify user can archive a list via REST API.
