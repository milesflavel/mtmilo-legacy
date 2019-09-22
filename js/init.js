function createSceneObjects(){
  var background = new SpriteSimple(0, 0, 'img/background.png');
  var moustache = new SpriteSimple(176, 4, 'img/moustache.png');
  moustache.tooltip = "Giant Moustache Mask";
  var camerashelves = new SpriteSimple(205, 30, 'img/camerashelves.png');
  var bookshelves = new SpriteSimple(32, 24, 'img/bookshelves.png');

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

  scene.addChild(background);
  scene.addChild(moustache);
  scene.addChild(camerashelves);
  scene.addChild(bookshelves);
  scene.addChild(map);
  scene.addChild(tv);
  scene.addChild(tvscreen);
  scene.addChild(n64);
  scene.addChild(norseboard);
  scene.addChild(videosphere);
  scene.addChild(projecttoon);

  addCameras();
  addSocialIcons();

  scene.tvscreen = tvscreen;
}

// Cameras
function addCameras(){
  addCamera(211, 32,  1, 1,  "Rolleiflex 3.5")
  addCamera(211, 45,  1, 2,  "Yashica A")
  addCamera(211, 60,  1, 3,  "Lubitel 166")
  addCamera(211, 71,  1, 4,  "Yashica 635");
  addCamera(210, 87,  1, 5,  "Hasselblad 500C");
  addCamera(209, 99,  1, 6,  "Adox Golf");
  addCamera(209, 111, 1 ,7,  "Kodak Brownie Flash III");
  addCamera(211, 127, 1, 8,  "Kodak Instamatic 104");
  addCamera(210, 140, 1, 9,  "Minox 35 EL");
  addCamera(209, 151, 1, 10, "Zeiss Ikon Contina");
  addCamera(210, 164, 1, 11, "Zenit 12 XP");
  addCamera(210, 178, 1, 12, "Minolta X-300");
  addCamera(225, 36,  2, 1,  "Olympus OM-1");
  addCamera(225, 49,  2, 2,  "Olympus OM-1");
  addCamera(225, 62,  2, 3,  "Olympus OM-10");
  addCamera(225, 75,  2, 4,  "Olympus OM-30");
}

function addCamera(x, y, column, row, tooltip){
  var camera = new SpriteSimple(x, y, 'img/cameras/' + column + '-' + row + '.png');
  camera.tooltip = tooltip;
  scene.addChild(camera);
}

// Social media
function addSocialIcons(){
  addSocialIcon(41, 33, 1, 'youtube', 'https://www.youtube.com/milesflavel', "My Milo Show (YouTube)")
  addSocialIcon(77, 33, 2, 'twitch', 'https://www.twitch.tv/mtmilo', "Twitch Stream")
  addSocialIcon(43, 59, 3, 'twitter', 'https://twitter.com/MilesFlavel', "Milo on Twitter")
  addSocialIcon(76, 56, 4, 'instagram', 'https://instagram.com/milesflavel', "Instagram")
}

function addSocialIcon(x, y, tvframe, name, url, tooltip){
  var icon = new SpriteSimple(x, y, 'img/icon-' + name + '.png');
  icon.click = function(){
    navigate(url, true);
  };
  icon.tvframe = tvframe;
  icon.tooltip = tooltip;
  scene.addChild(icon);
}
