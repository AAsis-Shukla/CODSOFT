function dnload() {
    // Replace 'cv.pdf' with the path to your CV file
    var cvUrl = 'Ashish.pdf';

    // Create a temporary anchor element
    var link = document.createElement('a');
    link.href = cvUrl;

    // Set the download attribute with the desired file name
    link.download = 'Ashish.pdf';

    // Programmatically trigger a click event to start the download
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
}

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
    // var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = "Please enter a valid phone number (xxx-xxx-xxxx)";
        return false;
    }
    document.getElementById('submitted_msg').innerHTML = "Your record has been submitted"
return true;
}