var form = document.getElementById("resume-form");
var resumeDiv = document.getElementById("resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    // Extract data from the form
    var personalInfo = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
    };
    var education = {
        school: formData.get("school"),
        degree: formData.get("degree"),
        gradYear: parseInt(formData.get("grad-year")),
    };
    var workExperience = {
        company: formData.get("company"),
        position: formData.get("position"),
        years: parseInt(formData.get("years")),
    };
    var skills = formData.get("skills").split(",").map(function (skill) { return skill.trim(); });
    var resumeData = {
        personalInfo: personalInfo,
        education: education,
        workExperience: workExperience,
        skills: skills,
    };
    // Generate resume HTML
    var resumeHTML = "\n        <h3>".concat(resumeData.personalInfo.name, "</h3>\n        <p>Email: ").concat(resumeData.personalInfo.email, "</p>\n        <p>Phone: ").concat(resumeData.personalInfo.phone, "</p>\n\n        <h4>Education</h4>\n        <p>").concat(resumeData.education.degree, " from ").concat(resumeData.education.school, ", ").concat(resumeData.education.gradYear, "</p>\n\n        <h4>Work Experience</h4>\n        <p>").concat(resumeData.workExperience.position, " at ").concat(resumeData.workExperience.company, " (").concat(resumeData.workExperience.years, " years)</p>\n\n        <h4>Skills</h4>\n        <ul>\n            ").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n        </ul>\n    ");
    resumeDiv.innerHTML = resumeHTML;
});
