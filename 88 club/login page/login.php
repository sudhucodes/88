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
    $phoneNumber = $_POST["phoneNumber"];
    $password = $_POST["password"];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE phoneNumber = ? AND password = ?");
    $stmt->bind_param("ss", $phoneNumber, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // User successfully authenticated
        // Redirect or perform further actions as needed
        echo "Login successful";
    } else {
        // Invalid credentials
        echo "Invalid login credentials";
    }

    $stmt->close();
}

$conn->close();
?>
