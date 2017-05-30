GameState = function () {
  this.isPlaying = false;
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
