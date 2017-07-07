<?php

require 'Config.php';

class SQLiteConnection {

  private $pdo;

  public function connect() {
    if ($this->pdo == null) {
      try {
        $this->pdo = new \PDO('sqlite:' . Config::SQLITE_FILE);
      } catch (\PDOException $e) {
        //todo
      }
    }
    return $this->pdo;
  }

}

?>
