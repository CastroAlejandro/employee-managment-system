const connection = require("./connection");

class DB {
	constructor(connection) {
		this.connection = connection;
	}
	
	findEmployees() {
		return this.connection.query(
			"SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;" 
		)
	}

	findEmployeesManager() {
		return this.connection.query(
			
		)
	}

	findDepartments() {
		return this.connection.query(
			"SELECT * FROM department ORDER BY id"
		)
	}

	findRoles(){
		return this.connection.query(
			"SELECT id, title, salary FROM role"
		)
	}
}


module.exports = new DB(connection);