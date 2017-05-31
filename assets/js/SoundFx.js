SoundFx = function (game) {
  this.game = game;

  this.clickSound = game.add.sound('click');
  this.revealSound = game.add.sound('reveal');
  this.bombSound = game.add.sound('bomb');

};

SoundFx.prototype = Object.create(SoundFx);
SoundFx.prototype.constructor = SoundFx;

SoundFx.prototype.click = function() {
  this.clickSound.play();
};

SoundFx.prototype.reveal = function() {
  this.revealSound.play();
};

SoundFx.prototype.bomb = function() {
  this.bombSound.play();
};
