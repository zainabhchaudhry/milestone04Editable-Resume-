document.getElementById('generate').addEventListener('click', function() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedIn = document.getElementById('linkedIn').value;
    const objective = document.getElementById('objective').value;

    const organization = document.getElementById('organization').value;
    const role = document.getElementById('role').value;
    const fromYear = document.getElementById('fromYear').value;
    const toYear = document.getElementById('toYear').value;
    const experienceDetails = document.getElementById('experienceDetails').value;

    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const passingYear = document.getElementById('passingYear').value;
    const cgpa = document.getElementById('cgpa').value;

    const softSkill1 = document.getElementById('softSkill1').value;
    const softSkill2 = document.getElementById('softSkill2').value;
    const softSkill3 = document.getElementById('softSkill3').value;

    const techSkill1 = document.getElementById('techSkill1').value;
    const techSkill2 = document.getElementById('techSkill2').value;
    const techSkill3 = document.getElementById('techSkill3').value;

    const language1 = document.getElementById('language1').value;
    const language2 = document.getElementById('language2').value;

    const cert1 = document.getElementById('cert1').value;
    const cert2 = document.getElementById('cert2').value;
    const cert3 = document.getElementById('cert3').value;

    // Generate Resume Output
    const resumeOutput = `
        <h2 contenteditable="true">${name}'s Resume</h2>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Contact Info:</strong> <span contenteditable="true">${phone}</span></p>
        <p><strong>LinkedIn:</strong> <span contenteditable="true">${linkedIn}</span></p>
        
        <h3>Professional Summary</h3>
        <p contenteditable="true">${objective}</p>

        <h3>Work Experience</h3>
        <p><strong>Organization:</strong> <span contenteditable="true">${organization}</span></p>
        <p><strong>Role:</strong> <span contenteditable="true">${role}</span></p>
        <p><strong>From Year:</strong> <span contenteditable="true">${fromYear}</span></p>
        <p><strong>To Year:</strong> <span contenteditable="true">${toYear}</span></p>
        <p><strong>Experience Details:</strong> <span contenteditable="true">${experienceDetails}</span></p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> <span contenteditable="true">${degree}</span></p>
        <p><strong>University:</strong> <span contenteditable="true">${university}</span></p>
        <p><strong>Passing Year:</strong> <span contenteditable="true">${passingYear}</span></p>
        <p><strong>CGPA/Percentage:</strong> <span contenteditable="true">${cgpa}</span></p>

        <h3>Skills</h3>
        <p><strong>Soft Skills:</strong></p>
        <ul>
            <li contenteditable="true">${softSkill1}</li>
            <li contenteditable="true">${softSkill2}</li>
            <li contenteditable="true">${softSkill3}</li>
        </ul>
        <p><strong>Technical Skills:</strong></p>
        <ul>
            <li contenteditable="true">${techSkill1}</li>
            <li contenteditable="true">${techSkill2}</li>
            <li contenteditable="true">${techSkill3}</li>
        </ul>

        <h3>Languages</h3>
        <ul>
            <li contenteditable="true">${language1}</li>
            <li contenteditable="true">${language2}</li>
        </ul>

        <h3>Professional Certifications</h3>
        <ul>
            <li contenteditable="true">${cert1}</li>
            <li contenteditable="true">${cert2}</li>
            <li contenteditable="true">${cert3}</li>
        </ul>
    `;

    document.getElementById('resume-output').innerHTML = resumeOutput;

    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(element => {
        element.addEventListener('input', function() {
   
            const updatedText = element.textContent;

            console.log('Updated Text:', updatedText);
        });
    });
});
