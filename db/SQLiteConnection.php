<?php

require 'Config.php';

class SQLiteConnection {

  private $pdo;

  public function connect() {
    if ($this->pdo == null) {
      try {
        $this->pdo = new \PDO('sqlite:' . Config::SQLITE_FILE);
      } catch (\PDOException $e) {
        die("Could not init DB Error:" + $e);
      }
    }
    return $this->pdo;
  }

}

?>
