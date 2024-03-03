<?php
// Include your database connection file here
// Example: include('db_connection.php');

// Assuming you have a database connection
// Replace 'your_database_info' with your actual database details
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phoneNumber = $_POST["username"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];
    $inviteCode = $_POST["invitecode"];

    // Validate password and confirm password match
    if ($password != $confirmPassword) {
        echo "Passwords do not match";
        exit();
    }

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO users (phoneNumber, password, inviteCode) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $phoneNumber, $password, $inviteCode);

    if ($stmt->execute()) {
        // Registration successful
        // Redirect or perform further actions as needed
        echo "Registration successful";
    } else {
        // Registration failed
        echo "Error during registration: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
