Hex = function (game, hexmap, hexagonOptions) {
  Phaser.Sprite.call(this, game, hexagonOptions.pos.x, hexagonOptions.pos.y, 'tile-0');

  this.inputEnabled = true;
  this.events.onInputOver.add(hexHover, this);
  this.events.onInputOut.add(restoreTexture, this);
  this.events.onInputDown.add(hexClick, this);

  this.hexIndex = { index: hexagonOptions.index.id, x: hexagonOptions.index.x, y: hexagonOptions.index.y };
  this.hexSize = { width: hexagonOptions.size.width, height: hexagonOptions.size.height };
  this.hexInfo = { countryid: 0, tiletype: 0, name: '0', riskFactor: 0 };
  this.hexMap = hexmap;
  this.game = game;

  this.currentSpriteIndex = 0;
  this.isRevealed = false;
  this.isFlagged = false;

  this.outOfCameraBoundsKill = true;
  this.autoCull = true;

  this.updatable = true;
  this.hovered = false;

  initTextureFromMapping(this);
  this.hasBomb = shouldHaveBomb(this);
  if (!this.hasBomb && !this.isRevealed) {
    this.game.countEmptyTiles += 1;
  }

  function hexHover(self) {
    if (!self.isRevealed && !self.isFlagged) {
      self.loadTexture('tile-marker');
      self.hovered = true;
    }
  }

  function hexClick(self, pointer) {
    if (pointer.button === 0 && !self.isFlagged && !self.isRevealed) {
      if (self.hasBomb) {
        self.reveal(0);
      } else {
        self.hexMap.revealAdjacentTiles(self.hexIndex);
      }
      fireworks.render.play();
      fireworks.animateParticules(pointer.clientX, pointer.clientY);
    }

    if (pointer.button == 2) {
      if (!self.isRevealed) {
        updateTexture(self);
      }
    }
  }

  function restoreTexture(self) {
    if (!self.isRevealed && !self.isFlagged) {
      self.loadTexture('tile-' + self.currentSpriteIndex);
    }
  }

  function updateTexture(self) {
    var id = self.currentSpriteIndex;
    if (id === 0) {
      self.loadTexture('tile-1');
      self.isFlagged = true;
      self.currentSpriteIndex = 1;
    } else {
      self.loadTexture('tile-0');
      self.isFlagged = false;
      self.currentSpriteIndex = 0;
    }

  }

  function initTextureFromMapping(self) {
    var id = "t" + self.hexIndex.index;
    var tile = mapping.tile[id];
    if(tile !== undefined) {
      self.hexInfo = tile;
      self.hexInfo.riskFactor = (100 * riskFactor[tile.countryid - 1]) / 2;
    } else {
      self.hexInfo = {
        countryid: 0,
        tiletype: 0,
        name: 'Ocean',
        riskFactor: 0
      };
      self.isRevealed = true;
      self.loadTexture('empty');
      self.inputEnabled = false;
      self.kill();
    }
  }

  function shouldHaveBomb(self) {
    return (Math.floor((Math.random() * 100) + 1) <= self.hexInfo.riskFactor) ? true : false;
  }
};

Hex.prototype = Object.create(Phaser.Sprite.prototype);
Hex.prototype.constructor = Hex;

Hex.prototype.update = function() {
  if (!this.isRevealed && !this.isFlagged) {
    if ((!this.game.input.activePointer.withinGame) || (this.game.input.activePointer.isDown && this.hovered)) {
      this.loadTexture('tile-' + this.currentSpriteIndex);
      this.hovered = false;
    }
  }

  if (this.inCamera && this.updatable) {
    this.renderable = true;
    this.visible = true;
  }
};

Hex.prototype.reveal = function(points) {
  this.isRevealed = true;
  if (this.hasBomb) {
    this.loadTexture('explosion');
    this.game.gameState.gameOver(this.hexInfo.name);
  } else {
    this.game.countEmptyTiles -= 1;
    if (this.game.countEmptyTiles <= 0) {
      this.game.gameState.gameWin();
    }
    if (points > 0) {
      this.loadTexture('point-' + points);
      this.game.gameState.updatePoints(points);
    } else {
      this.loadTexture('empty');
      this.kill();
      this.updatable = false;
      this.game.gameState.updatePoints(1);
    }
  }
};

Hex.prototype.revealBomb = function() {
  this.isRevealed = true;
  if (this.hasBomb && !this.isFlagged) {
    this.loadTexture('explosion');
  }
};

Hex.prototype.reset = function() {
  if (this.hexInfo.tiletype !== 0) {
    this.hasBomb = (Math.floor((Math.random() * 100) + 1) <= this.hexInfo.riskFactor) ? true : false;
    this.currentSpriteIndex = 0;
    this.isRevealed = false;
    this.isFlagged = false;
    this.hovered = false;
    this.alive = true;
    this.renderable = true;
    this.visible = true;
    this.loadTexture('tile-0');
  }
};
