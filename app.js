
const Manager = require('./lib/manager.js')
const Engineer = require("./lib/engineer.js")
const Intern = require("./lib/intern.js")
const inquirer = require("inquirer")
// const path = require("path")
const fs = require("fs")






function appMenu() {

    createManager();
    function createManager() {
        console.log("Please build team")
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the email ?"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What's the office number?"
            },
            {
                type: "input",
                name: "nextMemberType",
                message: "What type of member would you like to add? (if done, press Enter)"
            }
        ])
            .then(function (answers) {
                const managerObject = answers;
                //testing constructor here below..
                manager01 = new Manager(managerObject.managerName, managerObject.managerId, managerObject.managerEmail, managerObject.managerOffice)
                writeFileManager();
                if (answers.nextMemberType === "engineer") {
                    createEngineer();

                }
                else if (answers.nextMemberType === "intern") {
                    createIntern();
                }

                else {
                    writeEndHTML();

                    console.log("thanks for using this program!")
                }

            });
    }
}


appMenu();

//Writes beginning of HTML and Manager profile with 
function writeFileManager() {
    fs.writeFile("main.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Main</title>
    </head>
    <body>
    
        <div class="row">

            <div class="col-md-8" id="header"><h1> My Team</h1> </div>
        </div>
          <div class="container">
              <h2 class="display-4">${manager01.managerName}</h2>
              <h2>Manager</h2>
              <p class="lead">Id:${manager01.managerId}.</p>
              <ul class="list-group">
                  <li class="list-group-item">Email: ${manager01.managerEmail}</li>
                  <li class="list-group-item">Office: ${manager01.managerOffice}</li>
              </ul>
          </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

//Writes Engineer profile html code  
function writeFileEngineer() {
    fs.appendFile("main.html", `
    
          <div class="container">
              <h2 class="display-4">${engineer.engineerName}</h2>
              <h2>Engineer</h2>
              <p class="lead">Id:${engineer.engineerId}.</p>
              <ul class="list-group">
                  <li class="list-group-item">Email: ${engineer.engineerEmail}</li>
                  <li class="list-group-item">Office: ${engineer.engineerOffice}</li>
              </ul>
          </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

function writeFileIntern() {
    fs.appendFile("main.html", `
    
    <div class="container">
        <h2 class="display-4">${intern.internName}</h2>
        <h2>Intern</h2>
        <p class="lead">Id:${intern.internId}.</p>
        <ul class="list-group">
            <li class="list-group-item">Email: ${intern.internEmail}</li>
            <li class="list-group-item">Office: ${intern.internOffice}</li>
        </ul>
    </div>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });
}

function writeEndHTML() {
    fs.appendFile("main.html", `
    
    </body>
    </html>` , function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
    });

}

function createEngineer() {

    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What's the ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's the email ?"
        },
        {
            type: "input",
            name: "engineerOffice",
            message: "What's the office number?"
        },
        {
            type: "input",
            name: "memberType",
            message: "What type of member would you like to add? (if done, press Enter)"
        }
    ])
        .then(function (answers) {
            const engineerObject = answers;
            //testing constructor here below..
            engineer = new Engineer(engineerObject.engineerName, engineerObject.engineerId, engineerObject.engineerEmail, engineerObject.engineerOffice)
            writeFileEngineer();
            if (answers.memberType === "engineer") {
                createEngineer();
            }
            else if (answers.memberType === "intern") {
                createIntern();
            }
            else {
                writeEndHTML();

                console.log("thanks for using this program!")
            }

        });
}

function createIntern() {

    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What's the ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What's the email ?"
        },
        {
            type: "input",
            name: "internOffice",
            message: "What's the office number?"
        },
        {
            type: "input",
            name: "memberType",
            message: "What type of member would you like to add? (if done, press Enter)"
        }
    ])
        .then(function (answers) {
            const internObject = answers;
            //testing constructor here below..
            intern = new Intern(internObject.internName, internObject.internId, internObject.internEmail, internObject.internOffice)
            writeFileIntern();
            if (answers.memberType === "engineer") {
                createEngineer();
            }
            else if (answers.memberType === "intern") {
                createIntern();
            }
            else {
                writeEndHTML();

                console.log("thanks for using this program!")
            }

        });
}



