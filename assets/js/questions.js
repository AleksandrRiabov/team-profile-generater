const inquirer = require('inquirer');
const { email, text, number } = require('./validate.js');

const managerQuestions = [
  {
    type: 'input',
    message: 'What is your user name?',
    name: 'name',
    validate: text
  },
  {
    type: 'input',
    message: 'What is Employee ID',
    name: 'id',
    validate: text
  },
  {
    type: 'email',
    message: `Please enter user's email`,
    name: 'email',
    validate: email
  },
  {
    type: 'input',
    message: 'What is your Office Number?',
    name: 'officeNumber',
    validate: number
  },
];

const engineerQuestions = [
  {
    type: 'input',
    message: "What is the engineer's name?",
    name: 'name',
    validate: text
  },
  {
    type: 'input',
    message: 'What is the engineer Employee ID',
    name: 'id',
    validate: text
  },
  {
    type: 'email',
    message: `Please enter engineer email address`,
    name: 'email',
    default: () => { },
    validate: email
  },
  {
    type: 'input',
    message: "What is the engineer's GitHub username?",
    name: 'github',
    validate: text
  },
];

const internQuestions = [
  {
    type: 'input',
    message: "What is the intern's name?",
    name: 'name',
    validate: text
  },
  {
    type: 'input',
    message: "What is the intern's Employee ID",
    name: 'id',
    validate: text
  },
  {
    type: 'email',
    message: `Please enter intern's email address`,
    name: 'email',
    default: () => { },
    validate: email
  },
  {
    type: 'input',
    message: "What is the intern's's School name?",
    name: 'school',
    validate: text
  },
];

const nextStepOptons = [
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
];

module.exports = { managerQuestions, engineerQuestions, internQuestions, nextStepOptons }