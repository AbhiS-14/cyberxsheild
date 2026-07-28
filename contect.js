function nextPage() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value.trim();
    let course = document.getElementById("course").value.trim();
    let city = document.getElementById("city").value.trim();
     let state = document.getElementById("state").value.trim();
    let source = document.getElementById("source").value;
    let comments = document.getElementById("comments").value.trim();

    if (
        name === "" ||
        email === "" ||
        mobile === "" ||
        age === "" ||
        gender === "" ||
        college === "" ||
        course === "" ||
        city === "" || 
        state === "" ||
        source === ""
    ) {
        alert("Please fill all the required details.");
        return;
    }

    // Mobile number validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    // Age validation
    if (age < 10 || age > 100) {
        alert("Enter a valid age.");
        return;
    }

    alert("Details submitted successfully!");
    localStorage.setItem("name", name);
localStorage.setItem("email", email);
localStorage.setItem("mobile", mobile);
localStorage.setItem("age", age);
localStorage.setItem("gender", gender);
localStorage.setItem("college", college);
localStorage.setItem("course", course);
localStorage.setItem("city", city);
localStorage.setItem("state",state);
localStorage.setItem("source", source);
localStorage.setItem("comments", comments);
window.location.href="lastpage.html";

}

