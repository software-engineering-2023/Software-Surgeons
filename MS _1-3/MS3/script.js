// Login page functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    // Redirect to home page or desired location
    window.location.href = "home.html";
  }
  else if(username === "banker" && password === "admin"){
    window.location.href = "homebanker.html";

  }
  else if(username === "Systemadmin" && password === "admin"){
    window.location.href = "homeSystemadmin.html";

  } 
   else {
    alert("Invalid username or password");
  }
});



