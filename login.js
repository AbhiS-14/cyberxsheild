function showRegister() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";
    document.getElementById("resetBox").style.display = "none";
       document.getElementById("Profile").style.display = "none";
}

function showLogin() {
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("resetBox").style.display = "none";
       document.getElementById("Profile").style.display = "none";
}

function reset() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("resetBox").style.display = "block";
       document.getElementById("Profile").style.display = "none";
}
function showprofile()
{
       document.getElementById("loginBox").style.display = "none";
        document.getElementById("registerBox").style.display = "none";
        document.getElementById("resetBox").style.display = "none";

        // Show profile
        document.getElementById("Profile").style.display = "block";

        // Display user details
        document.getElementById("puser").innerHTML = localStorage.getItem("newUser");
        document.getElementById("pname").innerHTML = localStorage.getItem("names");
        document.getElementById("pemail").innerHTML = localStorage.getItem("emails");
        document.getElementById("pmobile").innerHTML = localStorage.getItem("mobiles");
        document.getElementById("page").innerHTML = localStorage.getItem("ages");
        document.getElementById("pgender").innerHTML = localStorage.getItem("genders");
        document.getElementById("pcollege").innerHTML = localStorage.getItem("colleges");
        document.getElementById("pcourse").innerHTML = localStorage.getItem("courses");
        document.getElementById("pstate").innerHTML = localStorage.getItem("states");
        document.getElementById("pcity").innerHTML = localStorage.getItem("citys");

}
window.onload = function () {

    if (localStorage.getItem("isLoggedIn") === "true") {
        showprofile();
    }

};

// Create Account
function create() {

    let username = document.getElementById("newUser").value.trim();
    let p = document.getElementById("newpass").value.trim();
    let cp = document.getElementById("confirmpass").value.trim();
    let name = document.getElementById("names").value.trim();
    let email = document.getElementById("emails").value.trim();
    let mobile = document.getElementById("mobiles").value.trim();
    let age = document.getElementById("ages").value.trim();
    let gender = document.getElementById("genders").value;
    let college = document.getElementById("colleges").value.trim();
    let course = document.getElementById("courses").value.trim();
    let state = document.getElementById("states").value.trim();
    let city = document.getElementById("citys").value.trim();

    // Empty field validation
    if (
        username === "" ||
        p === "" ||
        cp === "" ||
        name === "" ||
        email === "" ||
        mobile === "" ||
        age === "" ||
        gender === "" ||
        college === "" ||
        course === "" ||
        state === "" ||
        city === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    // Password validation
    if (p !== cp) {
        alert("Passwords do not match.");
        return;
    }

    // Mobile validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    // Age validation
    if (age < 10 || age > 100) {
        alert("Enter a valid age.");
        return;
    }

    // Save Data
    localStorage.setItem("newUser", username);
    localStorage.setItem("newpass", p);

    localStorage.setItem("names", name);
    localStorage.setItem("emails", email);
    localStorage.setItem("mobiles", mobile);
    localStorage.setItem("ages", age);
    localStorage.setItem("genders", gender);
    localStorage.setItem("colleges", college);
    localStorage.setItem("courses", course);
    localStorage.setItem("states", state);
    localStorage.setItem("citys", city);

    alert("Account Created Successfully!");

    // Clear Form
    document.getElementById("newUser").value = "";
    document.getElementById("newpass").value = "";
    document.getElementById("confirmpass").value = "";
    document.getElementById("names").value = "";
    document.getElementById("emails").value = "";
    document.getElementById("mobiles").value = "";
    document.getElementById("ages").value = "";
    document.getElementById("genders").value = "";
    document.getElementById("colleges").value = "";
    document.getElementById("courses").value = "";
    document.getElementById("states").value = "";
    document.getElementById("citys").value = "";

    showLogin();
}

// Login
function login() {

    let uname = document.getElementById("user").value.trim();
    let pass = document.getElementById("pass").value.trim();

    let storedUser = localStorage.getItem("newUser");
    let storedPass = localStorage.getItem("newpass");

    if (uname === storedUser && pass === storedPass) {

        alert("Login Successful");
                 // Save login status
        localStorage.setItem("isLoggedIn", "true");

        // Redirect
       showprofile();

    } else {
        alert("Invalid Username or Password");
    }
}

// Reset Password
function resetPassword() {

    let user = document.getElementById("resetUser").value.trim();
    let pass = document.getElementById("resetPass").value.trim();
    let confirm = document.getElementById("resetConfirm").value.trim();

    if (user === "" || pass === "" || confirm === "") {
        alert("Fill all fields.");
        return;
    }

    if (pass !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    if (user !== localStorage.getItem("newUser")) {
        alert("Username not found.");
        return;
    }

    localStorage.setItem("newpass", pass);

    alert("Password Reset Successfully!");

    document.getElementById("resetUser").value = "";
    document.getElementById("resetPass").value = "";
    document.getElementById("resetConfirm").value = "";

    showLogin();
}

// Logout
function logout() {

    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";

    showLogin();
     localStorage.removeItem("isLoggedIn");
}
function home() {
    window.location.href="index.html";
}