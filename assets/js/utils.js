function createPopupEvents() {
  var helpLinkEl = document.getElementById('helpLink');
  helpLinkEl.addEventListener('click', function() {
    togglePopup('help');
  }, false);

  var statsLinkEl = document.getElementById('statsLink');
  statsLinkEl.addEventListener('click', function() {
    var target = statsLinkEl.getAttribute("href");
    togglePopup('stats');
  }, false);  
}

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
