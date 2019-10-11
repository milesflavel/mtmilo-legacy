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

  this.canvasScale = 1;
  this.left = 0;
  this.top = 0;
  this.fullscreen = false;

  // Methods
  this.addChild = function(object){
    object.parent = this;
    this.children.push(object);
  };

  this.render = function(){
    // Clear the frame
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Render children
    for (var i = 0; i < this.children.length; i++){
      this.children[i].render(this.context);
    }

    // Draw tooltip
    if (this.mouseover){
      this.tvscreen.frame = this.mouseover.tvframe;
      if(this.mouseover.tooltip.length){
        this.drawTooltip(this.mouseover.tooltip);
      }
    }

    // Draw cursor
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
      this.children[i].checkMouseover(this.mouseX, this.mouseY);
    }
  };

  this.setCursorPos = function(x, y){
    this.mouseX = Math.floor((x - this.left) / this.canvasScale);
    this.mouseY = Math.floor((y - this.top) / this.canvasScale);
  }

  this.drawCursor = function(){
    this.context.globalCompositeOperation = 'difference';
    this.context.fillStyle = "white";
    this.context.fillRect(this.mouseX, this.mouseY, 1, 1);
    this.context.fillRect(this.mouseX + 2, this.mouseY, 3, 1);
    this.context.fillRect(this.mouseX, this.mouseY + 2, 1, 3);
    this.context.fillRect(this.mouseX - 1, this.mouseY, -3, 1);
    this.context.fillRect(this.mouseX, this.mouseY - 1, 1, -3);
    this.context.globalCompositeOperation = 'source-over';
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

  this.configureCanvas = function(){
    var sx = canvas.scrollWidth / canvas.width;
    var sy = canvas.scrollHeight / canvas.height;
    this.canvasScale = Math.min(sx, sy);
    var rect = canvas.getBoundingClientRect();
    this.left = ((canvas.scrollWidth - (canvas.width * this.canvasScale)) / 2) + rect.left;
    this.top = ((canvas.scrollHeight - (canvas.height * this.canvasScale)) / 2) + rect.top;
    this.fullscreen = typeof(document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) !== "undefined";
  };

  // Fullscreen functions
  this.goFullscreen = function(){
    if (this.canvas.requestFullscreen){
      this.canvas.requestFullscreen();
    }
    else if (this.canvas.msRequestFullscreen){
      this.canvas.msRequestFullscreen();
    }
    else if (this.canvas.mozRequestFullScreen){
      this.canvas.mozRequestFullScreen();
    }
    else if (el.webkitRequestFullscreen){
      this.canvas.webkitRequestFullscreen();
    }
  }

  this.exitFullscreen = function(){
    if (document.exitFullscreen){
      document.exitFullscreen();
    }
    else if (document.msExitFullscreen){
      document.msExitFullscreen();
    }
    else if (document.mozCancelFullScreen){
      document.mozCancelFullScreen();
    }
    else if (document.webkitCancelFullScreen){
      document.webkitCancelFullScreen();
    }
  }

  this.toggleFullscreen = function(){
    if(!this.fullscreen){
      this.goFullscreen(this.canvas);
    }
    else{
      this.exitFullscreen();
    }
  }
}
