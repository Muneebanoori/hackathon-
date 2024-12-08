// script.js
const form = document.getElementById("resume-form")as HTMLInputElement;
const resumeDisplayElement = document.getElementById ('resume-display')as HTMLInputElement;


  // HANDLE form submission
  form.addEventListener('SUBMIT',(event: Event)=>{
    event.preventDefault();

  // Get input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone")as HTMLInputElement).value;
  const email = (document.getElementById("email")as HTMLInputElement).value;
  const education = (document.getElementById("education")as HTMLInputElement).value;
  const experience = (document.getElementById("Experience")as HTMLInputElement).value;
  const skills = (document.getElementById("Skills")as HTMLInputElement).value;

  // Create dynamic resume content
  const resumeHTML = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <hr>
    <h3>Education</h3>
    <p>${education}</p>
    <hr>
    <h3>Experience</h3>
    <p>${experience}</p>
    <hr>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  // Display the resume
  if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML
  }
});
