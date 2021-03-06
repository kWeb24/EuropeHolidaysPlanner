<?php

require 'SQLiteConnection.php';

class SQLiteManager {

  private $conn;
  private $pdo;

  public function __construct() {
    $this->conn = new SQLiteConnection;
    $this->pdo = $this->connect();
    $this->createTables();
  }

  private function connect() {
    $pdo = $this->conn->connect();
    if (!$pdo) {
      die('Could not connect to database');
    }
    return $pdo;
  }

  private function createTables() {
    $queries = [
      'CREATE TABLE IF NOT EXISTS deaths (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Country VARCHAR (32) NOT NULL,
        Date TEXT )',

      'CREATE TABLE IF NOT EXISTS completed (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Date TEXT )',

      'CREATE TABLE IF NOT EXISTS total (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Date TEXT )',
    ];

    foreach ($queries as $query) {
      try {
        $this->pdo->exec($query);
      } catch (\PDOException $e) {
        die("Create Table error: " + $e);
      }
    }
  }

  private function getCurrentDate() {
    return date("Y-m-d H:i:s");
  }

  public function incrementDeaths($country) {
    if (!$country) {
      die('Country code is null');
    }
    $countryCode = strip_tags($country);
    $sql = 'INSERT INTO deaths(Country, Date) VALUES(:Country, :Date)';
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute([
      ':Country' => $countryCode,
      ':Date' => $this->getCurrentDate(),
    ]);
    return $this->pdo->lastInsertId();
  }

  public function incrementCompleted(){
    $sql = 'INSERT INTO completed(Date) VALUES(:Date)';
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute([
      ':Date' => $this->getCurrentDate(),
    ]);
    return $this->pdo->lastInsertId();
  }

  public function incrementTotal() {
    $sql = 'INSERT INTO total(Date) VALUES(:Date)';
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute([
      ':Date' => $this->getCurrentDate(),
    ]);
    return $this->pdo->lastInsertId();
  }

  public function getStats() {
    $sql = 'SELECT count(Country) as count, Country FROM deaths GROUP BY Country ORDER BY Country';
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    $res = [];
    while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
      $res[] = array ('country' => $row['Country'], 'count' => $row['count']);
    }
    return $res;
  }

  public function getCompleted() {
    $sql = 'SELECT count(ID) as count FROM completed';
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    $res = [];
    while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
      $res[] = $row['count'];
    }
    return $res[0];
  }

  public function getTotal() {
    $sql = 'SELECT count(ID) as count FROM total';
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    $res = [];
    while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
      $res[] = $row['count'];
    }
    return $res[0];
  }

}

?>
