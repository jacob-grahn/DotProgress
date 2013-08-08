var dotProgress = dotProgress || {};
dotProgress.DotController = (function() {

	'use strict';

	var self = this;
	var defaultOptions = {
		sprite: 'img/dot-sprite.png',
		spriteWidth: 12,
		spriteHeight: 12,
		width: 300,
		height: 300,
		offsetX: 0,
		offsetY: 0,
		spacing: 10,
		rows: 2,
		columns: 10,
		xRotVel: 0.01502,
		yRotVel: 0.0213,
		zRotVel: 0
	};


	var DotController = function(model, options) {
		this.model = model;
		this.options = dotProgress.applyObjectDefaults(options, defaultOptions);
		this.setDimensions(options.width, options.height);
		this.setOffset(options.offsetX, options.offsetY);
		this.createDots(model, options.rows, options.columns, options.spacing);
		this.start();
	};


	DotController.prototype.step = function() {
		self.animationCallbackId = window.requestAnimationFrame(self.step);
		self.model.xRotation += self.options.xRotVel;
		self.model.yRotation += self.options.yRotVel;
		self.model.zRotation += self.options.zRotVel;
	};


	DotController.prototype.createDots = function(model, rows, columns, spacing) {
		var point;
		var num = rows * columns;
		for (var i = 0; i < num; i++) {
			point = new dotProgress.Point3d();
			point.x = Math.floor(i / rows) * spacing;
			point.y = (i % rows) * spacing;
			this.model.particles.push(point);
		}
	};


	DotController.prototype.start = function () {
		this.stop();
		this.animationCallbackId = window.requestAnimationFrame(this.step);
		this.model.active = true;
	};


	DotController.prototype.stop = function () {
		this.model.active = false;
		window.cancelAnimationFrame(this.animationCallbackId);
	};


	DotController.prototype.setDimensions = function (w, h) {
		this.model.scaleX = w / defaultOptions.width;
		this.model.scaleY = h / defaultOptions.height;
	};


	DotController.prototype.setOffset = function (oX, oY) {
		this.model.offsetX = oX;
		this.model.offsetY = oY;
	};


	DotController.prototype.remove = function () {
		this.stop();
		delete this.model;
		delete this.options;
	};


	return(DotController);

}());