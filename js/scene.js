// Scene is the main object that handles everything
function Scene(){
  // Properties
  this.canvas = document.getElementById('canvas');
  this.context = this.canvas.getContext('2d');
  this.context.fillStyle = "#fff";
  this.children = new Array();
  this.showFPS = false;

  this.mouseX = 0;
  this.mouseY = 0;
  this.mouseover = null;

  // Methods
  this.addChild = function(object){
    object.parent = this;
    this.children.push(object);
  };

  this.render = function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.children.length; i++){
      this.children[i].render(this.context);
    }
    this.drawCursor();
  };

  this.update = function(){
    for (var i = 0; i < this.children.length; i++){
      this.children[i].update();
    }
  };

  this.checkMouseover = function(){
    this.mouseover = null;
    for (var i = 0; i < this.children.length; i++){
      if (this.children[i].checkMouseover(this.mouseX, this.mouseY)){
        if (this.mouseover) {
          this.mouseover.mouseover = false;
        }
        this.mouseover = this.children[i];
        this.mouseover.mouseover = true;
      }
      else{
        this.children[i].mouseover = false;
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
    this.context.fillStyle = "white";
    this.context.fillRect(this.mouseX, this.mouseY, 1, 1);
    this.context.fillRect(this.mouseX + 2, this.mouseY, 3, 1);
    this.context.fillRect(this.mouseX, this.mouseY + 2, 1, 3);
    this.context.fillRect(this.mouseX - 1, this.mouseY, -3, 1);
    this.context.fillRect(this.mouseX, this.mouseY - 1, 1, -3);
  };

  this.drawTooltip = function(tooltip){
    var leftBound = (40-tooltip.length)/2*8;
    var pixelLength = tooltip.length*8;
    scene.context.fillStyle = "black";
    scene.context.fillRect(leftBound-4, 0, pixelLength+8, 19);
    scene.context.fillStyle = "white";
    scene.context.fillRect(leftBound-3, 0, pixelLength+6, 18);
    png_font.drawText(tooltip, [leftBound, 0], "black");
  };

  this.showOverlay = function(imagePath){
    var overlay = new SpriteSimple(0, 0, imagePath);
    this.addChild(overlay);

    var closeButton = new SpriteSimple(300, 3, 'img/overlay-button-close.png');
    closeButton.click = function(){
      scene.children.pop();
      scene.children.pop();
    };
    closeButton.tooltip = "Close";
    this.addChild(closeButton);
  };
}