function backToLogin() {
    window.location.href = '../login page/login.html'; // Adjust the path based on your folder structure
}
function register(event) {
    event.preventDefault();

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create user object
    var user = {
        username: username,
        password: password
    };

    // Save user data to local storage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
}
