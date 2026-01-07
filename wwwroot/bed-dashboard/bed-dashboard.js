// ===================================================
// Hospital Bed Availability Dashboard
// Demonstrates:
// - Arrays
// - Objects
// - Loops
// - Conditions
// - DOM manipulation
// ===================================================


// -----------------------------
// BED DATA (Mock backend data)
// -----------------------------
let beds = [
    { bedNumber: 1, isOccupied: false },
    { bedNumber: 2, isOccupied: true },
    { bedNumber: 3, isOccupied: false },
    { bedNumber: 4, isOccupied: true },
    { bedNumber: 5, isOccupied: false },
    { bedNumber: 6, isOccupied: false },
    { bedNumber: 7, isOccupied: true },
    { bedNumber: 8, isOccupied: false },
    { bedNumber: 9, isOccupied: true },
    { bedNumber: 10, isOccupied: false },
    { bedNumber: 11, isOccupied: true },
    { bedNumber: 12, isOccupied: false }
];


// -----------------------------
// FUNCTION: Render beds on screen
// -----------------------------
// -----------------------------
// FUNCTION: Render beds on screen and display count
// -----------------------------
function renderBeds() {

    let container = document.getElementById("bedContainer");

    // Clear existing beds
    container.innerHTML = "";

    // Variables to track available and occupied bed counts
    let availableCount = 0;
    let occupiedCount = 0;

    // Loop through all beds
    for (let i = 0; i < beds.length; i++) {

        let bed = beds[i];

        // Create a div for each bed
        let bedDiv = document.createElement("div");

        // Assign common bed class
        bedDiv.classList.add("bed");

        // Condition to decide color
        if (bed.isOccupied) {
            occupiedCount++;
            bedDiv.classList.add("occupied");
            bedDiv.innerText = "Bed " + bed.bedNumber + "\nOccupied";
        } else {
            availableCount++;
            bedDiv.classList.add("available");
            bedDiv.innerText = "Bed " + bed.bedNumber + "\nAvailable";
        }

        // Click event to toggle bed status
        bedDiv.onclick = function () {
            if (!bed.isOccupied) {
                bed.isOccupied = !bed.isOccupied;
                // Toggle the bed status
                
                renderBeds(); // Re-render UI with updated counts
            }
        };

        // Add bed to container
        container.appendChild(bedDiv);
    }

    // Display the available and occupied bed counts
    document.getElementById("availableCount").innerText = `Available Beds: ${availableCount}`;
    document.getElementById("occupiedCount").innerText = `Occupied Beds: ${occupiedCount}`;
}

// -----------------------------
// INITIAL LOAD
// -----------------------------
renderBeds();


