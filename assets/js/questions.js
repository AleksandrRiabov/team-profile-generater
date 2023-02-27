const inquirer = require('inquirer');
const { email, text, number } = require('./validate.js');

const managerQuestions = [
  {
    type: 'input',
    message: "What is the team manager's name?",
    name: 'name',
    validate: text
  },
  {
    type: 'input',
    message: "What is the team manager's id?",
    name: 'id',
    validate: text
  },
  {
    type: 'email',
    message: "What is the team manager's email?",
    name: 'email',
    validate: email
  },
  {
    type: 'input',
    message: "What is the team manager's office number?",
    name: 'officeNumber',
    validate: number
  },
];

const engineerQuestions = [
  {
    type: 'input',
    message: "What is your engineer's name?",
    name: 'name',
    validate: text
  },
  {
    type: 'input',
    message: "What is your engineer's id",
    name: 'id',
    validate: text
  },
  {
    type: 'email',
    message: "What is your engineer's email?",
    name: 'email',
    default: () => { },
    validate: email
  },
  {
    type: 'input',
    message: "What is your engineer's GitHub username?",
    name: 'github',
    validate: text
  },
];

const internQuestions = [
  {
    type: 'input',
    message: "What is your intern's name?",
    name: 'name',
    validate: text
  },
  {
    type: 'input',
    message: "What is your intern's id?",
    name: 'id',
    validate: text
  },
  {
    type: 'email',
    message: "What is your intern's email?",
    name: 'email',
    default: () => { },
    validate: email
  },
  {
    type: 'input',
    message: "What is your intern's School name?",
    name: 'school',
    validate: text
  },
];

const nextStepOptons = [
  {
    type: 'list',
    message: 'Which type of team member would you like to add?',
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
];

module.exports = { managerQuestions, engineerQuestions, internQuestions, nextStepOptons }