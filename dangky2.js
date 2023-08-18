console.log(localStorage.getItem("name"))
if (localStorage.getItem("name") == null) {
    localStorage.setItem("name", [])
}

console.log(localStorage.getItem("email"))
if (localStorage.getItem("email") == null) {
    localStorage.setItem("email", [])
}

document.querySelector("#demo").onclick = function () { check() };

function check() {
    let name = document.getElementById("name").value;
    let info = document.getElementById("info").value;
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
    let user = document.getElementById("name").value;
    let database = Array(localStorage.getItem("name"));
    console.log(database.indexOf(user));
    if (database.indexOf(user) == -1) {
        localStorage.setItem("name", user);
        validateEmail();
        return true;
    }
    else {
        alert("This name already existed");
    }
}

function validateEmail () {
    let info = document.getElementById("info").value;
    let atposition = info.indexOf("@");
    let dotposition = info.indexOf(".");
    if (atposition == -1 || dotposition == -1) {
        alert("Enter a valid email address.");
    }
    else {
        isOverLapEmail();
        return true;
    }
}

function isOverLapEmail() {
    let email = document.getElementById("info").value;
    let database = Array(localStorage.getItem("email"));
    if (database.indexOf(email) == -1) {
        localStorage.setItem("email", email);
        signUp();
        return true;
    }
    else {
        alert("This email already existed");
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
                    location.href = "file:///C:/Users/admin/Desktop/web%20basic/WEB%20ADVANCE/foodstore/fs_index2.html";
                    // Mở sang trang đăng nhập
                }
            }
        }
    }
}

