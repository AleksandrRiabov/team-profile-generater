const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const { managerQuestions, engineerQuestions, internQuestions, nextStepOptons } = require('./assets/js/questions.js');

const render = require("./src/page-template.js");

//Employees array will be used to generate html using 'rendder' function
let employees = [];

//Prompt for Manager (Starts on loading file)
inquirer.prompt(managerQuestions)
  .then(response => {
    // Cretae new Manager object using response
    const manager = new Manager(...Object.values(response));
    employees.push(manager);
    //Prompt what is the next step
    promptForNextEmployee();
  });

//Prompt what is the next step (Add new employee or finish and generate html file)
function promptForNextEmployee() {
  inquirer.prompt(nextStepOptons)
    .then(response => {
      switch (response.addEmployee) {
        case 'Add engineer':
          promptForEngineer();
          break;
        case 'Add Intern':
          promptForIntern();
          break;
        default:
          createHTMLFile(); // Quit the quiestions and generate file
      }
    })
}

// PROMPT for an Engineer
function promptForEngineer() {
  inquirer.prompt(engineerQuestions)
    .then(response => {
      // Cretae new Engineer object using response
      const engineer = new Engineer(...Object.values(response));
      employees.push(engineer);
      //Prompt what is the next step
      promptForNextEmployee();
    });
}

//Prompt for Intern
function promptForIntern() {
  inquirer.prompt(internQuestions)
    .then(response => {
      // Cretae new Intern object using response
      const intern = new Intern(...Object.values(response));
      employees.push(intern);
      //Prompt what is the next step
      promptForNextEmployee();
    });
}

//Write / rewrite team.html file 
function createHTMLFile() {
  // Check if folder with name 'output' exist if not, create folder and file, if yes rewrite the file
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync((OUTPUT_DIR), err => console.log(err));
  }
  // Generate html string
  const file = render(employees);

  //Write/rewrite html file
  fs.writeFileSync(outputPath, file, error => {
    if (error) {
      console.log(error);
    } else {
      console.log('html file has been created.');
    }
  });
}



