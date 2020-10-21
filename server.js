const inquirer = require("inquirer");
const db = require("./db");
require("console.table");

runSearch();
function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add a department",
          "View all roles",
          "Add a role",
          "View all employees",
          "Add an employee",
          "Update an employee's role",
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all departments":
            viewAllDepartments();
            break;
  
        case "Add a department":
            newDepartment();
            break;
  
        case "View all roles":
            viewAllRoles();
            break;
  
        case "Add a role":
            newRole();
            break;
    
        case "View all employees":
            viewAllEmployess();
            break;
    
        case "Add an employee":
            newEmployee();
            break;
    
        case "Update an employee's role":
            updateEmployeeRole();
            break; 
        }
        });
};



async function viewAllEmployess(){
    const employees = await db.findAllEmployees();
    console.table(employees);
    runSearch();
};

async function viewAllRoles(){
    const roles = await db.findAllRoles();
    console.table(roles);
    runSearch();
};

async function viewAllDepartments(){
    const departments = await db.findAllDepartments();
    console.table(departments);
    runSearch();
};

async function newDepartment(){
    const department = await inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the new department?"
        }
    ]);

    await db.addDepartment(department);
    runSearch();
};

async function newRole() {
    const departments = await db.findAllDepartments();
    const departmentsChoices = departments.map(({id,name}) => ({
        name: name,
        value: id
        
    }));
    //console.log(departmentsChoices);
    const role = await inquirer.prompt([
        {
            name: "title",
            message: "What is the name of the new role?"
        },
        {
            name: "salary",
            message: "What salary will this role have?"
        },
        {
            name: "id",
            type: "list",
            message: "What department does this role belong to?",
            choices: departmentsChoices
        }
    ]);

    await db.addRole(role);
    runSearch();
};

async function newEmployee() {
    const roles = await db.findAllRoles();
    const rolesChoices = roles.map(({id,title}) => ({
        name: title,
        value: id
    }));
    const managers = await db.findAllEmployees();
    const managerChoices = managers.map(({id, first_name, last_name}) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    const employeeNew = await inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the first name of the new employee?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the last name of the employee?"
        },
        {
            name: "role_id",
            type: "list",
            message: "What role will this employee have?",
            choices: rolesChoices
        },
        {
            name: "manager_id",
            type: "list",
            message: "Who is their manager?",
            choices: managerChoices
        }
    ]);

    await db.addEmployee(employeeNew);
    runSearch();
};

async function updateEmployeeRole() {
    const managers = await db.findAllEmployees();
    const managerChoices = managers.map(({id, first_name, last_name}) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    const { employeeId } = await inquirer.prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee is in a different role?",
            choices: managerChoices    
        },
    ]);

    const roles = await db.findAllRoles();
    const rolesChoices = roles.map(({id, title}) => ({
        name: title,
        value: id
    }))

    const {roleId} = await inquirer.prompt([
        {
            type: "list",
            name: "roleId",
            message: "which role to assigne?",
            choices: rolesChoices
        }
    ])

    await db.updateEmployeeRole(employeeId, roleId);
    runSearch();
};
