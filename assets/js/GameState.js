GameState = function (game) {
  this.game = game;
  this.hexMap = game.hexMap;
  this.isPlaying = true;
  this.points = 0;
  addTotal();
  getStats();
  getCompleted();
  getTotal();
};

GameState.prototype = Object.create(GameState);
GameState.prototype.constructor = GameState;

GameState.prototype.updatePoints = function(points) {
  if (this.isPlaying) {
    var self = this;
    self.points += points;
    self.updateUiCounter(self.points);
  }
};

GameState.prototype.updateUiCounter = function(points) {
  var pointsEl = document.getElementById('pointsCounter');
  pointsEl.innerHTML = points;
};

GameState.prototype.gameOver = function(country) {
  if (this.isPlaying) {
    this.hexMap.revealBombs();
    var diedAtEl = document.getElementById('diedat');
    diedAtEl.innerHTML = country;
    addDeaths(country);
    togglePopup('loose');
  }
};

GameState.prototype.gameWin = function() {
  if (this.isPlaying) {
    this.game.countEmptyTiles = 0;
    this.hexMap.revealBombs();
    addCompleted();
    togglePopup('win');
  }
};

GameState.prototype.pause = function() {
  this.isPlaying = false;
  this.game.paused = true;
  this.game.lockRender = true;
};

GameState.prototype.reset = function() {
  addTotal();
  getStats();
  getCompleted();
  getTotal();
  this.points = 0;
  this.updateUiCounter(this.points);
  this.hexMap.reset();
  this.game.paused = false;
  this.game.lockRender = false;
  this.isPlaying = true;
  this.game.countEmptyTiles = 0;
  hidePopups();
};
