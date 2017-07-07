
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
              <figure class="ie" id="Ireland">
                <img src="assets/img/flags/al.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="gb" id="UK">
                <img src="assets/img/flags/gb.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="no" id="Norway">
                <img src="assets/img/flags/no.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="se" id="Sweden">
                <img src="assets/img/flags/se.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="fi" id="Finland">
                <img src="assets/img/flags/fi.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="ee" id="Estonia">
                <img src="assets/img/flags/ee.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="lv" id="Latvia">
                <img src="assets/img/flags/lv.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="dk" id="Denmark">
                <img src="assets/img/flags/dk.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="nl" id="Netherslands">
                <img src="assets/img/flags/nl.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="be" id="Belgium">
                <img src="assets/img/flags/be.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="fr" id="France">
                <img src="assets/img/flags/fr.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="es" id="Spain">
                <img src="assets/img/flags/es.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="pt" id="Portugal">
                <img src="assets/img/flags/pt.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="it" id="Italy">
                <img src="assets/img/flags/it.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="gr" id="Greece">
                <img src="assets/img/flags/gr.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="al" id="Albania">
                <img src="assets/img/flags/al.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="mk" id="Macedonia">
                <img src="assets/img/flags/mk.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="bg" id="Bulgaria">
                <img src="assets/img/flags/bg.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="me" id="Montenegro">
                <img src="assets/img/flags/me.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="ks" id="Kosovo">
                <img src="assets/img/flags/ks.png" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="ba" id="Bosnia">
                <img src="assets/img/flags/ba.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="rs" id="Servia">
                <img src="assets/img/flags/rs.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="hr" id="Croatia">
                <img src="assets/img/flags/hr.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="si" id="Slovenia">
                <img src="assets/img/flags/si.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="hu" id="Hungary">
                <img src="assets/img/flags/hu.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="ro" id="Romania">
                <img src="assets/img/flags/ro.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="ch" id="Switzerland">
                <img src="assets/img/flags/ch.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="de" id="Germany">
                <img src="assets/img/flags/de.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="at" id="Austria">
                <img src="assets/img/flags/at.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="md" id="Moldavia">
                <img src="assets/img/flags/md.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="ua" id="Ukraine">
                <img src="assets/img/flags/ua.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="by" id="Belorussia">
                <img src="assets/img/flags/by.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="cz" id="Czech Republic">
                <img src="assets/img/flags/cz.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="sk" id="Slovakia">
                <img src="assets/img/flags/sk.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
              <figure class="pl" id="Poland">
                <img src="assets/img/flags/pl.svg" alt="" />
                <figcaption>
                  <span class="dead">0</span>
                </figcaption>
              </figure>
            </div>
            <p>
              Completed surveys: <span id="completed" class="completed">0</span>
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
