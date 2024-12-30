const form = document.getElementById("resume-form") as HTMLFormElement;
const output = document.getElementById("resume-output") as HTMLElement;

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  // Get form values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Validate mandatory fields
  if (!name || !email || !phone || !education || !experience || !skills) {
    alert("Please fill all required fields!");
    return;
  }

  // Generate Resume
  output.innerHTML = `
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    <h3>Education</h3>
    <p>${education.replace(/\n/g, "<br>")}</p>
    <h3>Work Experience</h3>
    <p>${experience.replace(/\n/g, "<br>")}</p>
    <h3>Skills</h3>
    <p>${skills.split(",").map(skill => `<span>${skill.trim()}</span>`).join(", ")}</p>
  `;
});
