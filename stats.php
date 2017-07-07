<?php

if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {

  require 'db/SQLiteManager.php';
  $SQLiteManager = new SQLiteManager;

  $request = json_decode(file_get_contents('php://input'));

  if ($request) {
    switch ($request->route) {
      case 'total':
        $res = $SQLiteManager->incrementTotal();
        if (!$res) echo "SQL Failed";
      break;
      case 'completed':
        $res = $SQLiteManager->incrementCompleted();
        if (!$res) echo "SQL Failed";
      break;
      case 'deaths':
        $res = $SQLiteManager->incrementDeaths($request->data);
        if (!$res) echo "SQL Failed";
      break;
      case 'stats':
        $res = $SQLiteManager->getStats();
        if (!$res) {
          echo "SQL Failed";
        } else {
          echo json_encode($res);
        }
      break;
      case 'getcompleted':
        $res = $SQLiteManager->getCompleted();
        if (!$res) {
          echo "SQL Failed";
        } else {
          echo $res;
        }
      break;
      case 'gettotal':
        $res = $SQLiteManager->getTotal();
        if (!$res) {
          echo "SQL Failed";
        } else {
          echo $res;
        }
      break;
    }
  }

} else {
  header('HTTP/1.0 403 Forbidden');
  die('403 Forbidden');
}

?>
