window.onload = function() {
  var canvasSize = {
    width: document.getElementById('game').getBoundingClientRect().width,
    height: document.getElementById('game').getBoundingClientRect().height
  };

	var game = new Phaser.Game(
    canvasSize.width,
    canvasSize.height,
    Phaser.CANVAS,
    "game",
    {
      preload: onPreload,
      create: onCreate,
      render: render
    });

  var config = {
    hexSize: { width: 24, height: 26 },
    gridSize: { width: 205, height: 110 },
    drag: {
      max: { x: 1250, y: 1060 },
      min: { x: 115, y: -455 }
    }
  };

	var columns = [Math.ceil(config.gridSize.width / 2), Math.floor(config.gridSize.width / 2)];

  var hexagonGroup;
  var hexagonGroupOld;

  var bgmap;
  var bgmapold;

	function onPreload() {
    game.load.image("map-lg", "assets/img/map-large.jpg");
    game.load.image("tile-marker", "assets/img/marker.png");
    game.load.image("explosion", "assets/img/explosion.png");
    game.load.image("tile-0", "assets/img/hexagon.png");
    game.load.image("tile-1", "assets/img/warning.png");
    game.load.image("point-1", "assets/img/point-1.png");
    game.load.image("point-2", "assets/img/point-2.png");
    game.load.image("point-3", "assets/img/point-3.png");
    game.load.image("point-4", "assets/img/point-4.png");
    game.load.image("point-5", "assets/img/point-5.png");
	}

	function onCreate() {
    game.canvas.oncontextmenu = function (e) { e.preventDefault(); };
		game.stage.backgroundColor = "#b7dbef";
    game.input.mouse.capture = true;

    bgmap = game.add.sprite(game.width, game.height, 'map-lg');
    bgmap.anchor.setTo(0.5);
    bgmap.x = game.world.centerX;
    bgmap.y = game.world.centerY;

    createHexMap();
	}

  function render() {
    dragListener(game);
  }

  function createHexMap() {
    hexagonGroup = game.add.group();
    var tileId = 0;
    for (var i = 0; i < config.gridSize.height / 2; i ++) {
			for (var j = 0; j < config.gridSize.width; j ++) {
				if (config.gridSize.height % 2 === 0 || i + 1 < config.gridSize.height / 2 || j % 2 === 0) {
          var hex = createHex(i, j, tileId);
          tileId += 1;
					hexagonGroup.add(hex);
				}
			}
		}
		hexagonGroup.x = (game.width - config.hexSize.width * Math.ceil(config.gridSize.width / 2)) / 2;
    if (config.gridSize.width % 2 === 0){
      hexagonGroup.x -= config.hexSize.width / 4;
    }
		hexagonGroup.y = (game.height - Math.ceil(config.gridSize.height / 2) * config.hexSize.height - Math.floor(config.gridSize.height / 2) * config.hexSize.height / 2) / 2;
    if (config.gridSize.height % 2 === 0){
      hexagonGroup.y -= config.hexSize.height / 8;
    }
  }

  function createHex(i, j, tileId) {
    var hexagonOptions = {
      index: {
        id: tileId,
        x: i,
        y: j
      },
      pos: {
        x: config.hexSize.width * j / 2,
        y: config.hexSize.height * i * 1.5 + (config.hexSize.height / 4 * 3) * (j % 2)
      },
      size: {
        width: config.hexSize.width,
        height: config.hexSize.height
      }
    };

    var hexagon = new Hex(game, hexagonOptions);
    return hexagon;
  }

  function dragListener() {
    if (game.input.activePointer.middleButton.isDown) {
      var move = {
        x: game.input.activePointer.position.x - game.input.activePointer.positionDown.x,
        y: game.input.activePointer.position.y - game.input.activePointer.positionDown.y
      };

      var bgX = bgmapold.x + move.x;
      if (bgX > config.drag.min.x && bgX < config.drag.max.x) {
        bgmap.x = bgmapold.x + move.x;
        hexagonGroup.x = hexagonGroupOld.x + move.x;
      }

      var bgY = bgmapold.y + move.y;
      if (bgY > config.drag.min.y && bgY < config.drag.max.y) {
        bgmap.y = bgmapold.y + move.y;
        hexagonGroup.y = hexagonGroupOld.y + move.y;
      }
    } else {
      bgmapold = { x: bgmap.x, y: bgmap.y };
      hexagonGroupOld = { x: hexagonGroup.x, y: hexagonGroup.y };
    }
  }

};
