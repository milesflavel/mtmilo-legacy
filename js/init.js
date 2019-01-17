function createSceneObjects(){
  var background = new SpriteSimple(0, 0, 'img/background.png');

  var tv = new SpriteSimple(107, 63, 'img/tv.png');
  var tvscreen = new SpriteAnimated(109, 65, ['img/tv-off.png', 'img/tv-lessthanthree.png', 'img/tv-twitch.png', 'img/tv-instagram.png', 'img/tv-twitter.png', 'img/tv-usa.png']);
  tvscreen.click = function(){
    navigate('https://www.youtube.com/milesflavel', true);
  };
  tvscreen.tvframe = 1;
  tvscreen.tooltip = "My Milo Show (YouTube)";

  var map = new SpriteSimple(107, 28, 'img/map.png')
  map.click = function(){
    scene.showOverlay('img/overlay-map.png');
  };
  map.tvframe = 5;
  map.tooltip = "USA Adventures";

  var n64 = new SpriteSimple(145, 122, 'img/n64.png');
  n64.click = function(){
    navigate('https://www.twitch.tv/mtmilo', true);
  };
  n64.tvframe = 2;
  n64.tooltip = "Livestream";

  var videosphere = new SpriteSimple(73, 80, 'img/videosphere.png');
  videosphere.click = function(){
    navigate('https://instagram.com/milesflavel', true);
  };
  videosphere.tvframe = 3;
  videosphere.tooltip = "Instagram";

  scene.objects.push(background);
  scene.objects.push(map);
  scene.objects.push(tv);
  scene.objects.push(tvscreen);
  scene.objects.push(n64);
  scene.objects.push(videosphere);
  scene.tvscreen = tvscreen;
}
