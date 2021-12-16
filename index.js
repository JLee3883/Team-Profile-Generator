const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const manQuestions = [
	{
		type: 'input',
		message: 'Please enter the team managers name:  ',
		name: 'employeeName',///
	},
	{
		type: 'input',
		message: 'Please enter the team managers employee ID: ',
		name: 'employeeID',///
	},
	{
		type: 'input',
		message: 'Please enter the team managers email address: ',
		name: 'employeeEmail',///
	},
	{	
		type: 'input',
		message: 'Please enter the team managers office number: ',
		name: 'employeeOffice',///
	},
]
		///
const employeeSelect = [
    {
        type: 'list',
        name: 'employeeType',///
        message: 'Please Select the type of employee you would like to add to your team or Done to finish:',
        choices: ["Engineer", "Intern", new inquirer.Separator(), "Done"]
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'Please enter your engineers name: '
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Please enter your engineers ID: '
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Please enter your engineers email: '
    },
    {
        type: 'input',
        name: 'employeeGit',
        message: 'Please enter your engineers GitHub username: '
    }
];

const intQry = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'Please enter the name of your intern:'
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Please enter the employee ID of your intern:'
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Please enter the email of your intern:'
    },
    {
        type: 'input',
        name: 'employeeSchool',
        message: 'Please enter the school name of your intern:'
    }
];
