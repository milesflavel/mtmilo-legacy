// Scene is the main object that handles everything
function Scene(){
  // Properties
  this.canvas = document.getElementById('canvas');
  this.context = this.canvas.getContext('2d');
  this.context.fillStyle = "#fff";
  this.objects = new Array();
  this.showFPS = false;

  this.mouseX = 0;
  this.mouseY = 0;
  this.mouseover = null;

  // Methods
  this.render = function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.objects.length; i++){
      this.objects[i].render(this.context);
    }
    this.drawCursor();
  };

  this.update = function(){
    for (var i = 0; i < this.objects.length; i++){
      this.objects[i].update();
    }
  };

  this.checkMouseover = function(){
    this.mouseover = null;
    for (var i = 0; i < this.objects.length; i++){
      if (this.objects[i].checkMouseover(this.mouseX, this.mouseY)){
        if (this.mouseover) {
          this.mouseover.mouseover = false;
        }
        this.mouseover = this.objects[i];
        this.mouseover.mouseover = true;
      }
      else{
        this.objects[i].mouseover = false;
      }
    }
  };

  this.setCursorPos = function(x, y){
    var rect = canvas.getBoundingClientRect();
    var sx = canvas.scrollWidth / canvas.width;
    var sy = canvas.scrollHeight / canvas.height;
    this.mouseX = Math.floor((x - rect.left) / sx);
    this.mouseY = Math.floor((y - rect.top) /sy);
  }

  this.drawCursor = function(){
    this.context.fillRect(this.mouseX, this.mouseY, 1, 1);
    this.context.fillRect(this.mouseX + 2, this.mouseY, 3, 1);
    this.context.fillRect(this.mouseX, this.mouseY + 2, 1, 3);
    this.context.fillRect(this.mouseX - 1, this.mouseY, -3, 1);
    this.context.fillRect(this.mouseX, this.mouseY - 1, 1, -3);
  };

  this.showOverlay = function(imagePath){
    var overlay = new SpriteSimple(0, 0, imagePath);
    this.objects.push(overlay);

    var closeButton = new SpriteSimple(300, 2, 'img/overlay-button-close.png');
    closeButton.click = function(){
      scene.objects.pop();
      scene.objects.pop();
    };
    this.objects.push(closeButton);
  };

  // Listeners
  this.canvas.addEventListener('mousemove', function(evt){
    scene.setCursorPos(evt.clientX, evt.clientY);
  }, false);

  this.canvas.addEventListener('touchmove', function(evt){
    evt.preventDefault();
    scene.setCursorPos(evt.touches[0].clientX, evt.touches[0].clientY);
  }, false);

  this.canvas.addEventListener('mouseup', function(evt){
    scene.setCursorPos(evt.clientX, evt.clientY);
    scene.checkMouseover();
    if (scene.mouseover)
      scene.mouseover.click();
  });
}
