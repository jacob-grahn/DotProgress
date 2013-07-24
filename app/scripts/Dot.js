var Dot = function (spritesheet) {
	Dot._super.constructor.call(this, spritesheet)
	this.active = false;
	this.roundX = 0;
	this.roundY = 0;
	this.roundZ = 0;
	this.gotoAndStop('inactive');
}

inherits( Dot, createjs.BitmapAnimation );

Dot.prototype.activate = function () {
};

Dot.prototype.remove = function () {
};