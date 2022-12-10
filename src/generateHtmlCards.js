const fs = require("fs");


function otherTag(employee) {
  console.log("hello", employee.getRole())
  if (employee.getRole() === "Manager")
    return `Office Number: ${employee.getOfficeNumber()}`;
  if (employee.getRole() === "Engineer")
    return `GitHub: ${employee.getGitHub()}`;
  if (employee.getRole() === "Intern") return `School: ${employee.getSchool()}`;
}

function cardTemplate(employee) {
  
  const extraTag = otherTag(employee);
  const cardHtml = `
     <div class="card">
            <div class="card-header">
                <h3>${employee.getName()}</h3>
                <h4>${employee.getRole()}</h4>
            </div>
            <div class="card-body">
                <p>ID: ${employee.getId()}</p>
                <p>Email: ${employee.getEmail()}</p>
                <p> ${extraTag}</p>
            </div>
      </div>
    `;
  return cardHtml;
}

function htmlTemplate(teamMembers) {
  console.log("This is generateHTMLCards", teamMembers);
  const cardArray = []
  for (let i = 0; i < teamMembers.length; i++) {
    const employee = teamMembers[i];
    cardArray.push(cardTemplate(employee));
  }
 
  const cardHtml = cardArray.join("");
  console.log(cardArray)
  const fileHtml = `
  <!DOCTYPE html>
<html lang="en-US">

  <head>
    <meta charset="UTF-8">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="./dist/style.css">
  </head>
  <body>
    <header>
        <nav>My Team</nav>
    </header>
    <main>
    <div id="container"</div>       
        ${cardHtml}
    </main>
  </body>
  </html>
  `;
  return fileHtml;
}

module.exports = htmlTemplate;


