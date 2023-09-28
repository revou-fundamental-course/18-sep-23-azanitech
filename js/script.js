const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!validateName(name) || !validateEmail(email)) {
        return; // Validation failed, do not proceed
    }

    // Validation successful, you can proceed with form submission or other actions.
    alert("Form submitted successfully!");
    contactForm.reset();
});

function validateName(name) {
    if (name === "") {
        alert("Name must not be empty.");
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}