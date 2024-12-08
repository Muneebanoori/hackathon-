// script.js
document.getElementById("resume-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Get input values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // Create dynamic resume content
    var resumeContent = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <hr>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <hr>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <hr>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Display the resume
    document.getElementById("resume-display").innerHTML = resumeContent;
});
