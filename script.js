document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guidanceForm");

  // The other three pages do not contain a form.
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check that all required fields are valid.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = document
      .getElementById("studentName")
      .value.trim();

    const topic = document.getElementById("topic").value;
    const message = document.getElementById("formMessage");

    // Show the confirmation message.
    message.textContent =
      "Thank you, " + name +
      "! Your sample request about " + topic +
      " has been recorded on this page. " +
      "No data has been sent to a server.";

    message.classList.add("show");

    // Clear the form after successful validation.
    form.reset();
  });
});
