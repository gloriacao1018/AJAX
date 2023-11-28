<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$dsn = 'mysql:host=localhost;dbname=IMMNEWSNETWORK;charset=utf8mb4';
$dbusername = 'root';
$dbpassword = '';

$pdo = new PDO($dsn, $dbusername, $dbpassword);
$data = $_POST;

$stmt = $pdo->prepare("INSERT INTO contactform (fName, lName, email, phone_num, message) VALUES (?, ?, ?, ?, ?)");
$success = $stmt->execute([$data['fName'], $data['lName'], $data['email'], $data['phone_num'], $data['message']]);

$response = ['success' => $success ? 'true' : 'false'];
echo json_encode($response);
?>