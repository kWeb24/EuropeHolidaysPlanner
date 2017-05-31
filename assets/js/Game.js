Game = function (canvasSize, config) {
  Phaser.Game.call(this, canvasSize.width, canvasSize.height, Phaser.CANVAS, "game",
    {
      preload: onPreload,
      create: onCreate,
      update: update,
      render: render
    }
  );

  var self = this;

  this.config = config;
  this.bgMap = null;
  this.inputs = null;

  this.hexMap = null;
  this.gameState = null;
  this.soundFx = null;

  function onPreload() {
    self.load.image("map-lg", "assets/img/map-large-dark.jpg");
    self.load.image("tile-marker", "assets/img/marker.png");
    self.load.image("explosion", "assets/img/explosion.png");
    self.load.image("tile-0", "assets/img/hexagon.png");
    self.load.image("tile-1", "assets/img/warning.png");
    self.load.image("point-1", "assets/img/point-1.png");
    self.load.image("point-2", "assets/img/point-2.png");
    self.load.image("point-3", "assets/img/point-3.png");
    self.load.image("point-4", "assets/img/point-4.png");
    self.load.image("point-5", "assets/img/point-5.png");
    self.load.image("point-6", "assets/img/point-6.png");
    self.load.image("empty", "assets/img/hexagon-empty.png");

    self.load.audio('click', 'assets/audio/click.wav');
    self.load.audio('reveal', 'assets/audio/reveal.wav');
    self.load.audio('bomb', 'assets/audio/bomb.wav');
  }

  function onCreate() {
    var gameWidth = 2500;
    var gameHeight = 2128;
    var boundX = (gameWidth - self.camera.width) / -2;
    var boundY = (gameHeight - self.camera.height) / -2;
    self.world.setBounds(boundX, boundY, gameWidth, gameHeight);

    self.canvas.oncontextmenu = function (e) { e.preventDefault(); };
    self.input.mouse.capture = true;
    self.inputs = self.input.keyboard.createCursorKeys();
    // self.time.advancedTiming = true;

    self.bgMap = self.add.image(self.width, self.height, 'map-lg');
    self.bgMap.anchor.setTo(0.5);
    self.bgMap.x = self.world.centerX;
    self.bgMap.y = self.world.centerY;
    
    self.soundFx = new SoundFx(self);
    self.hexMap = new HexMap(self);
    self.gameState = new GameState(self);
  }

  function render() {
    //game.debug.text(game.time.fps, 32, 32, '#FFFFFF');
    //game.debug.cameraInfo(this.game.camera, 32, 52);
    //game.debug.pointer(this.game.input.activePointer);
  }

  function update() {
    if (self.input.activePointer.middleButton.isDown) {
      dragListener();
    } else {
      if (self.inputs.up.isDown) {
        self.camera.y -= 8;
      } else if (self.inputs.down.isDown) {
        self.camera.y += 8;
      }

      if (self.inputs.left.isDown) {
        self.camera.x -= 8;
      } else if (self.inputs.right.isDown) {
        self.camera.x += 8;
      }
    }
  }

  function dragListener() {
    var move = {
      x: self.input.activePointer.position.x - self.input.activePointer.positionDown.x,
      y: self.input.activePointer.position.y - self.input.activePointer.positionDown.y
    };

    var maxSpeed = self.config.drag.maxSpeed;
    if (move.x > maxSpeed) move.x = maxSpeed;
    if (move.x < maxSpeed * -1) move.x = maxSpeed * -1;
    if (move.y > maxSpeed) move.y = maxSpeed;
    if (move.y < maxSpeed * -1) move.y = maxSpeed * -1;

    self.camera.x += move.x;
    self.camera.y += move.y;
  }
};

Game.prototype = Object.create(Phaser.Game.prototype);
Game.prototype.constructor = Game;
