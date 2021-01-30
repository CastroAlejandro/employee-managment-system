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
		.then(answer => {
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
					return deleteDepartments();
				case "VIEW_ROLES":
					return viewRoles();
				case "ADD_ROLES":
					return addRoles();
				case "DELETE_ROLES":
					return deleteRoles();
				case "UPDATE_EMPLOYEE_ROLES":
					return updateRoles();
				case "UPDATE_EMPLOYEE_MANAGER":
					return updateEmployeeManager();
				case "VIEW_BUDGET":
					return viewBudget();
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
	const viewByManager = await db.findEmployeesManager();
	console.table(viewByManager);
	loadMainMenu();
}

async function addEmployees() {
	console.log("add employees")

}

async function deleteEmployees() {
	
}

async function viewDepartments() {
	const viewDept = await db.findDepartments();
	console.table(viewDept);
	loadMainMenu();
}

async function addDepartments() {
	const addDept = await db.findDepartments();
	console.table(addDept)
	inquirer
		.prompt([
			{
				name: "choice",
				type: "input",
				message: "What is the name of the new department?"
			}
		])
		.then(answer => {
			const newDept = db.newDepartments(answer.choice);
			console.log("New Department: " + answer.choice + ", has been added.")
		})
}

async function deleteDepartments() {
	console.log("delete departments")
}

async function viewRoles() {
	
	const viewRoles = await db.findRoles();
	console.table(viewRoles)
	loadMainMenu();
}

async function addRoles() {
	const addRol = await db.findRoles();
	console.table(addRol)
	inquirer
		.prompt([
			{
				name: "role",
				type: "input",
				message: "What is the new role?"

			},
			{
				name: "salary",
				type: "input",
				message: "What is the salary for the new role?"

			},
			{
				name: "choice",
				type: "rawlist",
				choices: () => {
					let roleArr = [];
					for (let i = 0; i < addRol.length; i++) {
						roleArr.push(addRol[i].department_id)
					}
					return roleArr;
				},
				message: "Which department does the role belong to?"
			},
		])
		.then(answer => {
		
		})
}

async function deleteRoles() {
	
	const roles = await db.findRoles();
	inquirer
		.prompt([
			{
				name: "role",
				type: "rawlist",
				choices: () => {
					let roleArr = [];
					for (let i = 0; i < roles.length; i++) {
						roleArr.push(roles[i].title)
					}
					return roleArr;
				},
				message: "Which role would you like to delete?"
			},
		])
		.then(answer => {
			let delRole;
			for (let i = 0; i < roles.length; i++) {
				if (roles[i].title === answer.role) {
					delRole = roles[i].id;
				}
			}
			const deletedRole = db.destroyRole(delRole);
			loadMainMenu();
		})

	console.table(roles)
}

async function updateRoles() {
	console.log("update roles")
}

async function updateEmployeeManager() {
	console.log("update employee's manager")
}

async function viewBudget() {
	console.log("budget total")
}


init();