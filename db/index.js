const connection = require("./connection");

class DB{
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    };

    findAllRoles(){
        return this.connection.query(
            "SELECT * FROM role ;"
        );
    };

    findAllDepartments(){
        return this.connection.query(
            "SELECT department.name, department.id, employee.first_name, employee.last_name, role.salary, department.name AS department FROM employee JOIN role on employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;"
        );
    };
    
    addDepartment(department){
        return this.connection.query("INSERT INTO department SET ? ", department); 
    };

    addRole(role){
        return this.connection.query("INSERT INTO role SET ? ", role);
    };

    addEmployee(employeeNew){
        return this.connection.query("INSERT INTO employee SET ?", employeeNew);
    };

    updateEmployeeRole(employeeId, roleId){
        
        return this.connection.query("UPDATE employee SET role_id = ? where id = ?", [roleId,employeeId]);
    };

    
};

module.exports = new DB(connection);