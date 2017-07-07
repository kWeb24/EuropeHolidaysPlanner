
<!DOCTYPE html>
<html>
  <head>
    <title>EuroSapper</title>
    <meta charset="utf-8">
    <meta name="description" content="EuroSapper - the game based on Global Terrorism Index">
    <meta property="og:title" content="EuroSapper">
    <meta property="og:url" content="https://eurosapper.eu/">
    <meta property="og:image" content="https://eurosapper.eu/share.jpg">
    <meta property="og:description" content="EuroSapper - the game based on Global Terrorism Index">
    <meta property="og:site_name" content="EuroSapper">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@KamilWeber">
    <meta name="twitter:creator" content="@KamilWeber">
    <meta name="twitter:title" content="EuroSapper">
    <meta name="twitter:description" content="EuroSapper - the game based on Global Terrorism Index">
    <meta name="twitter:image" content="https://eurosapper.eu/share.jpg">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
    <link href="assets/css/global.css" rel="stylesheet" type="text/css">

  </head>
  <body>
    <div class="app">
      <div class="uibar">
        <div class="container">
          <div class="left">
            EuroSapper
          </div>
          <div class="center">
            Hours alive: <span id="pointsCounter">0</span>
          </div>
          <div class="right">
            <a id="helpLink" href="#">Help</a> | <a id="statsLink" href="#">Stats</a> | <a id="supportLink" href="#">Donate</a> | <a class="github" target="_blank" href="https://github.com/kWeb24/EuropeHolidaysPlanner"><img src="assets/img/github.png" alt="Github" /></a>
          </div>
        </div>
      </div>
      <div id="popups" class="popups">
        <div id="win" class="popup success center">
          <div class="copy">
            <h1>Congratulations!</h1>
            <h2>You have survived the whole journey across Europe</h2>
            <p>
              It's not easy.<br />
              Look at
              <a href="http://economicsandpeace.org/wp-content/uploads/2016/11/Global-Terrorism-Index-2016.2.pdf" target="_blank">Global Terrorism Index</a>
              to learn more.
            </p>
          </div>
          <div class="button">
            <a class="reset" href="#">Try again</a>
          </div>
        </div>
        <div id="loose" class="popup fail center">
          <div class="copy">
            <h1>You lost</h1>
            <h2>You died in <span id="diedat"></span> while traveling Europe.</h2>
            <p>
              We have a hard time.<br />
              Look at
              <a href="http://economicsandpeace.org/wp-content/uploads/2016/11/Global-Terrorism-Index-2016.2.pdf" target="_blank">Global Terrorism Index</a>
              to learn more.
            </p>
          </div>
          <div class="button">
            <a class="reset" href="#">Try again</a>
          </div>
        </div>
        <div id="help" class="popup help">
          <div class="copy">
            <h1>Help</h1>
            <p>
              Terrorism in Europe is a serious problem. Try to visit the whole continent. The game is an implementation of a well-known sapper.
            </p>
            <p>
              In case you did not know the rules:<br />
              - You have to reveal the board areas and avoid mines. (LMB)<br />
              - The number on revealed areas indicates the number of mines in adjacent tiles.<br />
              - Flag field marking (RMB) is protected against exposure.
            </p>
            <p>
              Use arrows or MMB for moving the camera.
            </p>
            <p>
              The probability of bombs appearing on tiles of a given country depends on the terrorist threat assessment in that country.
            </p>
            <p>
              To learn more about terrorism look at
              <a href="http://economicsandpeace.org/wp-content/uploads/2016/11/Global-Terrorism-Index-2016.2.pdf" target="_blank">Global Terrorism Index</a>
            </p>
            <p>
              Graphics thanks to <a href="http://freepik.com" target="_blank">Freepik.com</a>
            </p>
          </div>
          <div class="button">
            <a class="close-link" href="#">Play</a>
          </div>
          <div class="close">
            <a href="#" class="close-link">
              <img src="assets/img/close.png" alt="Close" />
            </a>
          </div>
        </div>
        <div id="support" class="popup support center">
          <div class="copy">
            <h1>Support</h1>
            <p>
              If you like it - send me a beer! Thanks!
            </p>
            <div class="donate-tabs">
              <ul>
                <li class="menu-item selected" rel="0">
                  BTC
                </li>
                <li class="menu-item" rel="1">
                  ETH
                </li>
                <li class="menu-item" rel="2">
                  DSH
                </li>
                <li class="menu-item" rel="3">
                  LTC
                </li>
                <li class="menu-item" rel="4">
                  ZEC
                </li>
                <li class="menu-item" rel="5">
                  DGE
                </li>
              </ul>
              <div class="donate-item btc item-visible">
                <figure class="crypto">
                  <img src="assets/img/qr/btc-1Jj89RVdXrsr6AxHeb5zQH7ZDeMweUTTPi.png" alt="1Jj89RVdXrsr6AxHeb5zQH7ZDeMweUTTPi" />
                  <figcaption>
                    <span class="dead">1Jj89RVdXrsr6AxHeb5zQH7ZDeMweUTTPi</span>
                  </figcaption>
                </figure>
              </div>
              <div class="donate-item eth">
                <figure class="crypto">
                  <img src="assets/img/qr/eth-0xe10b30ad69bd0f10ea7e20865dfe63a6a42edcc7.png" alt="0xe10b30ad69bd0f10ea7e20865dfe63a6a42edcc7" />
                  <figcaption>
                    <span class="dead">0xe10b30ad69bd0f10ea7e20865dfe63a6a42edcc7</span>
                  </figcaption>
                </figure>
              </div>
              <div class="donate-item dsh">
                <figure class="crypto">
                  <img src="assets/img/qr/dsh-XmqeV66PSexcWBdwW3vLhQ7QKDKLXGJnSq.png" alt="XmqeV66PSexcWBdwW3vLhQ7QKDKLXGJnSq" />
                  <figcaption>
                    <span class="dead">XmqeV66PSexcWBdwW3vLhQ7QKDKLXGJnSq</span>
                  </figcaption>
                </figure>
              </div>
              <div class="donate-item ltc">
                <figure class="crypto">
                  <img src="assets/img/qr/ltc-LV9jHByTf3y4KdyGrcfU13zty4csBqf84W.png" alt="LV9jHByTf3y4KdyGrcfU13zty4csBqf84W" />
                  <figcaption>
                    <span class="dead">LV9jHByTf3y4KdyGrcfU13zty4csBqf84W</span>
                  </figcaption>
                </figure>
              </div>
              <div class="donate-item zec">
                <figure class="crypto">
                  <img src="assets/img/qr/zec-t1UYRixUGKWdpvaTzyGwJxPcQbKXU7LhCzc.png" alt="t1UYRixUGKWdpvaTzyGwJxPcQbKXU7LhCzc" />
                  <figcaption>
                    <span class="dead">t1UYRixUGKWdpvaTzyGwJxPcQbKXU7LhCzc</span>
                  </figcaption>
                </figure>
              </div>
              <div class="donate-item dge">
                <figure class="crypto">
                  <img src="assets/img/qr/dge-DTkrua88C6phFbgQ245PAdPu4rjwXddBwi.png" alt="DTkrua88C6phFbgQ245PAdPu4rjwXddBwi" />
                  <figcaption>
                    <span class="dead">DTkrua88C6phFbgQ245PAdPu4rjwXddBwi</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="button">
            <a class="close-link" href="#">Play</a>
          </div>
          <div class="close">
            <a href="#" class="close-link">
              <img src="assets/img/close.png" alt="Close" />
            </a>
          </div>
        </div>
        <div id="stats" class="popup stats center">
          <div class="copy">
            <h1>List of dead travelers.</h1>
            <div class="flags">
              <figure class="ie">
                <img src="assets/img/flags/al.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Ireland">0</span>
                </figcaption>
              </figure>
              <figure class="gb">
                <img src="assets/img/flags/gb.svg" alt="" />
                <figcaption>
                  <span class="dead" id="UK">0</span>
                </figcaption>
              </figure>
              <figure class="no">
                <img src="assets/img/flags/no.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Norway">0</span>
                </figcaption>
              </figure>
              <figure class="se">
                <img src="assets/img/flags/se.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Sweden">0</span>
                </figcaption>
              </figure>
              <figure class="fi">
                <img src="assets/img/flags/fi.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Finland">0</span>
                </figcaption>
              </figure>
              <figure class="ee">
                <img src="assets/img/flags/ee.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Estonia">0</span>
                </figcaption>
              </figure>
              <figure class="lv">
                <img src="assets/img/flags/lv.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Latvia">0</span>
                </figcaption>
              </figure>
              <figure class="dk">
                <img src="assets/img/flags/dk.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Denmark">0</span>
                </figcaption>
              </figure>
              <figure class="nl">
                <img src="assets/img/flags/nl.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Netherslands">0</span>
                </figcaption>
              </figure>
              <figure class="be">
                <img src="assets/img/flags/be.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Belgium">0</span>
                </figcaption>
              </figure>
              <figure class="fr">
                <img src="assets/img/flags/fr.svg" alt="" />
                <figcaption>
                  <span class="dead" id="France">0</span>
                </figcaption>
              </figure>
              <figure class="es">
                <img src="assets/img/flags/es.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Spain">0</span>
                </figcaption>
              </figure>
              <figure class="pt">
                <img src="assets/img/flags/pt.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Portugal">0</span>
                </figcaption>
              </figure>
              <figure class="it">
                <img src="assets/img/flags/it.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Italy">0</span>
                </figcaption>
              </figure>
              <figure class="gr">
                <img src="assets/img/flags/gr.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Greece">0</span>
                </figcaption>
              </figure>
              <figure class="al">
                <img src="assets/img/flags/al.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Albania">0</span>
                </figcaption>
              </figure>
              <figure class="mk">
                <img src="assets/img/flags/mk.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Macedonia">0</span>
                </figcaption>
              </figure>
              <figure class="bg">
                <img src="assets/img/flags/bg.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Bulgaria">0</span>
                </figcaption>
              </figure>
              <figure class="me">
                <img src="assets/img/flags/me.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Montenegro">0</span>
                </figcaption>
              </figure>
              <figure class="ks">
                <img src="assets/img/flags/ks.png" alt="" />
                <figcaption>
                  <span class="dead" id="Kosovo">0</span>
                </figcaption>
              </figure>
              <figure class="ba">
                <img src="assets/img/flags/ba.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Bosnia">0</span>
                </figcaption>
              </figure>
              <figure class="rs">
                <img src="assets/img/flags/rs.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Servia">0</span>
                </figcaption>
              </figure>
              <figure class="hr">
                <img src="assets/img/flags/hr.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Croatia">0</span>
                </figcaption>
              </figure>
              <figure class="si">
                <img src="assets/img/flags/si.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Slovenia">0</span>
                </figcaption>
              </figure>
              <figure class="hu">
                <img src="assets/img/flags/hu.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Hungary">0</span>
                </figcaption>
              </figure>
              <figure class="ro">
                <img src="assets/img/flags/ro.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Romania">0</span>
                </figcaption>
              </figure>
              <figure class="ch">
                <img src="assets/img/flags/ch.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Switzerland">0</span>
                </figcaption>
              </figure>
              <figure class="de">
                <img src="assets/img/flags/de.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Germany">0</span>
                </figcaption>
              </figure>
              <figure class="at">
                <img src="assets/img/flags/at.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Austria">0</span>
                </figcaption>
              </figure>
              <figure class="md">
                <img src="assets/img/flags/md.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Moldavia">0</span>
                </figcaption>
              </figure>
              <figure class="ua">
                <img src="assets/img/flags/ua.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Ukraine">0</span>
                </figcaption>
              </figure>
              <figure class="by">
                <img src="assets/img/flags/by.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Belorussia">0</span>
                </figcaption>
              </figure>
              <figure class="cz">
                <img src="assets/img/flags/cz.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Czech-Republic">0</span>
                </figcaption>
              </figure>
              <figure class="sk">
                <img src="assets/img/flags/sk.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Slovakia">0</span>
                </figcaption>
              </figure>
              <figure class="pl">
                <img src="assets/img/flags/pl.svg" alt="" />
                <figcaption>
                  <span class="dead" id="Poland">0</span>
                </figcaption>
              </figure>
            </div>
            <p>
              Surveys started: <span id="started" class="started">0</span> |
              Completed surveys: <span id="completed" class="completed">0</span> |
              Total deaths: <span id="deaths" class="deaths">0</span>
            </p>
            <p>
              To learn more about terrorism look at
              <a href="http://economicsandpeace.org/wp-content/uploads/2016/11/Global-Terrorism-Index-2016.2.pdf" target="_blank">Global Terrorism Index</a>
            </p>
          </div>
          <div class="button">
            <a class="close-link" href="#">Play</a>
          </div>
          <div class="close">
            <a href="#" class="close-link">
              <img src="assets/img/close.png" alt="Close" />
            </a>
          </div>
        </div>
      </div>
      <div class="effects">
        <canvas id="effects" class="fireworks"></canvas>
      </div>
      <div id="game" class="game">
      </div>
    </div>

    <script type="text/javascript" src="assets/js/request.js"></script>
    <script type="text/javascript" src="assets/js/anime.min.js"></script>
    <script type="text/javascript" src="assets/js/fireworks.js"></script>
    <script type="text/javascript" src="assets/js/phaser.min.js"></script>
    <script type="text/javascript" src="assets/js/Game.js"></script>
    <script type="text/javascript" src="assets/js/HexMap.js"></script>
    <script type="text/javascript" src="assets/js/GameState.js"></script>
    <script type="text/javascript" src="assets/js/mapping.js"></script>
    <script type="text/javascript" src="assets/js/hexagon.js"></script>
    <script type="text/javascript" src="assets/js/utils.js"></script>
    <script type="text/javascript" src="assets/js/SoundFx.js"></script>
    <script type="text/javascript" src="assets/js/main.js"></script>

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-102201318-1', 'auto');
      ga('send', 'pageview');

    </script>

  </body>
</html>
