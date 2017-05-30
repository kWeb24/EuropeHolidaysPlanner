GameState = function (game) {
  this.game = game;
  this.isPlaying = true;
  this.points = 0;
};

GameState.prototype = Object.create(GameState);
GameState.prototype.constructor = GameState;

GameState.prototype.updatePoints = function(points) {
  var self = this;
  self.points += points;
  self.updateUiCounter(self.points);
};

GameState.prototype.updateUiCounter = function(points) {
  var pointsEl = document.getElementById('pointsCounter');
  pointsEl.innerHTML = points;
};

GameState.prototype.gameOver = function(country) {
  var diedAtEl = document.getElementById('diedat');
  diedAtEl.innerHTML = country;
  this.pause();
  togglePopup('loose');
};

GameState.prototype.pause = function() {
  this.game.paused = true;
  this.game.lockRender = true;
};
