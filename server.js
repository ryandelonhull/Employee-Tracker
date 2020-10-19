const inquirer = require("inquirer");


function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add a department",
          "Delete a department",
          "View all roles",
          "Add a role",
          "Delete a role",
          "View all employees",
          "Add an employee",
          "Delete an employee",
          "Update an employee's role",
          "Update an employee's manager",
          "View employees by manager",
          "Exit"

        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all departments":
            viewAllDepartments();
            break;
  
        case "Add a department":
            updateDepartment();
            break;
  
        case "Delete a department":
            deleteDepartment();
            break;
  
        case "View all roles":
            viewAllRoles();
            break;
  
        case "Add a role":
            updateRoles();
            break;
        
        case "Delete a role":
            deleteRole();
            break;
    
        case "View all employees":
            viewAllEmployess();
            break;
    
        case "Add an employee":
            updateEmployees();
            break;
    
        case "Delete an employee":
            deleteEmployee();
            break;
    
        case "Update an employee's role":
            updateEmployeeRole();
            break; 
            
        case "Update an employee's manager":
            updateEmployeeManager();
            break;
        
        case "View employees by manager":
            viewEmployeesByManager();
            break; 

        case "View employees by manager":
            viewEmployeesByManager();
            break; 
        }
        });
}

runSearch();
