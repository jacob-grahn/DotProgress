var dotProgress = dotProgress || {};
dotProgress.Dots = function() {


	function Dots(options) {
		console.log('Dots::constructor', options);
		Dots._super.constructor.call(this);
		this.dots = [];
		this.options = options;
	}


	Dots.prototype.spriteLoadedHandler = function() {
		var options = this.options;
		var sprite = this.queue.getResult('sprite');
		var spritesheet = this.makeSpritesheet(sprite, options.spriteWidth, options.spriteHeight);
		console.log('Dots::spriteLoadedHandler', sprite, spritesheet);
		this.createDots(spritesheet, options.rows, options.columns, options.spacing)
	}


	Dots.prototype.makeSpritesheet = function (sprite, frameWidth, frameHeight) {
		var data = {
			images: [sprite],
			frames: { width: frameWidth, height: frameHeight },
			animations: { inactive: [0], active: [1] }
		};
		var spritesheet = new createjs.SpriteSheet(data);
		return(spritesheet);
};


	Dots.prototype.remove = function () {
		this.clearDots();
		delete this.dots;
	};


	return(Dots);

}()