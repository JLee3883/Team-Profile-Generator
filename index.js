const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const manQuestions = [
	{
		type: 'input',
		message: 'Please enter the team managers name:  ',
		name: 'managerName',
	},
	{
		type: 'input',
		message: 'Please enter the team managers employee ID: ',
		name: 'managerID',
	},
	{
		type: 'input',
		message: 'Please enter the team managers email address: ',
		name: 'managerEmail',
	},
	{	
		type: 'input',
		message: 'Please enter the team managers office number: ',
		name: 'managerOffice',
	},
	{
		type: 'list',
		message: 'Would you like to add another team member? ',
		name: 'additional',
		choices: ['Engineer', 'Intern', 'Finish' ],
	},
	

]
