var users = []; 
var loggedInUser = null;
function register() {
    var email = document.getElementById("emailtName").value;
    var password = document.getElementById("passwordSignIn").value;
    var displayName = document.getElementById("loginName").value; 

    if (!isValidEmail(email)) {
        alert("Invalid email address.");
        return;
    }

    if (isEmailExist(email)) {
        alert("Email already exists. Please try a different email.");
        return;
    }
    users.push({ email: email, password: password, displayName: displayName });


    showLoginForm();
}


function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;


    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            loggedInUser = users[i].displayName; 
            showHomePage();
            return;
        }
    }

    alert("Invalid email or password.");
}
function showHomePage() {
    document.getElementById("homePage").style.display = "block";
    document.getElementById("displayName").innerText = loggedInUser;
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
}
function logout() {
    loggedInUser = null;
    showLoginForm();
}
function isValidEmail(email) {
   
    return true;
}
function isEmailExist(email) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return true;
        }
    }
    return false;
}
function showRegistrationForm() {
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("homePage").style.display = "none";
}
function showLoginForm() {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("homePage").style.display = "none";
}


function clearInputs() {
         
    var inputs = document.querySelectorAll("#registrationForm input, #loginForm input");

      
    inputs.forEach(function(input) {
    input.value = "";
     });
    }

  
function showHomePage() {
    document.getElementById("homePage").style.display = "block";
    document.getElementById("displayName").innerText = loggedInUser;
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registrationForm").style.display = "none";
}

function logout() {
    loggedInUser = null;
    showLoginForm();
    clearInputs();
}

     