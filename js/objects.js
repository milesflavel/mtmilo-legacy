// Simple entity
function Entity(x, y){
  // Properties
  this.parent = null;
  this.children = new Array();
  this.x = x;
  this.y = y;
  this.mouseover = false;
  this.tvframe = 0;
  this.tooltip = "";

  // Methods
  this.render = function(context){};
  this.update = function(){};
  this.checkMouseover = function(x, y){
    // Check mouseover state for this object
    if (this.isMouseInBounds(x, y)){
      if (scene.mouseover) {
        scene.mouseover.mouseover = false;
      }
      scene.mouseover = this;
      scene.mouseover.mouseover = true;
    }
    else{
      this.mouseover = false;
    }
    // Now check mouseover state for this object's children
    for (var i = 0; i < this.children.length; i++){
      if (this.children[i].isMouseInBounds(x, y)){
        if (scene.mouseover) {
          scene.mouseover.mouseover = false;
        }
        scene.mouseover = this.children[i];
        scene.mouseover.mouseover = true;
      }
      else{
        this.children[i].mouseover = false;
      }
      this.children[i].checkMouseover(x, y);
    }
  };
  this.isMouseInBounds = function(x, y){};
  this.click = function(){};
  this.addChild = function(object){
    object.parent = this;
    this.children.push(object);
  };
  this.dispose = function(){
    for (var i = 0; i < this.children.length; i++){
      this.children[i].dispose();
    }
    var index = this.parent.children.indexOf(this);
    this.parent.children.splice(index, 1);
  };
}


// Simple single-image sprite
SpriteSimple.prototype = new Entity();
SpriteSimple.constructor = SpriteSimple;

function SpriteSimple(x, y, imagePath){
  // Initialize
  Entity.call(this, x, y);

  // Properties
  this.image = new Image();
  this.image.src = imagePath + "?" + version;

  // Methods
  this.render = function(context){
    context.drawImage(this.image, this.x, this.y);
    for (var i = 0; i < this.children.length; i++){
      this.children[i].render(context);
    }
  };

  this.isMouseInBounds = function(x, y){
    return (x >= this.x) && (y >= this.y) && (x < this.x + this.image.width) && (y < this.y + this.image.height);
  };
}


// Animated multi-image sprite
SpriteAnimated.prototype = new Entity();
SpriteAnimated.constructor = SpriteAnimated;

function SpriteAnimated(x, y, imagePaths){
  // Initialize
  Entity.call(this, x, y);

  // Properties
  this.frame = 0;
  this.frames = new Array();
  for (var i = 0; i < imagePaths.length; i++){
    var image = new Image();
    image.src = imagePaths[i] + "?" + version;
    this.frames.push(image);
  }

  // Methods
  this.render = function(context){
    if (this.frames.length > this.frame){
      context.drawImage(this.frames[this.frame], this.x, this.y);
    }
    for (var i = 0; i < this.children.length; i++){
      this.children[i].render(context);
    }
  };

  this.isMouseInBounds = function(x, y){
    return (x >= this.x) && (y >= this.y) && (x < this.x + this.frames[this.frame].width) && (y < this.y + this.frames[this.frame].height);
  };
}


// Full page blank overlay
OverlaySimple.prototype = new Entity();
OverlaySimple.constructor = OverlaySimple;

function OverlaySimple(title){
  // Initialize
  Entity.call(this, 0, 0);

  // Properties
  this.tooltip = title;

  // Default children
  this.closeButton = new SpriteSimple(300, 3, 'img/overlay-button-close.png');
  this.closeButton.click = function(){
    this.parent.dispose();
  };
  this.closeButton.tooltip = "Close";
  this.addChild(this.closeButton);

  // Methods
  this.render = function(context){
    scene.context.fillStyle = "black";
    scene.context.fillRect(11, 11, 298, 178);
    scene.context.fillStyle = "white";
    scene.context.fillRect(12, 12, 296, 176);
    for (var i = 0; i < this.children.length; i++){
      this.children[i].render(context);
    }
  };

  this.isMouseInBounds = function(x, y){
    return true;
  };
}


// Full page image overlay
OverlayImage.prototype = new Entity();
OverlayImage.constructor = OverlayImage;

function OverlayImage(title, imagePath){
  // Initialize
  Entity.call(this, 0, 0);

  // Properties
  this.tooltip = title;
  this.image = new Image();
  this.image.src = imagePath + "?" + version;

  // Default children
  this.closeButton = new SpriteSimple(300, 3, 'img/overlay-button-close.png');
  this.closeButton.click = function(){
    this.parent.dispose();
  };
  this.closeButton.tooltip = "Close";
  this.addChild(this.closeButton);

  // Methods
  this.render = function(context){
    context.drawImage(this.image, 0, 0);
    for (var i = 0; i < this.children.length; i++){
      this.children[i].render(context);
    }
  };

  this.isMouseInBounds = function(x, y){
    return true;
  };
}


// Full page paginated blank overlay
OverlayPaginated.prototype = new Entity();
OverlayPaginated.constructor = OverlayPaginated;

function OverlayPaginated(overlays){
  // Initialize
  Entity.call(this, 0, 0);

  // Properties
  this.page = 0;
  this.pages = new Array();
  for (var i = 0; i < overlays.length; i++){
    overlays[i].closeButton.click = function(){
      this.parent.parent.dispose();
    };
    this.pages.push(overlays[i]);
  }

  // Methods
  this.render = function(context){
    scene.context.fillStyle = "black";
    scene.context.fillRect(11, 11, 298, 178);
    scene.context.fillStyle = "white";
    scene.context.fillRect(12, 12, 296, 176);
    for (var i = 0; i < this.children.length; i++){
      this.children[i].render(context);
    }
  };

  this.isMouseInBounds = function(x, y){
    return true;
  };

  this.setPage = function(page){
    this.children = new Array();
    this.addChild(this.pages[page]);
    this.page = page;

    if (page > 0){
      var prevButton = new SpriteSimple(272, 170, 'img/overlay-button-previous.png');
      prevButton.click = function(){
        this.parent.setPage(this.parent.page - 1);
      };
      prevButton.tooltip = "Previous";
      this.addChild(prevButton);
    }

    if (page < this.pages.length - 1){
      var nextButton = new SpriteSimple(290, 170, 'img/overlay-button-next.png');
      nextButton.click = function(){
        this.parent.setPage(this.parent.page + 1);
      };
      nextButton.tooltip = "Next";
      this.addChild(nextButton);
    }
  };

  // Set the first page
  this.setPage(0);
}
