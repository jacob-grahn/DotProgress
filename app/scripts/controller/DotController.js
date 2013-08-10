var dotProgress = dotProgress || {};
dotProgress.DotController = function(window, model, customOptions) {

	'use strict';

	var animationCallbackId;
	var defaultOptions = {
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
	var options = dotProgress.applyObjectDefaults(customOptions, defaultOptions);


	var createDots = function(rows, columns, spacing) {
		clearDots();
		var point;
		var num = rows * columns;
		for (var i = 0; i < num; i++) {
			point = new dotProgress.Point3d();
			point.x3d = Math.floor(i / rows) * spacing;
			point.y3d = (i % rows) * spacing;
			model.particles.push(point);
		}
	};


	var clearDots = function() {
		model.particles = [];
	};


	var start = function () {
		stop();
		animationCallbackId = window.requestAnimationFrame(step);
		model.active = true;
	};


	var stop = function () {
		model.active = false;
		window.cancelAnimationFrame(animationCallbackId);
	};


	var setDimensions = function (w, h) {
		model.scaleX = w / defaultOptions.width;
		model.scaleY = h / defaultOptions.height;
	};


	var setOffset = function (oX, oY) {
		model.offsetX = oX;
		model.offsetY = oY;
	};


	var step = function() {
		model.xRotation += options.xRotVel;
		model.yRotation += options.yRotVel;
		model.zRotation += options.zRotVel;
		animationCallbackId = window.requestAnimationFrame(step);
	};


	var remove = function () {
		stop();
		clearDots();
	};


	setDimensions(options.width, options.height);
	setOffset(options.offsetX, options.offsetY);
	createDots(options.rows, options.columns, options.spacing);
	start();


	return({
		start: start,
		stop: stop,
		remove: remove,
		model: model
	});

};