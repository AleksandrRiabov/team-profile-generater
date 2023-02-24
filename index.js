const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
let employees = []

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt(
  [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
      validate: validateInput
    },
    {
      type: 'input',
      message: 'What is Employee ID',
      name: 'id',
      validate: validateInput
    },
    {
      type: 'email',
      message: `Please enter user's email`,
      name: 'email',
      default: () => { },
      validate: validateEmail
    },
    {
      type: 'input',
      message: 'What is your Office Number?',
      name: 'officeNumber',
      validate: validateNumber
    },
  ]
)
  .then(response => {
    const { name, id, email, officeNumber } = response;
    const manager = new Manager(name, id, email, officeNumber);
    employees.push(manager);

    promptForNextEmployee();
  });


function promptForNextEmployee() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What Employee do you want to add next?',
      choices: [
        new inquirer.Separator(),
        'Add engineer',
        new inquirer.Separator(),
        'Add Intern',
        new inquirer.Separator(),
        'Finish building the team',
        new inquirer.Separator()
      ],
      name: 'addEmployee',
    },
  ])
    .then(response => {
      const { addEmployee } = response;

      switch (addEmployee) {
        case 'Add engineer':
          promptForEngineer();
          break;
        case 'Add Intern':
          promptForIntern();
          break;
        default:
          console.log('(=======)')
          console.log(employees);
      }
    })
}

// PROMPT for an Engineer
function promptForEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is the engineer's name?",
      name: 'name',
      validate: validateInput
    },
    {
      type: 'input',
      message: 'What is the engineer Employee ID',
      name: 'id',
      validate: validateInput
    },
    {
      type: 'email',
      message: `Please enter engineer email address`,
      name: 'email',
      default: () => { },
      validate: validateEmail
    },
    {
      type: 'input',
      message: "What is the engineer's GitHub username?",
      name: 'github',
      validate: validateInput
    },
  ])
    .then(response => {
      const { name, id, email, github } = response;
      const engineer = new Engineer(name, id, email, github);
      employees.push(engineer);

      promptForNextEmployee();
    });
}


//Prompt for Intern
function promptForIntern() {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is the intern's name?",
      name: 'name',
      validate: validateInput
    },
    {
      type: 'input',
      message: "What is the intern's Employee ID",
      name: 'id',
      validate: validateInput
    },
    {
      type: 'email',
      message: `Please enter intern's email address`,
      name: 'email',
      default: () => { },
      validate: validateEmail
    },
    {
      type: 'input',
      message: "What is the intern's's School name?",
      name: 'school',
      validate: validateInput
    },
  ])
    .then(response => {
      const { name, id, email, school } = response;
      const intern = new Engineer(name, id, email, school);
      employees.push(intern);

      promptForNextEmployee();
    });
}

//========== VALIDATION FUNCTIONS +++++++++++
function validateEmail(email) {
  const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if (valid) {
    return true;
  } else {
    console.log(".  Please enter a valid email");
    return false;
  }
}

function validateInput(val) {
  if (val.trim()) {
    return true
  } else {
    console.log(' Invalid Input.');
    return false
  }
}

function validateNumber(val) {
  if (parseInt(val.trim())) {
    return true
  } else {
    console.log(' Must be a Number');
    return false
  }
}