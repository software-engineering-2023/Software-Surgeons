document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Hide the input fields and submit button
  var inputs = document.querySelectorAll("#signupForm input");
  var submitButton = document.getElementById("signupSubmitBtn");
  inputs.forEach(function(input) {
    input.style.display = "none";
  });
  submitButton.style.display = "none";

  // Create the response message element
  var messageContainer = document.getElementById("messageContainer");
  var message = document.createElement("p");
  message.textContent = "We are reviewing your account information.";
  message.style.color = "green";
  messageContainer.appendChild(message);
});
