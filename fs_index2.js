console.log(localStorage.getItem("userpass"));
function logIn() {
    let user = Array(document.getElementById("name2").value);
    let pass = Array(document.getElementById("pass2").value);
    let database = localStorage.getItem("userpass").split(",");
    let index = database.indexOf(String(user));
    console.log(index);
    if (database[index + 1] == pass) {
        localStorage.setItem("currentuser", user);
        localStorage.setItem("currentpass", pass);
        location.href = "fs_main.html"
        // Mở sang trang chính
    } else {
        alert("Wrong username or password");
    }
}