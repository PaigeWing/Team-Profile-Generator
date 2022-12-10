const inquirer = require("inquirer");
const fs = require("fs");
const generateHtmlCards = require("./src/generateHtmlCards");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamMembers = [];

//User defines which type of employee they are making a card for and will be directed to those questions.
const createTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "Done creating team members",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
      }
    });
};

//List of Manager questions
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the manager's name",
        name: "name",
        validate: function (nameInput) {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the manager's employee ID",
        name: "id",
        validate: function (idInput) {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the manager's employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the manager's email address",
        name: "email",
        validate: function (emailInput) {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the manager's email address");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the manager's office number",
        name: "officeNumber",
        validate: function (officeNumberInput) {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the manager's office number");
            return false;
          }
        },
      },
      {
        type: "confirm",
        message: "Would you like to add another team member?",
        name: "confirmDone",
        default: false,
      },
    ])
    .then((responses) => {
      const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber)
      teamMembers.push(manager)
      console.log(teamMembers)
      responses.confirmDone === true ? createTeam() : createFile()
    });
};
//List of Engineer questions
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the engineer's name",
        name: "name",
        validate: function (nameInput) {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the engineer's name");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the engineer's employee ID",
        name: "id",
        validate: function (idInput) {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the engineer's employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the engineer's email address",
        name: "email",
        validate: function (emailInput) {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the engineer's email address");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the engineer's GitHub username",
        name: "gitHub",
        validate: function (gitHubInput) {
          if (gitHubInput) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username");
            return false;
          }
        },
      },
      {
        type: "confirm",
        message: "Would you like to add another team member?",
        name: "confirmDone",
        default: false,
      },
    ])
    .then((responses) => {
      const engineer = new Engineer(responses.name, responses.id, responses.email, responses.gitHub)
      teamMembers.push(engineer)
      console.log(teamMembers)
      responses.confirmDone === true ? createTeam() : createFile()
    }
      
    );
};

//Lists the Intern questions
const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the intern's name",
        name: "name",
        validate: function (nameInput) {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's name");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the intern's employee ID",
        name: "id",
        validate: function (idInput) {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the intern's employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the manager's email address",
        name: "email",
        validate: function (emailInput) {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the intern's email address");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter the intern's school",
        name: "school",
        validate: function (schoolInput) {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school");
            return false;
          }
        },
      },
      {
        type: "confirm",
        message: "Would you like to add another team member?",
        name: "confirmDone",
        default: false,
      },
    ])
    .then((responses) => {
      const intern = new Intern(responses.name, responses.id, responses.email, responses.school)
      teamMembers.push(intern)
      console.log(teamMembers)
      responses.confirmDone === true ? createTeam() : createFile()
    }
    );
};

createTeam();

// const filename = "newIndex.html";
// const data = responses;
// createFile(filename, data);

const createFile = () => {
  fs.writeFile("newIndex.html", generateHtmlCards(teamMembers), (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("Team member created!");
  });
};
