const {userIcon} = require('./lib/shape');
const inquirer = require('inquirer');
const fs = require('fs');
// set up json
// set up index js and make prompt
// make shapes from shape js and conenct export contents
// somehow do test.js
// add gitignore later

function writeToFile(fileName, data) { //function that has the layout of the readme, which then be generated one the user completes a list of question down below.

    const logo = userIcon(data) // we are using the function from the the other js so we no longer have to have to write out the readme layout here and makin git easier to read what is written down
  
    fs.writeFileSync(fileName, logo, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  
  }

function init() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter up to three characters.',
          name: 'character',
        },
        {
          type: 'input',
          message: 'Enter a color for the font',
          name: 'colorFont',
        },
        {
          type: 'list', // allows user to select set options
          message: 'Provide a steps require to install your project.',
          choices: ['circle', 'square' ,'triangle'],
          name: 'shape',
        },
        {
          type: 'input',
          message: 'Enter a color for the you have selected.',
          name: 'colorShape',
        },
      ])
      .then(answers => { // once user is done answering questions, this line of code will generate a README with their responses.
        writeToFile('icon.svg', answers); 
      })
  
  }
  
  // Function call to initialize app
  init();
  
  module.exports = writeToFile;