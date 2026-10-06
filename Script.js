function validateBooking() {

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;

    if (name === "" || phone === "" || service === "" || date === "") {
        alert("Please fill all required fields.");
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    document.getElementById("bookingMessage").innerHTML =
        "Booking submitted successfully!";

    return false;
}


function validateContact() {

    let name = document.getElementById("contactName").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return false;
    }

    document.getElementById("contactMessage").innerHTML =
        "Thank you! Your message has been submitted.";

    return false;
        }
