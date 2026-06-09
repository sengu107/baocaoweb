document.getElementById("btn-login").onclick = function () {
    var email = document.getElementById("email").value.trim();
    var phonenumber = document.getElementById("phonenumber").value.trim();
    var username = document.getElementById("username").value.trim();
    var address = document.getElementById("address").value.trim();
    var password = document.getElementById("pwrd").value.trim();
    var repeatPassword = document.getElementById("rpwrd").value.trim();
    var usernamepattern = /^[a-zA-Z0-9_]{3,}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^0\d{9}$/;
    if (
        (emailPattern.test(email) && phonePattern.test(phonenumber)) && 
        usernamepattern.test(username) &&
        address.length > 0 &&
        password.length >= 6 &&
        password === repeatPassword
    ) {
        alert("Sign-Up successful!");
    } else {
        alert("Please fill in all fields correctly");
    }
}