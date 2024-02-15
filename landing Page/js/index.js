// form vailidation.
function validateForm() {
    // name validation
    var nameInput = document.getElementById("Name");
    var nameError = document.getElementById("nameLabel");
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = "Name must contain only letters";
        return false;
    }

    // phone validation
    var phoneInput = document.getElementById("phone");
    var phoneError = document.getElementById("phoneErr");
    var phoneRegex = /^\d{10}$/;
    

    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = "Please enter a valid phone number (xxx-xxx-xxxx)";
        return false;
    }
    document.getElementById('submitted_msg').innerHTML = "Your record has been submitted"
return true;
}