function createSceneObjects(){
  var background = new SpriteSimple(0, 0, 'img/background.png');

  var tv = new SpriteSimple(107, 63, 'img/tv.png');
  var tvscreen = new SpriteAnimated(109, 65, ['img/tv-off.png', 'img/tv-lessthanthree.png', 'img/tv-twitch.png', 'img/tv-twitter.png', 'img/tv-instagram.png', 'img/tv-usa.png']);

  var map = new SpriteSimple(107, 28, 'img/map.png')
  map.click = function(){
    scene.showOverlay('img/overlay-map.png');
  };
  map.tvframe = 5;
  map.tooltip = "USA Adventures";

  var n64 = new SpriteSimple(145, 122, 'img/n64.png');

  var videosphere = new SpriteSimple(73, 80, 'img/videosphere.png');

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
  scene.addChild(videosphere);

  scene.addChild(icon1);
  scene.addChild(icon2);
  scene.addChild(icon3);
  scene.addChild(icon4);

  scene.tvscreen = tvscreen;
}
