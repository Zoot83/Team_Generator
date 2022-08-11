const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const generateMarkdown = require("./src/generaterHTML");

const team = [];
const engineers = [];
const interns = [];

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


async function init() {

    let moreMembers;
    await inquirer.prompt(questionsForManager)
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager); 
        moreMembers = answers.role;   
    });

    while(moreMembers != "I don't want to add any more."){
        if(moreMembers === "Engineer"){
            await inquirer.prompt(questionsForEngineer)
            .then((answers)=>{
                const member= new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
                engineers.push(member);
                moreMembers=answers.role;
            })
        }else if(moreMembers === "Intern"){
            await inquirer.prompt(questionsForIntern)
            .then((answers)=>{
                const member= new Intern(answers.name, answers.id, answers.email, answers.school)
                interns.push(member);
                moreMembers=answers.role;
            })
        }
    }
    sortTeam(engineers, interns);
    writeToFile('./dist/index.html', team);
    
}

function sortTeam(engArray, internArray){
    if(engArray.length > 0){
        engArray.forEach(element => team.push(element));
    } 
    if(internArray.length>0){
        internArray.forEach(element => team.push(element));
    }
}


function writeToFile(fileName, data) {
    generateHTML = generateMarkdown(data);
    fs.writeFile(fileName,generateHTML, (err) => 
    err ? console.log(err): console.log("Successfully created index.html")
    );
    
}

// Function call to initialize app
init();