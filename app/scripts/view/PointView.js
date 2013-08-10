var dotProgress = dotProgress || {};
dotProgress.PointView = (function() {


	var PointView = function(document, options) {
		this.div = document.createElement('div');
		this.div.innerHTML = 'O';
		this.options = options;
	};


	PointView.prototype.setPosition = function(x, y, scale, zIndex, active) {
		this.div.style.position = 'absolute';
		this.div.style.left = x + 'px';
		this.div.style.top = y + 'px';
		this.div.style.transform = 'scale('+scale+', '+scale+')';
		if(active) {
			this.div.className = 'dot-active';
			this.div.innerHTML = this.options.activeDisplay;
		}
		else {
			this.div.className = 'dot-inactive';
			this.div.innerHTML = this.options.inactiveDisplay;
		}
	};


	return(PointView);

}());