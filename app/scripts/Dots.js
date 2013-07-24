function Dots(options) {
	Dots._super.constructor.call(this);
	this.dots = [];
	this.setDotSprite(options.sprite, options.spriteWidth, options.spriteHeight);
	this.createDots(options.rows, options.columns, options.spacing);
}
inherits( Dots, createjs.Container)


Dots.prototype.setDotSprite = function (sprite, frameWidth, frameHeight) {
	var data = {
		images: [sprite],
		frames: { width: frameWidth, height: frameHeight },
		animations: { inactive: [0], active: [1] }
	};
	this.spriteSheet = new createjs.SpriteSheet(data);
};


Dots.prototype.createDots = function (rows, columns, spacing) {
	var dot;
	var num = rows * columns;
	for (var i = 0; i < num; i++) {
		dot = new dotProgress.Dot(this.spriteSheet);
		dot.x = Math.floor(i / rows) * spacing;
		dot.y = (i % rows) * spacing;
		this.dots.push(dot);
		this.addChild(dot);
	}
};


Dots.prototype.clearDots = function () {
	var len = this.dots.length;
	var dot;
	for (var i = 0; i < len; i++) {
		dot = this.dots[i];
		dot.remove();
	}
	this.removeAllChildren();
};


Dots.prototype.remove = function () {
	this.clearDots();
	delete this.dots;
};
