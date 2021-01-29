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
		.then(function(answer) {
			switch (answer.choice) {
				case "VIEW_EMPLOYEES":
					return viewEmployees();
				case "VIEW_EMPLOYEES_BY_MANAGER":
					return viewEmployeesByManager();
				case "ADD_EMPLOYEES":
					return addEmployees();
				case "DELETE_EMPLOYEES":
					return deleteEmployees();
				case "VIEW_DEPARTMENTS":
					return viewDepartments();
				case "ADD_DEPARTMENTS": 
					return addDepartments();
				case "DELETE_DEPARTMENTS":
					return addEmployees();
				case "ADD_ROLES":
					return addRoles();
				case "VIEW_ROLES":
					return viewRoles();
				case "DELETE_ROLES":
					return deleteRoles();
				case "UPDATE_EMPLOYEE_ROLES":
					return updateRoles();
				case "UPDATE_EMPLOYEE_MANAGER":
					return updateEmployeeManager();
				case "VIEW_BUDGET":
					return console.log("hello");
				case "EXIT":
					return connection.end();
			}
		})
}

async function viewEmployees() {
	const employees = await db.findEmployees();
	console.log("\n")
	console.table(employees);
	loadMainMenu();
}

async function viewEmployeesByManager() {
	console.log("view employees by manager")
}

async function addEmployees() {
	console.log("add employees")

}

async function deleteEmployees() {
	console.log("delete employees")
}

async function deleteEmployees() {
	console.log("hello")
}






init();