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
    for (var i = 0; i < this.children.length; i++){
      this.children[i].render(context);
    }
    if (this.frames.length > this.frame){
      context.drawImage(this.frames[this.frame], this.x, this.y);
    }
  };

  this.isMouseInBounds = function(x, y){
    return (x >= this.x) && (y >= this.y) && (x < this.x + this.frames[this.frame].width) && (y < this.y + this.frames[this.frame].height);
  };
}
