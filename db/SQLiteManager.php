<?php

class SQLiteManager {

  private $pdo;

  public function __construct($pdo) {
    $this->pdo = $pdo;
    $this->createTables();
  }

  private function createTables() {
    $queries = ['
      CREATE TABLE IF NOT EXIST deaths (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Country VARCHAR (32) NOT NULL,
        Date TEXT )',

      'CREATE TABLE IF NOT EXIST completed (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Date TEXT )',

      'CREATE TABLE IF NOT EXIST total (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Date TEXT )'
    ];

    foreach ($queries as $query) {
      $this->pdo->exec($query);
    }
  }

}

?>
