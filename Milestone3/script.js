"use strict";
// Get references to the form and display area
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
// Handle form Submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // prevent page reload
    // Collect input values
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const phone = document.getElementById('Phone').value;
    const education = document.getElementById('Education').value;
    const experience = document.getElementById('Experience').value;
    const skills = document.getElementById('Skills').value;
    // Generate the resume and content dynamically 
    const resumeHTML = `
<h2><b>RESUME</b></h2>
<h3>PERSONAL INFORMATION</h3>
<p><b>Name : </b>${name}</p>
<p><b>Email : </b>${email}</p>
<p><b>Phone : </b>${phone}</p>

<h3>EDUCATION </h3>
<p>${education}</p>

<h3>EXPERIENCE </h3>
<p>${experience}</p>

<h3>SKILLS</h3>
<p>${skills}</p>
`;
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
