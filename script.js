// Validate user inputs and display secret message if valid
function validateAndShowMessage() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();
    const fullName = `${firstName} ${lastName}`;
    const warningElement = document.getElementById('warning');
    const secretMessageElement = document.getElementById('secretMessage');
    
    warningElement.textContent = ''; // Clear previous warnings
    secretMessageElement.textContent = ''; // Clear previous messages
    
    // Check if full name is more than 20 characters
    if (fullName.length > 20) {
        warningElement.textContent = 'Warning: Your full name must not exceed 20 characters.';
        return; // Stop execution
    }
    
    // Check if zip code is exactly 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        warningElement.textContent = 'Warning: Your zip code must be exactly 5 digits.';
        return; // Stop execution
    }
    
    // Display secret message if inputs are valid
    secretMessageElement.textContent = 'Congratulations! You have accessed the secret message.';
}

// Add more JavaScript code here for additional functionality as needed
