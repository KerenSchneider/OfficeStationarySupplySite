function checkLogin() {
    if (document.getElementById("email").value === "stam@stam.com" &&
       document.getElementById("password").value === "1234") {
        document.location = "categories.html";
    }
}