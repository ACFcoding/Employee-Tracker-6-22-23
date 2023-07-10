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
  console.log(`Connected to database`)
);

const openingQuestions = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "prompt",
            choices: ["See department list", "See employee roles", "See employee info", "Add employee", "Add employee role", "Add a department", "Update employee role"]

        }
    ]) .then(res => {
      switch(res.prompt) {
        case "See department list":
          departmentInfo()
          break;
        case "See employee roles":
          employeeRoles()
          break;
        case "See employee info":
          employeeInfo()
          break;
        case "Add employee":
          addEmployeeInfo()
          break;
        case "Add employee role":
          addEmployeeRole()
        case "Add a department":
          addDepartment()
          break;
        case "Update employee role":
          updateERole()
          break;

        
      }
    })
}
const departmentInfo = () => {
  db.query("Select * From department", function(err, res, fields){
    console.table(res)
    openingQuestions()
  })
}
const employeeInfo = () => {
  db.query("Select * From employee_info", function(err, res, fields){
    console.table(res)
    openingQuestions()
  })
}
const addEmployeeInfo = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the first name?",
      name: "fName"
    },
    {
      type: "input",
      message: "What is the last name?",
      name: "lName"
    },
    {
      type: "input",
      message: "What is the emplyee's role?",
      name: "role",
      validate: (res) => {
        //isNaN is not a number
        if (isNaN(res)) {
          return `Please put in a valid role.`
        }
        else if (res === "") {
          return `Please enter something.`
        }
        return true
      }
    },
    {
      type: "input",
      message: "Who is the manager? If there is no manager, just press enter.",
      name: "manager"
    },
  ])

  .then((res) => {
    console.log(res)
    db.query("Insert Into employee_info Set ?;", {
      employee_fname: res.fName,
      employee_lname: res.lName,
      role_id: res.role,
      manager_id: res.manager
    });
    openingQuestions()
  })
}
const addEmployeeRole = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's role?",
      name: "erole"
    },
    {
      type: "input",
      message: "What is the salary?",
      name: "monies"
    },
    {
      type: "input",
      message: "What is the department id?",
      name: "departmentID",
      validate: (res) => {
        //isNaN is not a number
        if (isNaN(res)) {
          return `Please put in a valid role.`
        }
        else if (res === "") {
          return `Please enter something.`
        }
        return true
      }
    },
  ])

  .then((res) => {
    console.log(res)
    db.query("Insert Into employee_role Set ?;", {
      job_title: res.erole,
      salary: res.monies,
      department_id: res.departmentID,
    });
    openingQuestions()
  })
}

  //here is the department add
  const addDepartment = () => {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the department name?",
        name: "departmentName"
      },
    ])
  

  .then((res) => {
    console.log(res)
    db.query("Insert Into department Set ?;", {
      department_name: res.departmentName,
    });
    openingQuestions()
  })
}
  const updateERole = () => {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the id of the employee being updated?",
        name: "EID"
      },
      {
        type: "input",
        message: "What is the updated employee role?",
        name: "newEID"
      },
    ])
  

  .then((res) => {
    console.log(res)
    db.query("Update employee_role Set ? where ?;", [
      {job_title: res.EID},
      {id: res.newEID}
    ]);
    openingQuestions()
  })
}




openingQuestions()

// app.post('', ({ body }, res) => {
//   const departments = `INSERT INTO department (department_name)
//     VALUES (?)`;
//   const params = [body.department_name];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });