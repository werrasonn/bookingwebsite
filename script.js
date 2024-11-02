const wrapper = document.querySelector('.wrapper');
function registerActive() {
    wrapper.classList.toggle('active');
}
function loginActive() {
    wrapper.classList.toggle('active');
}
// Initialize variables
let currentStep = 1;
const totalSteps = 5;

// Function to show the current step
function showStep(step) {
    // Hide all form sections
    document.querySelectorAll('.form-section').forEach(section => section.style.display = 'none');
    // Show the current form section
    document.getElementById(`step-${step}`).style.display = 'block';
    // Update progress bar and steps
    updateProgressBar(step);
}

// Function to navigate between steps
function navigate(direction) {
    // Update current step based on direction
    currentStep += direction;

    // Ensure currentStep remains within valid range
    if (currentStep < 1) currentStep = 1;
    if (currentStep > totalSteps) currentStep = totalSteps;

    // Show the updated step
    showStep(currentStep);
}

// Function to update the progress bar based on current step
function updateProgressBar(step) {
    // Select all progress bar steps
    const steps = document.querySelectorAll('.progress-bar .step');
    steps.forEach((stepElement, index) => {
        // Add 'completed' class if step is complete
        if (index < step) {
            stepElement.classList.add('completed');
        } else {
            stepElement.classList.remove('completed');
        }
    });
}

// Initialize the form to show the first step
showStep(currentStep);
