<?php
// Set the appropriate headers to allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$host = 'localhost';
$username = 'mf600_hackathon';
$password = 'ci5Bdo[CqQDI';
$database = 'mf600_hackathon_db';
$conn = new mysqli($host, $username, $password, $database);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['name']) && isset($_POST['clicked'])) {
        $name = $_POST['name'];
        $clicked = filter_var($_POST['clicked'], FILTER_VALIDATE_BOOLEAN);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $stmt = $conn->prepare("INSERT INTO clicked_data (name, clicked) VALUES (?, ?)");
        $stmt->bind_param("si", $name, $clicked);

        if ($stmt->execute()) {
            $response = array(
                'success' => true,
                'message' => 'Data inserted successfully',
                'name' => $name,
                'clicked' => $clicked
            );
        } else {
            $response = array(
                'success' => false,
                'message' => 'Error inserting data: ' . $stmt->error
            );
        }

        $stmt->close();
        $conn->close();
    } else {
        
        $response = array(
            'success' => false,
            'message' => 'Name and/or clicked status missing in the request'
        );
    }
}
elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $sql = "SELECT * FROM clicked_data WHERE id = $id";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $response = array(
                'success' => true,
                'id' => $row['id'],
                'name' => $row['name'],
                'clicked' => (bool)$row['clicked']
            );
        } else {
            $response = array(
                'success' => false,
                'message' => 'No data found for the given ID'
            );
        }

        $conn->close();
    } else {
        $response = array(
            'success' => false,
            'message' => 'ID missing in the request'
        );
    }
}else {
    /
    $response = array(
        'success' => false,
        'message' => 'Does not support the request method'
    );
}

// Send the response as JSON
echo json_encode($response);
?>
