var version = 9;
var scene, lastTimestamp;

// Function to initiate the scene and begin the draw routine
function init(){
  // Create the scene object
  scene = new Scene();

  // Initialize png-font for text rendering
  png_font.setup(scene.context, "img/unifont.png");

  // Add event listeners to the scene
  scene.canvas.addEventListener('mousemove', function(evt){
    scene.setCursorPos(evt.clientX, evt.clientY);
  }, false);

  scene.canvas.addEventListener('touchmove', function(evt){
    if (event.touches.length == 1){
      evt.preventDefault();
      scene.setCursorPos(evt.touches[0].clientX, evt.touches[0].clientY);
    }
  }, false);

  scene.canvas.addEventListener('mouseup', function(evt){
    var mouseoverCurrent = scene.mouseover;
    scene.setCursorPos(evt.clientX, evt.clientY);
    scene.checkMouseover();
    if (scene.mouseover && mouseoverCurrent == scene.mouseover)
      scene.mouseover.click();
  });

  // Add objects to the scene
  createSceneObjects();

  // Start the draw routine
  draw();
}

// Update the state of the scene, draw the result and call the next animation frame
function draw(timestamp){
  scene.checkMouseover();
  scene.update();
  scene.render();

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
