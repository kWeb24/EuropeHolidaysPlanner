HexMap = function (game, config) {
  Phaser.Group.call(this, game);
  this.config = config;
  this.tileCheckList = [];
  this.tileCheckedList = [];

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

    var hexagon = new Hex(game, self, hexagonOptions);
    return hexagon;
  }
};

HexMap.prototype = Object.create(Phaser.Group.prototype);
HexMap.prototype.constructor = HexMap;

HexMap.prototype.revealAdjacentTiles = function(hex) {
  var self = this;
  var adjecentTilesIndexes = calcAdjecent(hex);
  var tiles = [];
  var points = 0;
  var selectedTile = self.children[hex.index];

  adjecentTilesIndexes.forEach(function(tileId) {
    var tile = self.children[tileId];
    if (tile.hasBomb) {
      points += 1;
    }
    tiles.push(tile);
  });

  selectedTile.reveal(points);

  self.addToChecklist(tiles, points);
  self.updateChecklist(selectedTile);
};

HexMap.prototype.addToChecklist = function(tiles, points) {
  var self = this;
  if (points === 0) {
    tiles.forEach(function(tile) {
      if (self.tileCheckList.indexOf(tile) == -1 && self.tileCheckedList.indexOf(tile) == -1 && tile.hexInfo.tiletype !== 0) {
        self.tileCheckList.push(tile);
      }
    });
  }
};

HexMap.prototype.updateChecklist = function(selectedTile) {
  var self = this;
  self.tileCheckedList.push(selectedTile);
  self.tileCheckList.splice(self.tileCheckList.indexOf(selectedTile), 1);

  if (self.tileCheckList.length > 0) {
    var next = self.tileCheckList[0];
    self.revealAdjacentTiles(next.hexIndex);
  } else {
    self.tileCheckList = [];
    self.tileCheckedList = [];
  }
};

function calcAdjecent(hex) {
  var result = null;
  if (hex.x % 2 === 0) {
    result = calcEvenRow(hex);
  } else {
    result = calcOddRow(hex);
  }
  return result;
}

function calcEvenRow(hex) {
  var result = null;
  if (hex.index % 2 === 0) {
    //pp
    result = [
      hex.index - 206,
      hex.index - 204,
      hex.index - 2,
      hex.index - 1,
      hex.index + 1,
      hex.index + 2
    ];
  } else {
    //pn
    result = [
      hex.index - 2,
      hex.index - 1,
      hex.index + 1,
      hex.index + 2,
      hex.index + 204,
      hex.index + 206
    ];
  }
  return result;
}

function calcOddRow(hex) {
  var result = null;
  if (hex.index % 2 === 0) {
    //np
    result = [
      hex.index - 2,
      hex.index - 1,
      hex.index + 1,
      hex.index + 2,
      hex.index + 204,
      hex.index + 206
    ];
  } else {
    //nn
    result = [
      hex.index - 206,
      hex.index - 204,
      hex.index - 2,
      hex.index - 1,
      hex.index + 1,
      hex.index + 2
    ];
  }
  return result;
}
