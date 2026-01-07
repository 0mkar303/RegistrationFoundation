// -------------------------------
// MOCK DATA (Simulates backend / database)
// -------------------------------
const doctorAvailability = {
    "Dr. Mehta": true,
    "Dr. Sharma": false,
    "Dr. Khan": true
};

// -------------------------------
// Doctor Availability Button Click
// -------------------------------
document.getElementById("checkBtn").addEventListener("click", function () {

    // Read selected doctor
    const doctor = document.getElementById("doctor").value;

    // Validation: doctor must be selected
    if (doctor === "") {
        alert("Please select a doctor first");
        return;
    }

    // Check availability from mock data
    if (doctorAvailability[doctor]) {
        alert(doctor + " is AVAILABLE today");
    } else {
        alert(doctor + " is NOT available today");
    }
});

// -----------------------------------------
// FORM SUBMISSION + DOM MANIPULATION
// -----------------------------------------
document.getElementById("patientForm").addEventListener("submit", function (event) {

    // Prevent browser from refreshing page
    event.preventDefault();

    // Read values entered by the user
    const patientName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const doctor = document.getElementById("doctor").value;

    // Get reference to output div
    const outputDiv = document.getElementById("output");

    // Make output section visible
    outputDiv.style.display = "block";

    // Dynamically inject HTML using JavaScript
    outputDiv.innerHTML = `
        <h3>Registration Successful</h3>
        <p><b>Name:</b> ${patientName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date of Birth:</b> ${dob}</p>
        <p><b>Doctor:</b> ${doctor}</p>
    `;
});
