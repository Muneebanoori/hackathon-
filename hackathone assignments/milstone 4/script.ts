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
    <h2>Editable Resume</h2>
    <h3> Personal information </h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
  `;

  // Display the resume
  if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML
  }
});
