function createPopupEvents() {
  var helpLinkEl = document.getElementById('helpLink');
  helpLinkEl.addEventListener('click', function() {
    togglePopup('help');
  }, false);

  var statsLinkEl = document.getElementById('statsLink');
  statsLinkEl.addEventListener('click', function() {
    togglePopup('stats');
  }, false);

  var supportLinkEl = document.getElementById('supportLink');
  supportLinkEl.addEventListener('click', function() {
    togglePopup('support');
  }, false);
}


function togglePopup(id) {
  hidePopups();
  var el = document.getElementById(id);
  var popContainer = document.getElementById('popups');
  el.classList.add("visible");
  popContainer.classList.add("visible");
}

function hidePopups() {
  var pops = document.getElementsByClassName("visible");
  for (var i = 0; i < pops.length; i++) {
    pops[i].classList.remove("visible");
  }
}

var close = document.getElementsByClassName("close-link");
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener('click', hidePopups);
}

var donateMenuItems = document.getElementsByClassName("menu-item");
var donateItems = document.getElementsByClassName("donate-item");
for (var i = 0; i < donateMenuItems.length; i++) {
  donateMenuItems[i].addEventListener('click', toggleDonate);
}

function toggleDonate() {
  var lastMenu = document.getElementsByClassName("selected");
  var rel = this.getAttribute('rel');
  lastMenu[0].classList.remove("selected");
  this.classList.add('selected');
  var visibleCards = document.getElementsByClassName("item-visible");
  visibleCards[0].classList.remove("item-visible");
  donateItems[rel].classList.add('item-visible');
}
