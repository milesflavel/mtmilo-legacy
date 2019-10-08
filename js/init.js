function createSceneObjects(){
  var viewSouth = createViewSouth();
  var viewWest = createViewWest();

  var navigation = new NavigationSimple([viewSouth, viewWest]);

  scene.addChild(navigation);
}

function createViewSouth(){
    var view = new Entity(0, 0);

    var background = new SpriteSimple(0, 0, 'img/background-1.png');
    var moustache = new SpriteSimple(176, 4, 'img/moustache.png');
    moustache.tooltip = "Giant Moustache Mask";
    var camerashelves = new SpriteSimple(205, 30, 'img/camerashelves.png');
    var bookshelves = new SpriteSimple(32, 24, 'img/bookshelves.png');

    var tv = new SpriteSimple(107, 63, 'img/tv.png');
    var tvscreen = new SpriteAnimated(109, 65, ['img/tv-off.png', 'img/tv-lessthanthree.png', 'img/tv-twitch.png', 'img/tv-twitter.png', 'img/tv-instagram.png', 'img/tv-usa.png', 'vid/n64.mp4']);

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
    n64.tvframe = 6;

    var norseboard = new SpriteSimple(38, 104, 'img/norseboard.png');
    norseboard.click = function(){
      // Page 1
      var nb1 = new OverlaySimple();
      nb1.addChild(new ImageSimple(12, 12, 'img/overlay-norseboard.png'));

      // Page 2
      var nb2 = new OverlaySimple();
      nb2.addChild(new TextSimple(68, 30, "The Original All-in-One"));
      nb2.addChild(new TextSimple(24, 80, "A portable keyboard, computer & gamepad for on-the-go hacking and fractal design.", 170, 140));
      nb2.addChild(new ImageSimple(200, 90, 'img/norseboard-render-1.png'));

      // Page 3
      var nb3 = new OverlaySimple();
      nb3.addChild(new TextSimple(30, 30, "Ground Zero: Where it all began"));
      nb3.addChild(new TextSimple(30, 54, "The project that cut my teeth"));

      var norseboardOverlay = new OverlayPaginated("Norseboard", [nb1, nb2]);

      scene.addChild(norseboardOverlay);
    }
    norseboard.tooltip = "Norseboard";

    var videosphere = new SpriteSimple(73, 80, 'img/videosphere.png');

    var projecttoon = new SpriteSimple(37, 129, 'img/projecttoon.png');
    projecttoon.tooltip = "Project T.O.O.N.";

    view.addChild(background);
    view.addChild(moustache);
    view.addChild(camerashelves);
    view.addChild(bookshelves);
    view.addChild(map);
    view.addChild(tv);
    view.addChild(n64);
    view.addChild(norseboard);
    view.addChild(videosphere);
    view.addChild(projecttoon);

    addCameras(view);
    addSocialIcons(view);

    view.addChild(shadowOverlay);

    view.addChild(tvscreen);

    scene.tvscreen = tvscreen;

    return view;
}

function createViewWest(){
    var view = new Entity(0, 0);
    var background = new SpriteSimple(0, 0, 'img/background-2.png');
    view.addChild(background);
    var door = new SpriteSimple(160, 34, 'img/door.png');
    view.addChild(door);
    var wardrobe = new SpriteSimple(238, 32, 'img/wardrobe.png');
    view.addChild(wardrobe);
    var desk = new SpriteSimple(233, 160, 'img/desk.png');
    view.addChild(desk);

    var lightSwitch = new SpriteSimple(161, 77, 'img/lightswitch.png');
    lightSwitch.click = function(){
      if (shadowOverlay.visible)
        shadowOverlay.hide();
      else
        shadowOverlay.show();
    }
    view.addChild(lightSwitch);

    view.addChild(shadowOverlay);

    return view;
}

var shadowOverlay = new RectangleSimple(0, 0, canvas.width, canvas.height, "#0009");
shadowOverlay.hide();

// Cameras
function addCameras(parent){
  addCamera(parent, 211, 32,  1, 1,  "Rolleiflex 3.5")
  addCamera(parent, 211, 45,  1, 2,  "Yashica A")
  addCamera(parent, 211, 60,  1, 3,  "Lubitel 166")
  addCamera(parent, 211, 71,  1, 4,  "Yashica 635");
  addCamera(parent, 210, 87,  1, 5,  "Hasselblad 500C");
  addCamera(parent, 209, 99,  1, 6,  "Adox Golf");
  addCamera(parent, 209, 111, 1 ,7,  "Kodak Brownie Flash III");
  addCamera(parent, 211, 127, 1, 8,  "Kodak Instamatic 104");
  addCamera(parent, 210, 140, 1, 9,  "Minox 35 EL");
  addCamera(parent, 209, 151, 1, 10, "Zeiss Ikon Contina");
  addCamera(parent, 210, 164, 1, 11, "Zenit 12 XP");
  addCamera(parent, 210, 178, 1, 12, "Minolta X-300");
  addCamera(parent, 225, 36,  2, 1,  "Olympus OM-1");
  addCamera(parent, 225, 49,  2, 2,  "Olympus OM-1");
  addCamera(parent, 225, 62,  2, 3,  "Olympus OM-10");
  addCamera(parent, 225, 75,  2, 4,  "Olympus OM-30");
}

function addCamera(parent, x, y, column, row, tooltip){
  var camera = new SpriteSimple(x, y, 'img/cameras/' + column + '-' + row + '.png');
  camera.tooltip = tooltip;
  parent.addChild(camera);
}

// Social media
function addSocialIcons(parent){
  addSocialIcon(parent, 41, 33, 1, 'youtube', 'https://www.youtube.com/milesflavel', "My Milo Show (YouTube)")
  addSocialIcon(parent, 77, 33, 2, 'twitch', 'https://www.twitch.tv/mtmilo', "Twitch Stream")
  addSocialIcon(parent, 43, 59, 3, 'twitter', 'https://twitter.com/MilesFlavel', "Milo on Twitter")
  addSocialIcon(parent, 76, 56, 4, 'instagram', 'https://instagram.com/milesflavel', "Instagram")
}

function addSocialIcon(parent, x, y, tvframe, name, url, tooltip){
  var icon = new SpriteSimple(x, y, 'img/icon-' + name + '.png');
  icon.click = function(){
    navigate(url, true);
  };
  icon.tvframe = tvframe;
  icon.tooltip = tooltip;
  parent.addChild(icon);
}
