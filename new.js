function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    
    if (fname == "" || lname == "" || email == "") {
      alert("Please enter your first name, last name, and email address.");
      return false;
    }
  }
  