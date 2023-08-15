<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json;charset=utf-8");

$targetDir = __DIR__ . '/../oottImg/';

try {
    require_once("connectDailyTW.php");

    if (!empty($_FILES['photo']['name'])) {
        $extension = pathinfo($_FILES['photo']['name'], PATHINFO_EXTENSION);
        $newFileName = uniqid() . '.' . $extension; // Generate a unique filename
        
        $targetFile = $targetDir . $newFileName;
        
        if (move_uploaded_file($_FILES['photo']['tmp_name'], $targetFile)) {
            echo "File uploaded successfully as: $newFileName";
        } else {
            echo "Error uploading file.";
        }
    } else {
        echo "No file uploaded.";
    }
    
} catch (Exception $e) {
    $response = [
        'status' => 'error',
        'message' => 'An error occurred.',
    ];

    echo json_encode($response);
}
?>
