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

  var hexMap = null;
  var hexMapOldPos = null;

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
    game.load.image("empty", "assets/img/hexagon-empty.png");
	}

	function onCreate() {
    game.canvas.oncontextmenu = function (e) { e.preventDefault(); };
		game.stage.backgroundColor = "#b7dbef";
    game.input.mouse.capture = true;

    bgmap = game.add.sprite(game.width, game.height, 'map-lg');
    bgmap.anchor.setTo(0.5);
    bgmap.x = game.world.centerX;
    bgmap.y = game.world.centerY;

    hexMap = new HexMap(game, config);

	}

  function render() {
    dragListener(game);
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
        hexMap.x = hexMapOldPos.x + move.x;
      }

      var bgY = bgmapold.y + move.y;
      if (bgY > config.drag.min.y && bgY < config.drag.max.y) {
        bgmap.y = bgmapold.y + move.y;
        hexMap.y = hexMapOldPos.y + move.y;
      }
    } else {
      bgmapold = { x: bgmap.x, y: bgmap.y };
      hexMapOldPos = { x: hexMap.x, y: hexMap.y };
    }
  }

  var helpLinkEl = document.getElementById('helpLink');
  helpLinkEl.addEventListener('click', function() {
      togglePopup('help');
  }, false);

  var statsLinkEl = document.getElementById('statsLink');
  statsLinkEl.addEventListener('click', function() {
      var target = statsLinkEl.getAttribute("href");
      togglePopup('stats');
  }, false);


  function togglePopup(id) {
    hidePopups();
    var el = document.getElementById(id);
    el.classList.add("visible");
  }

  function hidePopups() {
    var pops = document.getElementsByClassName("visible");
    for (var i = 0; i < pops.length; i++) {
      pops[i].classList.remove("visible");
    }
  }

  var close = document.getElementsByClassName("close-link");
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() { hidePopups(); });
  }
};
