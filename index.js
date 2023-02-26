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

let employees = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt(managerQuestions)
  .then(response => {
    const manager = new Manager(...Object.values(response));
    employees.push(manager);

    promptForNextEmployee();
  });


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
          createHTMLFile();
      }
    })
}

// PROMPT for an Engineer
function promptForEngineer() {
  inquirer.prompt(engineerQuestions)
    .then(response => {
      const engineer = new Engineer(...Object.values(response));
      employees.push(engineer);

      promptForNextEmployee();
    });
}


//Prompt for Intern
function promptForIntern() {
  inquirer.prompt(internQuestions)
    .then(response => {
      const intern = new Intern(...Object.values(response));
      employees.push(intern);

      promptForNextEmployee();
    });
}


//Create Index HTML 
async function createHTMLFile() {
  // Check if folder with name 'output' exist if no, create folder and file, if yes rewrite the file
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync((OUTPUT_DIR), err => console.log(err));
  }

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



