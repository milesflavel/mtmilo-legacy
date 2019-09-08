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

  // Cameras
  var cam_1_1 = new SpriteSimple(211, 32, 'img/cameras/1-1.png');
  cam_1_1.tooltip = "Rolleiflex 3.5";
  var cam_1_2 = new SpriteSimple(211, 45, 'img/cameras/1-2.png');
  cam_1_2.tooltip = "Yashica A";
  var cam_1_3 = new SpriteSimple(211, 60, 'img/cameras/1-3.png');
  cam_1_3.tooltip = "Lubitel 166";
  var cam_1_4 = new SpriteSimple(211, 71, 'img/cameras/1-4.png');
  cam_1_4.tooltip = "Yashica 635";
  var cam_1_5 = new SpriteSimple(210, 87, 'img/cameras/1-5.png');
  cam_1_5.tooltip = "Hasselblad 500C";
  var cam_1_6 = new SpriteSimple(209, 99, 'img/cameras/1-6.png');
  cam_1_6.tooltip = "Adox Golf";
  var cam_1_7 = new SpriteSimple(209, 111, 'img/cameras/1-7.png');
  cam_1_7.tooltip = "Kodak Brownie Flash III";
  var cam_1_8 = new SpriteSimple(211, 127, 'img/cameras/1-8.png');
  cam_1_8.tooltip = "Kodak Instamatic 104";
  var cam_1_9 = new SpriteSimple(210, 140, 'img/cameras/1-9.png');
  cam_1_9.tooltip = "Minox 35 EL";
  var cam_1_10 = new SpriteSimple(209, 151, 'img/cameras/1-10.png');
  cam_1_10.tooltip = "Zeiss Ikon Contina";
  var cam_1_11 = new SpriteSimple(210, 164, 'img/cameras/1-11.png');
  cam_1_11.tooltip = "Zenit 12 XP";
  var cam_1_12 = new SpriteSimple(210, 178, 'img/cameras/1-12.png');
  cam_1_12.tooltip = "Minolta X-300";
  var cam_2_1 = new SpriteSimple(225, 36, 'img/cameras/2-1.png');
  cam_2_1.tooltip = "Olympus OM-1";
  var cam_2_2 = new SpriteSimple(225, 49, 'img/cameras/2-2.png');
  cam_2_2.tooltip = "Olympus OM-1";
  var cam_2_3 = new SpriteSimple(225, 62, 'img/cameras/2-3.png');
  cam_2_3.tooltip = "Olympus OM-10";
  var cam_2_4 = new SpriteSimple(225, 75, 'img/cameras/2-4.png');
  cam_2_4.tooltip = "Olympus OM-30";

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

  scene.addChild(cam_1_1);
  scene.addChild(cam_1_2);
  scene.addChild(cam_1_3);
  scene.addChild(cam_1_4);
  scene.addChild(cam_1_5);
  scene.addChild(cam_1_6);
  scene.addChild(cam_1_7);
  scene.addChild(cam_1_8);
  scene.addChild(cam_1_9);
  scene.addChild(cam_1_10);
  scene.addChild(cam_1_11);
  scene.addChild(cam_1_12);
  scene.addChild(cam_2_1);
  scene.addChild(cam_2_2);
  scene.addChild(cam_2_3);
  scene.addChild(cam_2_4);

  scene.addChild(icon1);
  scene.addChild(icon2);
  scene.addChild(icon3);
  scene.addChild(icon4);

  scene.tvscreen = tvscreen;
}
