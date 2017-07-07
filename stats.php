<?php

require 'db/SQLiteConnection.php';

$conn = new SQLiteConnection;
$pdo = $conn->connect();
if ($pdo != null) {
  echo 'Ok';
} else {
  echo "Err";
}

?>
