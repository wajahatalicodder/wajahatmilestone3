// Function to capture form data and generate resume
function generateResume() {
    var _a, _b, _c, _d, _e, _f, _g;
    // Get form data from the HTML elements
    var name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value;
    var profilePictureInput = document.getElementById("profilePicture");
    var education = (_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value;
    var experience = (_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value;
    var skills = (_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value;
    // Validate if all the fields are filled
    if (!((_g = profilePictureInput.files) === null || _g === void 0 ? void 0 : _g.length) || !name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill in all fields!");
        return;
    }
    // Create an object based on the interface
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        profilePicture: URL.createObjectURL(profilePictureInput.files[0]), // Create URL for the profile picture
        education: education,
        experience: experience,
        skills: skills,
    };
    // Display the resume in the "resumeOutput" div
    var resumeOutputDiv = document.getElementById("resumeOutput");
    if (resumeOutputDiv) {
        resumeOutputDiv.innerHTML = "\n      <h2>Generated Resume</h2>\n      ".concat(resumeData.profilePicture
            ? "<img src=\"".concat(resumeData.profilePicture, "\" alt=\"Profile Picture\" class=\"profilePicture\" style=\"width: 150px; height: 150px; border-radius: 50%;\">")
            : "", "\n      <p><strong>Name:</strong> ").concat(resumeData.name, "</p>\n      <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n      <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n      \n      <p><strong>Education:</strong> ").concat(resumeData.education, "</p>\n      <p><strong>Experience:</strong> ").concat(resumeData.experience, "</p>\n      <p><strong>Skills:</strong> ").concat(resumeData.skills, "</p>\n    ");
    }
    else {
        console.error("Resume output container not found");
    }
}
// Event listener for the submit button
var resumeForm = document.getElementById("resumeForm");
if (resumeForm) {
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission and page reload
        generateResume(); // Call the function to generate the resume
    });
}
else {
    console.error("Resume form not found");
}
