var scene, lastTimestamp;

// Function to initiate the scene and begin the draw routine
function init(){
  scene = new Scene();
  png_font.setup(scene.context, "img/unifont.png");

  var background = new SpriteSimple(0, 0, 'img/background.png');

  var tv = new SpriteSimple(107, 63, 'img/tv.png');
  var tvscreen = new SpriteAnimated(109, 65, ['img/tv-off.png', 'img/tv-lessthanthree.png', 'img/tv-twitch.png', 'img/tv-instagram.png', 'img/tv-twitter.png', 'img/tv-usa.png']);
  tvscreen.click = function(){
    navigate('https://www.youtube.com/milesflavel', true);
  };
  tvscreen.tvframe = 1;
  tvscreen.tooltip = "My Milo Show (YouTube)";
  scene.tvscreen = tvscreen;

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

  frameCount = 0;
  then = Date.now();
  startTime = then;
  draw();
}

// Update the state of the scene, draw the result and call the next animation frame
function draw(timestamp){
  scene.checkMouseover();
  scene.update();
  scene.render();

  if (scene.mouseover){
    scene.tvscreen.frame = scene.mouseover.tvframe;
    png_font.drawText(scene.mouseover.tooltip, [(40-scene.mouseover.tooltip.length)/2*8, 0], "white");
  }

  if (scene.showFPS){
    png_font.drawText(Math.floor(1000/(timestamp - lastTimestamp)).toString(), [5, 0], "white");
  }
  lastTimestamp = timestamp;

  requestAnimationFrame(draw);
}

// Creates an anchor element and immediately navigates to it
function navigate(href, newTab){
   var a = document.createElement('a');
   a.href = href;
   if (newTab) {
      a.setAttribute('target', '_blank');
   }
   document.body.appendChild(a);
   a.click();
}

// Begin everything
window.onload = init();
