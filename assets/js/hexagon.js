Hex = function (game, hexagonOptions) {
  Phaser.Sprite.call(this, game, hexagonOptions.pos.x, hexagonOptions.pos.y, 'tile-0');

  this.inputEnabled = true;
  this.events.onInputOver.add(hexHover, this);
  this.events.onInputOut.add(restoreTexture, this);
  this.events.onInputDown.add(hexClick, this);

  this.hexIndex = { index: hexagonOptions.index.id, x: hexagonOptions.index.x, y: hexagonOptions.index.y };
  this.hexSize = { width: hexagonOptions.size.width, height: hexagonOptions.size.height };
  this.hexInfo = { countryid: 0, tiletype: 0, name: '0', riskFactor: 0 };

  initTextureFromMapping(this);
  this.currentSpriteIndex = 0;
  this.hasBomb = shouldHaveBomb(this);

  function hexHover(item) {
    item.loadTexture('tile-marker');
  }

  function hexClick(item, pointer) {
    if (pointer.button === 0) {
        item.loadTexture('explosion');
    }

    if (pointer.button == 2) {
        updateTexture(item, item.currentSpriteIndex + 1);
    }
  }

  function restoreTexture(item) {
    item.loadTexture('tile-' + item.currentSpriteIndex);
  }

  function updateTexture(item, texId) {
    var id = texId;
    if (texId > 1) id = 0;
    if (texId < 0) id = 1;
    item.currentSpriteIndex = id;
    item.loadTexture('tile-' + id);
  }

  function initTextureFromMapping(item) {
    var id = "t" + item.hexIndex.index;
    var tile = mapping.tile[id];
    if(tile !== undefined) {
      item.hexInfo = tile;
      item.hexInfo.riskFactor = 100 * riskFactor[tile.countryid - 1];
    } else {
      item.hexInfo = {
        countryid: 0,
        tiletype: 0,
        name: 'Ocean',
        riskFactor: 0
      };
    }
  }

  function shouldHaveBomb(item) {
    return (Math.floor((Math.random() * 100) + 1) <= item.hexInfo.riskFactor) ? true : false;
  }
};

Hex.prototype = Object.create(Phaser.Sprite.prototype);
Hex.prototype.constructor = Hex;

Hex.prototype.update = function() {
  if ((this.input.pointerOver() && !this.game.input.activePointer.withinGame) || (this.game.input.activePointer.middleButton.isDown)) {
    this.loadTexture('tile-' + this.currentSpriteIndex);
  }
};
