const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const connection = require("./db/connection");
require("console.table");

function init() {
	const logoText = logo ({name: "Employee Manager"}).render();
	console.log(logoText)
	loadMainMenu();
}

function loadMainMenu() {
	inquirer
		.prompt([
			{
				name: "choice",
				type: "list",
				message: "What would you like to do?",
				choices: [
					{
						name: "View Employees",
						value: "VIEW_EMPLOYEES",
					},
					{
						name: "View Employees By Manager",
						value: "VIEW_EMPLOYEES_BY_MANAGER"
					},
					{
						name: "Add Employees",
						value: "ADD_EMPLOYEES"
					},
					{
						name: "Delete Employees",
						value: "DELETE_EMPLOYEES"
					},
					{
						name: "View Departments",
						value: "VIEW_DEPARTMENTS"
					},
					{
						name: "Add Departments",
						value: "ADD_DEPARTMENTS"
					},
					{
						name: "Delete Departments",
						value: "DELETE_DEPARTMENTS"
					},
					{
						name: "View Roles",
						value: "VIEW_ROLES"
					},
					{
						name: "Update Employee Roles",
						value: "UPDATE_EMPLOYEE_ROLES"
					},
					{
						name: "Add Roles",
						value: "ADD_ROLES"
					},
					{
						name: "Delete Roles",
						value: "DELETE_ROLES"
					},
					{
						name: "Update Employee Manager",
						value: "UPDATE_EMPLOYEE_MANAGER"
					},
					{
						name: "View Budget",
						value: "VIEW_BUDGET"
					},
					{
						name: "Exit",
						value: "EXIT"
					}
				 ]
			}
		])
		
}

function viewEmployee() {
	
}

init();