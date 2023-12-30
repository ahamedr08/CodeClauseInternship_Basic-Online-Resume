function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const college = document.getElementById('college').value;
    const degree = document.getElementById('degree').value;
    const yearOfStudy = document.getElementById('yearOfStudy').value;
    const cgpa = document.getElementById('cgpa').value;

    const languages = document.getElementById('languages').value;

    const certifications = document.getElementById('certifications').value;

    const generatedResume = document.getElementById('generatedResume');
    generatedResume.innerHTML = `
        <h2>${fullName}</h2>
        <p>Github: ${github}</p>
        <p>LinkedIn: ${linkedin}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>

        <h2>Education</h2>
        <p>College: ${college}</p>
        <p>Degree: ${degree}</p>
        <p>Year of Study: ${yearOfStudy}</p>
        <p>CGPA: ${cgpa}</p>

        <h2>Skills</h2>
        <p>Languages: ${languages}</p>

        <h2>Certifications</h2>
        <p>${certifications}</p>
    `;
}

