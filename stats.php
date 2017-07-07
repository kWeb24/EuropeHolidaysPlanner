<?php

if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {

  require 'db/SQLiteManager.php';
  $SQLiteManager = new SQLiteManager;

}

?>
