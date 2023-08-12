document.querySelector("#demo").onclick = function () { check() };

function check() {
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    let info = document.getElementById("info").value;
    localStorage.setItem("email", info);
    let pass = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    if (name.length == 0 || info.length == 0 || pass.length == 0 || repass.length == 0 || dob.length == 0 || gender == "Gender") {
        alert("Complete your form");
    }
    else if (name.length < 6) {
        alert("Name must contain at least 6 letters");
    }
    else if (pass.length < 6) {
        alert("Password must contain at least 6 letters");
    }
    else if (repass != pass) {
        alert("Password must be the same");
    }
    else {
        isOverLapName();
        return true;
    }
}

function isOverLapName () {
    let user = String(document.getElementById("name").value);
    let database = localStorage.getItem("name");
    let overLapName = user.indexOf(database);
    console.log(overLapName);
    if (overLapName == -1) {
        validateEmail();
        return true;
    }
    else {
        alert("This name has already existed");
    }
}

function validateEmail () {
    let info = document.getElementById("info").value;
    var atposition = info.indexOf("@");
    var dotposition = info.indexOf(".");
    if (atposition == -1 || dotposition == -1) {
        alert("Enter a valid email address.");
    }
    else {
        isOverLapEmail();
        return true;
    }
}

function isOverLapEmail() {
    let email = String(document.getElementById("info").value);
    let database = localStorage.getItem("email");
    let overLapName = email.indexOf(database);
    if (overLapName == -1) {
        signUp();
        return true;
    }
    else {
        alert("This email has already existed");
    }
}

function signUp () {
    if (check() == true) {
        if (isOverLapName() == true) {
            if (validateEmail() == true) {
                if (isOverLapEmail() == true) {
                    let user = Array(document.getElementById("name").value);
                    let pass = Array(document.getElementById("pass").value);
                    let userandpass = user.concat(pass);
                    localStorage.setItem("userpass", userandpass);
                    console.log(21);
                    location.href = 'fs_index2.html';
                    // Mở sang trang đăng nhập
                }
            }
        }
    }
}

