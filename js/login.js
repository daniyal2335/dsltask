function login() {
  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  // Predefined username and password
  let userAptech = "Aptech";
  let hashPassword = "aptech123";

  // Check if username and password match
  if (userName === userAptech && password === hashPassword) {
    alert("Login successful!");
   
  } else {
    alert("Incorrect username or password. Please try again.");
  }
}