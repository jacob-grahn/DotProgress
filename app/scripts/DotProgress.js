var dotProgress = dotProgress || {};
dotProgress.DotProgress = function() {


	var DotProgress = function (canvas, options) {
		createjs.Ticker.addEventListener("tick", dotProgress.bind(this.tickHandler, this));
	}


	DotProgress.prototype.setCanvas = function (c) {
		this.stage = new createjs.Stage(c);
		this.stage.addChild(this.dots);
	};


	DotProgress.prototype.tickHandler = function () {
		this.stage.update();
	};


	return(DotProgress);

}();