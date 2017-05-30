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

  initTextureFromMapping(this);
  this.currentSpriteIndex = 0;
  this.hasBomb = shouldHaveBomb(this);
  this.isRevealed = false;
  this.isFlagged = false;

  function hexHover(self) {
    if (!self.isRevealed && !self.isFlagged) {
      self.loadTexture('tile-marker');
    }
  }

  function hexClick(self, pointer) {
    if (pointer.button === 0 && !self.isFlagged && !self.isRevealed) {
      if (self.hasBomb) {
        self.reveal(0);
      } else {
        self.hexMap.revealAdjacentTiles(self.hexIndex);
      }
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
    } else {
      self.loadTexture('tile-0');
      self.isFlagged = false;
    }
    self.currentSpriteIndex = id;
  }

  function initTextureFromMapping(self) {
    var id = "t" + self.hexIndex.index;
    var tile = mapping.tile[id];
    if(tile !== undefined) {
      self.hexInfo = tile;
      self.hexInfo.riskFactor = 100 * riskFactor[tile.countryid - 1];
    } else {
      self.hexInfo = {
        countryid: 0,
        tiletype: 0,
        name: 'Ocean',
        riskFactor: 0
      };
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
    if ((this.input.pointerOver() && !this.game.input.activePointer.withinGame) || (this.game.input.activePointer.middleButton.isDown)) {
      this.loadTexture('tile-' + this.currentSpriteIndex);
    }
  }
};

Hex.prototype.reveal = function(points) {
  if (this.hasBomb) {
    this.loadTexture('explosion');
  } else {
    if (points > 0) {
      this.loadTexture('point-' + points);
    } else {
      this.loadTexture('empty');
    }
  }
  this.isRevealed = true;
};
