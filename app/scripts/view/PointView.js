var dotProgress = dotProgress || {};
dotProgress.PointView = (function() {


	var PointView = function(document, options) {
		this.div = document.createElement('div');
		this.options = options;
		this.showActive(false);
	};


	PointView.prototype.setPosition = function(x, y, scale, active) {
		this.div.style.position = 'absolute';
		this.div.style.left = x + this.options.halfWidth + 'px';
		this.div.style.top = y + this.options.halfHeight + 'px';
		this.div.style.zIndex = Math.round(scale * 100) + 200;
		/*this.div.style.transform = 'scale('+scale+')';
		this.div.style['-webkit-transform'] = 'scale('+scale+')';
		this.div.style['-moz-transform'] = 'scale('+scale+')';*/
		if(active !== this.active) {
			this.showActive(active);
		}
	};


	PointView.prototype.showActive = function(active) {
		if(active) {
			this.div.className = 'dot-active';
			this.div.innerHTML = this.options.activeDisplay;
		}
		else {
			this.div.className = 'dot-inactive';
			this.div.innerHTML = this.options.inactiveDisplay;
		}
		this.active = active;
	};


	return(PointView);

}());