document.addEventListener("DOMContentLoaded", function() {
    var submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", function(event) {
      event.preventDefault();
      var email = document.getElementById("email").value;
      var username = document.getElementById("username").value;
      var name = document.getElementById("name").value;
      var password = document.getElementById("password").value;
  
      if (email && username && name && password) {
        var successDiv = document.createElement("div");
        successDiv.classList.add("success-message");
        successDiv.innerHTML = "Banker Added Successfully";
        localStorage.setItem("successMessage", successDiv.outerHTML);
        window.location.reload();
      } else {
        var errorDiv = document.createElement("div");
        errorDiv.classList.add("error-message");
        errorDiv.innerHTML = "Please enter all the requirements.";
        document.body.appendChild(errorDiv);
      }
    });
  
    // Check if there is a success or error message in local storage
    var successMessage = localStorage.getItem("successMessage");
    if (successMessage) {
      var body = document.getElementsByTagName("body")[0];
      body.innerHTML += successMessage;
     // localStorage.removeItem("successMessage");
    }
  
    var errorMessage = localStorage.getItem("errorMessage");
    if (errorMessage) {
      var body = document.getElementsByTagName("body")[0];
      body.innerHTML += errorMessage;
     // localStorage.removeItem("errorMessage");
    }
  });