const inquirer = require('inquirer');
const mysql = require('mysql2');
//Use the miniproject to assist
const PORT = process.env.PORT || 3001;


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Inevitabilis33!',
    database: 'employee_tracker'
  },
  console.log(``)
);

const openingQuestions = () => {
    inquirer.prompt([
        {
            type: "list",
            message: ""

        }
    ])
}