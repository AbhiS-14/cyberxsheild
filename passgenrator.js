function generatePassword() {

    let length = Number(document.getElementById("length").value);

    let chars = "";

    if(document.getElementById("upper").checked){
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(document.getElementById("lower").checked){
        chars += "abcdefghijklmnopqrstuvwxyz";
    }

    if(document.getElementById("number").checked){
        chars += "0123456789";
    }

    if(document.getElementById("special").checked){
        chars += "!@#$%^&*()_+";
    }

    if(chars === ""){
        alert("Please select at least one option.");
        return;
    }

    let password = "";

    for(let i = 0; i < length; i++){

        let randomIndex = Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    document.getElementById("result").value = password;
}

function copyPassword(){

    let password = document.getElementById("result");

    password.select();

    navigator.clipboard.writeText(password.value);

    alert("Password Copied!");
}