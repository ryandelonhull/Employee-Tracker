const connection = require("./connection");

class DB{
    constructor(connection){
        this.connection = connection;
    }

    viewAllEmployess(){
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    viewAllRoles(){
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.salary, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;"
        );
    }

    viewAllDepartments(){
        return this.connection.query(
            "SELECT employee.first_name, employee.last_name, role.salary, department.name AS department FROM employee JOIN role on employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;"
        );
    }

    updateDepartment(){
        return this.connection.query("UPDATE songs SET title='somehthing' WHERE artist=?",["da baby"], function(err, res){
            if(err) throw err;
        })
    }

    updateRoles(){
        return this.connection.query("UPDATE songs SET title='somehthing' WHERE artist=?",["da baby"], function(err, res){
            if(err) throw err;
        })
    }

    updateEmployees(){
        return this.connection.query("UPDATE songs SET title='somehthing' WHERE artist=?",["da baby"], function(err, res){
            if(err) throw err;
        })
    }

    deleteDepartment() {
        return this.connection.query("DELETE FROM songs WHERE artist=?", ["weeknd"], function(err,res){
            if(err) throw err;
        })
    }

    deleteRole() {
        return this.connection.query("DELETE FROM songs WHERE artist=?", ["weeknd"], function(err,res){
            if(err) throw err;
        })
    }

    deleteEmployee() {
        return this.connection.query("DELETE FROM songs WHERE artist=?", ["weeknd"], function(err,res){
            if(err) throw err;
        })
    }

    updateEmployeeRole(){
        return this. connection.query();
    }

    updateEmployeeManager(){
        return this.connection.query();
    }

    viewEmployeesByManager(){
        return this.connection.query();
    }
}