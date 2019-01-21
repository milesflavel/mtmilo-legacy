function createSceneObjects(){
  var background = new SpriteSimple(0, 0, 'img/background.png');

  var tv = new SpriteSimple(107, 63, 'img/tv.png');
  var tvscreen = new SpriteAnimated(109, 65, ['img/tv-off.png', 'img/tv-lessthanthree.png', 'img/tv-twitch.png', 'img/tv-twitter.png', 'img/tv-instagram.png', 'img/tv-usa.png']);

  var map = new SpriteSimple(107, 28, 'img/map.png')
  map.click = function(){
    var placeSynonyms = ['Places', 'States', 'Areas', 'Cities', 'Communities', 'Corners', 'Districts', 'Fields', 'Neighborhoods', 'Parts', 'Points', 'Regions', 'Sites', 'Spots', 'Towns', 'Venues', 'Villages', 'Zones', 'Habitats', 'Latitudes', 'Locales', 'Localities', 'Longitudes', 'Niches', 'Nooks', 'Sections', 'Suburbs', 'Vicinities', 'Whereabouts'];
    var seenSynonyms = ['seen', 'been', 'examined', 'looked at', 'noticed', 'observed', 'regarded', 'spotted', 'viewed', 'watched', 'witnessed', 'contemplated', 'eyed off', 'gawked at', 'gazed upon', 'glimpsed', 'inspected', 'marked', 'minded', 'noted', 'peeked into', 'peered at', 'scoped out', 'scrutinized', 'stared at', 'surveyed', 'layed eyes on', 'taken notice of']
    var title = placeSynonyms[Math.floor(Math.random() * Math.floor(placeSynonyms.length))] + " I've " + seenSynonyms[Math.floor(Math.random() * Math.floor(seenSynonyms.length))];
    scene.addChild(new OverlayImage(title, 'img/overlay-map.png'));
  };
  map.tvframe = 5;
  map.tooltip = "USA Adventures";

  var n64 = new SpriteSimple(145, 122, 'img/n64.png');

  var norseboard = new SpriteSimple(38, 104, 'img/norseboard.png');
  norseboard.click = function(){
    // Page 1
    var nb1 = new OverlaySimple("Norseboard (1/2)");
    nb1.addChild(new ImageSimple(12, 12, 'img/overlay-norseboard.png'));

    // Page 2
    var nb2 = new OverlaySimple("Norseboard (2/2)");
    nb2.addChild(new TextSimple(68, 30, "The Original All-in-One"));
    nb2.addChild(new TextSimple(24, 80, "A portable keyboard, computer & gamepad for on-the-go hacking and fractal design.", 170, 140));
    nb2.addChild(new ImageSimple(200, 90, 'img/norseboard-render-1.png'));

    // Page 3
    var nb3 = new OverlaySimple("Norseboard (3/3)");
    nb3.addChild(new TextSimple(30, 30, "Ground Zero: Where it all began"));
    nb3.addChild(new TextSimple(30, 54, "The project that cut my teeth"));

    var norseboardOverlay = new OverlayPaginated([nb1, nb2]);

    scene.addChild(norseboardOverlay);
  }
  norseboard.tooltip = "Norseboard";

  var videosphere = new SpriteSimple(73, 80, 'img/videosphere.png');

  var projecttoon = new SpriteSimple(37, 129, 'img/projecttoon.png');
  projecttoon.tooltip = "Project T.O.O.N.";

  var icon1 = new SpriteSimple(41, 33, 'img/icon-youtube.png');
  icon1.click = function(){
    navigate('https://www.youtube.com/milesflavel', true);
  };
  icon1.tvframe = 1;
  icon1.tooltip = "My Milo Show (YouTube)";

  var icon2 = new SpriteSimple(77, 33, 'img/icon-twitch.png');
  icon2.click = function(){
    navigate('https://www.twitch.tv/mtmilo', true);
  };
  icon2.tvframe = 2;
  icon2.tooltip = "Twitch Stream";

  var icon3 = new SpriteSimple(43, 59, 'img/icon-twitter.png');
  icon3.click = function(){
    navigate('https://twitter.com/MilesFlavel', true);
  };
  icon3.tvframe = 3;
  icon3.tooltip = "Milo on Twitter";

  var icon4 = new SpriteSimple(76, 56, 'img/icon-instagram.png');
  icon4.click = function(){
    navigate('https://instagram.com/milesflavel', true);
  };
  icon4.tvframe = 4;
  icon4.tooltip = "Instagram";

  scene.addChild(background);
  scene.addChild(map);
  scene.addChild(tv);
  scene.addChild(tvscreen);
  scene.addChild(n64);
  scene.addChild(norseboard);
  scene.addChild(videosphere);
  scene.addChild(projecttoon);

  scene.addChild(icon1);
  scene.addChild(icon2);
  scene.addChild(icon3);
  scene.addChild(icon4);

  scene.tvscreen = tvscreen;
}
