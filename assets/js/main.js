window.onload = function() {
  fireworks.setCanvasSize();

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
      update: update,
      render: render
    });

  var config = {
    hexSize: { width: 24, height: 26 },
    gridSize: { width: 205, height: 110 },
    drag: {
      maxSpeed: 25
    }
  };

  var hexMap = null;
  var bgMap = null;
  var inputs = null;

  var gameState = null;
  var soundFx = null;
  createPopupEvents();

	function onPreload() {
    game.load.image("map-lg", "assets/img/map-large-dark.jpg");
    game.load.image("tile-marker", "assets/img/marker.png");
    game.load.image("explosion", "assets/img/explosion.png");
    game.load.image("tile-0", "assets/img/hexagon.png");
    game.load.image("tile-1", "assets/img/warning.png");
    game.load.image("point-1", "assets/img/point-1.png");
    game.load.image("point-2", "assets/img/point-2.png");
    game.load.image("point-3", "assets/img/point-3.png");
    game.load.image("point-4", "assets/img/point-4.png");
    game.load.image("point-5", "assets/img/point-5.png");
    game.load.image("point-6", "assets/img/point-6.png");
    game.load.image("empty", "assets/img/hexagon-empty.png");

    game.load.audio('click', 'assets/audio/click.wav');
    game.load.audio('reveal', 'assets/audio/reveal.wav');
    game.load.audio('bomb', 'assets/audio/bomb.wav');
	}

	function onCreate() {
    game.canvas.oncontextmenu = function (e) { e.preventDefault(); };
		game.stage.backgroundColor = "#b7dbef";
    game.input.mouse.capture = true;
    bgMap = game.add.image(game.width, game.height, 'map-lg');
    bgMap.anchor.setTo(0.5);
    bgMap.x = game.world.centerX;
    bgMap.y = game.world.centerY;

    soundFx = new SoundFx();
    gameState = new GameState(game);
    hexMap = new HexMap(game, config, gameState, soundFx);
    inputs = game.input.keyboard.createCursorKeys();
    var gameWidth = 2500;
    var gameHeight = 2128;
    var boundX = (gameWidth - game.camera.width) / -2;
    var boundY = (gameHeight - game.camera.height) / -2;
    game.world.setBounds(boundX, boundY, gameWidth, gameHeight);
    game.time.advancedTiming = true;


	}

  function render() {
    //game.debug.text(game.time.fps, 32, 32, '#FFFFFF');
    //game.debug.cameraInfo(this.game.camera, 32, 52);
    //game.debug.pointer(this.game.input.activePointer);
  }

  function update() {
    if (game.input.activePointer.middleButton.isDown) {
      dragListener();
    } else {
      if (inputs.up.isDown) {
        click.play();
        game.camera.y -= 8;
      } else if (inputs.down.isDown) {
        game.camera.y += 8;
      }

      if (inputs.left.isDown) {
        game.camera.x -= 8;
      } else if (inputs.right.isDown) {
        game.camera.x += 8;
      }
    }
  }

  function dragListener() {
    var move = {
      x: game.input.activePointer.position.x - game.input.activePointer.positionDown.x,
      y: game.input.activePointer.position.y - game.input.activePointer.positionDown.y
    };

    var maxSpeed = config.drag.maxSpeed;
    if (move.x > maxSpeed) move.x = maxSpeed;
    if (move.x < maxSpeed * -1) move.x = maxSpeed * -1;
    if (move.y > maxSpeed) move.y = maxSpeed;
    if (move.y < maxSpeed * -1) move.y = maxSpeed * -1;

    game.camera.x += move.x;
    game.camera.y += move.y;
  }

  var resetButton = document.getElementsByClassName("reset");
  for (var i = 0; i < resetButton.length; i++) {
    resetButton[i].addEventListener('click', function() { gameState.reset(); });
  }
};
