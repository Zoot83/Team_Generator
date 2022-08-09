const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const team = [];

const questionsForManager = [
    {
        type: 'input',
        name: "name",
        message: "What is the name of the manager? "
    },
    {
        type: 'input',
        name: "id",
        message: "What is the manager's id?"
    },
    {
        type: 'input',
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: "officeNumber",
        message: "What is the manager's office number?"
    },
    {
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more."
        ]
    }
   ];

const questionsForEngineer = [
    {
        type: 'input',
        name: "name",
        message: "What is the name of the engineer? "
    },
    {
        type: 'input',
        name: "id",
        message: "What is the engineer's id?"
    },
    {
        type: 'input',
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: "gitHub",
        message: "What is the engineer's GitHub?"
    },
    {
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more."
        ]
    }
   ];

const questionsForIntern = [
    {
        type: 'input',
        name: "name",
        message: "What is the name of the intern? "
    },
    {
        type: 'input',
        name: "id",
        message: "What is the intern's id?"
    },
    {
        type: 'input',
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: "school",
        message: "What is the intern's school?"
    },
    {
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more."
        ]
    }
   ];


function init() {

    let moreMembers = true;
    inquirer.prompt(questionsForManager)
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        if(answers.role ==="I don't want to add any more."){
            moreMembers = false;
        }
    
    });

    while(moreMembers){
        if(answers.role === "Engineer"){
            inquirer.prompt(questionsForEngineer)
            .then((answers)=>{
                const member= new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            })
        }
        if(answers.role === "Intern"){
            inquirer.prompt(questionsForIntern)
            .then((answers)=>{

            })
        }
    }
}


// Function call to initialize app
init();