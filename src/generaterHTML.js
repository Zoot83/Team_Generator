function generateTeam(data){

    let container='';
    data.forEach((element)=> {
        let classDetail;
        let roleImage;
        switch(element.getRole()){
            case "Manager":
                {
                    classDetail = `Office Number: ${element.officeNumber}`;
                    roleImage="manager";
                    break;
                }
            case "Engineer":
                {
                    classDetail = `GitHub: <a href="https://github.com/${element.getGitHub()}">${element.getGitHub()}</a>`;
                    roleImage='engineer';
                    break;
                }
            case "Intern":
                {
                    classDetail = `School: ${element.getSchool()}`;
                    roleImage = 'intern'
                    break;
                }
        }
        let content = `<div class="card px-2">
          <div class="col">
            <div class="card shadow-sm">
                <div class="card-img">
                    <h1>${element.getName()}</h1>
                    <h2><img class="card-img-top" src="../assets/${roleImage}.png">${element.getRole()}</h2>
                </div>
              <div class="card-body">
                <p class="card-text">ID: ${element.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>
                <p class="card-text">${classDetail} </p>
              </div>
            </div>
          </div>
        </div>`;

        container+=content;
    })
    

    return container;
}


function generateMarkdown(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <link rel = "stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
    
  <main>
  
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Meet My Team</h1>
        </div>
      </div>
    </section>
  
    <div class="album py-5 bg-light">
      <div class="container">
  
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            ${generateTeam(data)}
        </div>
      </div>
    </div>
  
  </main>
  
  
  </body>
    `;
  }
  
module.exports = generateMarkdown;
