GameState = function () {
  this.isPlaying = false;
  this.points = 0;
};

GameState.prototype = Object.create(GameState);
GameState.prototype.constructor = GameState;

GameState.prototype.updatePoints = function(points) {
  var self = this;
  self.points += points;
};
