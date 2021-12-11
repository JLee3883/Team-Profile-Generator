const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = [
	{
		type: 'input',
		message: 'What is the team managers name? ',
		name: 'manager',
	},
	{
		type: 'input',
		message: 'Enter the instructions for additional questions: ',
		name: 'additional',
},
{
	type: 'input',
	message: 'Enter the instructions for additional questions: ',
	name: 'additional',
},
{
	type: 'input',
	message: 'Enter the instructions for additional questions: ',
	name: 'additional',
},
{
	type: 'input',
	message: 'Enter the instructions for additional questions: ',
	name: 'additional',
},
	{
			type: 'list',
			message: 'Choose your License:',
			name: 'license',
			choices: ['Apache_2.0', 'BSD_2--Clause', 'CC0_1.0', 'MIT', 'MPL_2.0' ],
	},
	{
			type: 'input',
			message: 'Enter the instructions for additional questions: ',
			name: 'additional',
	},

]
