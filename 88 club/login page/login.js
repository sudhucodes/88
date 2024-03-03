function login(event) {
    event.preventDefault();

    // Simulate login logic (replace with your actual implementation)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        displayErrorMessage('Please enter both username and password.');
    } else {
        // Simulate a successful login (replace with server-side authentication)
        if (username === 'demo' && password === 'demo') {
            alert('Login successful!');
        } else {
            displayErrorMessage('Invalid username or password. Please try again.');
        }
    }
}

function register() {
    window.location.href = '../register page/register.html'; 
}

function displayErrorMessage(message) {
    const errorMessageContainer = document.getElementById('errorMessage');
    errorMessageContainer.innerText = message;
}

function login() {
    window.location.herf = '../Home/home.html';
}

function login(event) {
    event.preventDefault();

    // Get input values
    var storedUser = localStorage.getItem("user");
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Check if user data exists in local storage
    if (storedUser) {
        storedUser = JSON.parse(storedUser);

        // Check if input matches stored data
        if (usernameInput === storedUser.username && passwordInput === storedUser.password) {
            alert("Login successful!");
        } else {
            alert("Invalid username or password!");
        }
    } else {
        alert("User not registered!");
    }
}
