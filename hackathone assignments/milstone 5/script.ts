const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value.trim();
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

    if (!username || !name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill in all fields');
        return;
    }

    const resumeData = { name, email, phone, education, experience, skills };
    localStorage.setItem(username, JSON.stringify(resumeData));

    const resumeHTML = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;
    resumeDisplayElement.innerHTML = resumeHTML;

    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

downloadPdfButton.addEventListener('click', () => {
    const printContent = document.getElementById('resume-display');
    if (printContent) {
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent.outerHTML;
        window.print();
        document.body.innerHTML = originalContent;
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const { name, email, phone, education, experience, skills } = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = name;
            (document.getElementById('email') as HTMLInputElement).value = email;
            (document.getElementById('phone') as HTMLInputElement).value = phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = skills;
        }
    }
});
