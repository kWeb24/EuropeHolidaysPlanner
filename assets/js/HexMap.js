HexMap = function (game, config) {
  Phaser.Group.call(this, game);
  this.config = config;
  createHexMap(this);

  function createHexMap(self) {
    var tileId = 0;
    for (var i = 0; i < self.config.gridSize.height / 2; i ++) {
			for (var j = 0; j < self.config.gridSize.width; j ++) {
				if (self.config.gridSize.height % 2 === 0 || i + 1 < self.config.gridSize.height / 2 || j % 2 === 0) {
          var hex = createHex(self, i, j, tileId);
          tileId += 1;
					self.add(hex);
				}
			}
		}
		self.x = (self.game.width - self.config.hexSize.width * Math.ceil(self.config.gridSize.width / 2)) / 2;
    if (self.config.gridSize.width % 2 === 0){
      self.x -= self.config.hexSize.width / 4;
    }
		self.y = (self.game.height - Math.ceil(self.config.gridSize.height / 2) * self.config.hexSize.height - Math.floor(self.config.gridSize.height / 2) * self.config.hexSize.height / 2) / 2;
    if (self.config.gridSize.height % 2 === 0){
      self.y -= self.config.hexSize.height / 8;
    }
  }

  function createHex(self, i, j, tileId) {
    var hexagonOptions = {
      index: {
        id: tileId,
        x: i,
        y: j
      },
      pos: {
        x: self.config.hexSize.width * j / 2,
        y: self.config.hexSize.height * i * 1.5 + (self.config.hexSize.height / 4 * 3) * (j % 2)
      },
      size: {
        width: self.config.hexSize.width,
        height: self.config.hexSize.height
      }
    };

    var hexagon = new Hex(game, hexagonOptions);
    return hexagon;
  }
};

HexMap.prototype = Object.create(Phaser.Group.prototype);
HexMap.prototype.constructor = HexMap;
