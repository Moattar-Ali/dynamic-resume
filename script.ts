interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

interface Education {
    school: string;
    degree: string;
    gradYear: number;
}

interface WorkExperience {
    company: string;
    position: string;
    years: number;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education;
    workExperience: WorkExperience;
    skills: string[];
}

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDiv = document.getElementById("resume") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const formData = new FormData(form);

    // Extract data from the form
    const personalInfo: PersonalInfo = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
    };

    const education: Education = {
        school: formData.get("school") as string,
        degree: formData.get("degree") as string,
        gradYear: parseInt(formData.get("grad-year") as string),
    };

    const workExperience: WorkExperience = {
        company: formData.get("company") as string,
        position: formData.get("position") as string,
        years: parseInt(formData.get("years") as string),
    };

    const skills = (formData.get("skills") as string).split(",").map(skill => skill.trim());

    const resumeData: ResumeData = {
        personalInfo,
        education,
        workExperience,
        skills,
    };

    // Generate resume HTML
    const resumeHTML = `
        <h3>${resumeData.personalInfo.name}</h3>
        <p>Email: ${resumeData.personalInfo.email}</p>
        <p>Phone: ${resumeData.personalInfo.phone}</p>

        <h4>Education</h4>
        <p>${resumeData.education.degree} from ${resumeData.education.school}, ${resumeData.education.gradYear}</p>

        <h4>Work Experience</h4>
        <p>${resumeData.workExperience.position} at ${resumeData.workExperience.company} (${resumeData.workExperience.years} years)</p>

        <h4>Skills</h4>
        <ul>
            ${resumeData.skills.map(skill => `<li>${skill}</li>`).join("")}
        </ul>
    `;

    resumeDiv.innerHTML = resumeHTML;
});
