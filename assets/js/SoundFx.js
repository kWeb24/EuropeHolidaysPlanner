SoundFx = function (game) {
  this.game = game;

  this.click = game.add.sound('click');
  this.reveal = game.add.sound('reveal');
  this.bomb = game.add.sound('bomb');

};

SoundFx.prototype = Object.create(SoundFx);
SoundFx.prototype.constructor = SoundFx;

SoundFx.prototype.click = function() {
  this.click.play();
};

SoundFx.prototype.reveal = function() {
  this.reveal.play();
};

SoundFx.prototype.bomb = function() {
  this.bomb.play();
};
