GameState = function (game) {
  this.game = game;
  this.hexMap = null;
  this.isPlaying = true;
  this.points = 0;
};

GameState.prototype = Object.create(GameState);
GameState.prototype.constructor = GameState;

GameState.prototype.setHexMap = function(hexMap) {
  this.hexMap = hexMap;
};

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
    //this.pause();
    togglePopup('loose');
  }
};

GameState.prototype.pause = function() {
  this.isPlaying = false;
  this.game.paused = true;
  this.game.lockRender = true;
};

GameState.prototype.reset = function() {
  this.points = 0;
  this.updateUiCounter(this.points);
  this.hexMap.reset();
  this.game.paused = false;
  this.game.lockRender = false;
  this.isPlaying = true;
  hidePopups();
};
