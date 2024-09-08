// Interface to structure the form data
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  profilePicture: string;
  education: string;
  experience: string;
  skills: string;
}

// Function to capture form data and generate resume
function generateResume(): void {
  // Get form data from the HTML elements
  const name = (document.getElementById("name") as HTMLInputElement)?.value;
  const email = (document.getElementById("email") as HTMLInputElement)?.value;
  const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
  const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;

  const education = (document.getElementById("education") as HTMLTextAreaElement)?.value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)?.value;

  // Validate if all the fields are filled
  if (!profilePictureInput.files?.length || !name || !email || !phone  || !education || !experience || !skills) {
    alert("Please fill in all fields!");
    return;
  }

  // Create an object based on the interface
  const resumeData: ResumeData = {
    name: name,
    email: email,
    phone: phone,
    profilePicture: URL.createObjectURL(profilePictureInput.files[0]), // Create URL for the profile picture
    education: education,
    experience: experience,
    skills: skills,
  };

  // Display the resume in the "resumeOutput" div
  const resumeOutputDiv = document.getElementById("resumeOutput");

  if (resumeOutputDiv) {
    resumeOutputDiv.innerHTML = `
      <h2>Generated Resume</h2>
      ${
        resumeData.profilePicture
          ? `<img src="${resumeData.profilePicture}" alt="Profile Picture" class="profilePicture" style="width: 150px; height: 150px; border-radius: 50%;">`
          : ""
      }
      <p><strong>Name:</strong> ${resumeData.name}</p>
      <p><strong>Email:</strong> ${resumeData.email}</p>
      <p><strong>Phone:</strong> ${resumeData.phone}</p>
      
      <p><strong>Education:</strong> ${resumeData.education}</p>
      <p><strong>Experience:</strong> ${resumeData.experience}</p>
      <p><strong>Skills:</strong> ${resumeData.skills}</p>
    `;
  } else {
    console.error("Resume output container not found");
  }
}

// Event listener for the submit button
const resumeForm = document.getElementById("resumeForm");
if (resumeForm) {
  resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission and page reload
    generateResume(); // Call the function to generate the resume
  });
} else {
  console.error("Resume form not found");
}
