GameState = function () {
  this.isPlaying = false;
  this.points = 0;
}

Hex.prototype = Object.create(GameState);
Hex.prototype.constructor = GameState;
