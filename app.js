const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

function init() {
	const logoText = logo ({name: "Employee Manager"}).render();
	console.log(logoText);
}

init();