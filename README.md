# Team Generator

In this project with the use of node I use inquirer to prompt for the information regading
the team. Some of the information that will be asked regarding the team are the name, id, email, and 
other specific information depending on the type of role they are. If they are an engineer then the last question
will ask what their github account username is. If its a manager it will be the office number of the manager.


If the role is an intern the last question will be what school they are currently going to. 
After all the information about the team is gathered and they do not want to add any more members
to their team they will select the option " I dont want to add anymore members" and then the 
code will generate a new html with the information that was provided for each of the members. 

## Authors

- [@marshallrizzuto](https://github.com/Zoot83)


Website: https://github.com/Zoot83/Team_Generator
## Features

- Node
- Jest
- Test Scenario 
- Classes
- Subclasses
- File System 
- Writing to File 
- Packages
- Npm

## Usage/Examples

  In this snippet of code it shows the use of an async function that waits
for the end of a prompt before proceeding onto the next prompt. This snippet it also
shows the way that I deal with creating a specific type of employee and adding it to 
an array of that type of employee. 

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
