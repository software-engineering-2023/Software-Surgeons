document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the email value
  var email = document.getElementById("email").value;

  // Hide the input fields and submit button
  var emailInput = document.getElementById("email");
  var submitButton = document.getElementById("submitBtn");
  emailInput.style.display = "none";
  submitButton.style.display = "none";

  // Perform an AJAX request to send the email
  // Here, you would typically use a server-side script to send the email
  // For demonstration purposes, we'll simulate a successful request after a short delay
  setTimeout(function() {
    // Display the response message
    var message = document.getElementById("message");
    message.textContent = "Password reset instructions sent to " + email;
  }, 2000); // Simulate a delay of 2 seconds (remove this line in your actual implementation)
});
