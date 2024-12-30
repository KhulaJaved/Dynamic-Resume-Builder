var form = document.getElementById("resume-form");
var output = document.getElementById("resume-output");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("linkedin").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Validate mandatory fields
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill all required fields!");
        return;
    }
    // Generate Resume
    output.innerHTML = "\n    <h2>".concat(name, "</h2>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    <p>LinkedIn: <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n    <h3>Education</h3>\n    <p>").concat(education.replace(/\n/g, "<br>"), "</p>\n    <h3>Work Experience</h3>\n    <p>").concat(experience.replace(/\n/g, "<br>"), "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills.split(",").map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(", "), "</p>\n  ");
});
