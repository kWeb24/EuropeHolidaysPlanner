window.onload = function() {
  fireworks.setCanvasSize();

  var canvasSize = {
    width: document.getElementById('game').getBoundingClientRect().width,
    height: document.getElementById('game').getBoundingClientRect().height
  };

  var config = {
    hexSize: { width: 24, height: 26 },
    gridSize: { width: 205, height: 110 },
    drag: {
      maxSpeed: 25
    }
  };

	var game = new Game(canvasSize, config);

  createPopupEvents();

  var resetButton = document.getElementsByClassName("reset");
  for (var i = 0; i < resetButton.length; i++) {
    resetButton[i].addEventListener('click', function() { game.gameState.reset(); });
  }

  getStats();
  getCompleted();
  getTotal();
};
