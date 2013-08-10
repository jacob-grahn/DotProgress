var dotProgress = dotProgress || {};
dotProgress.DotController = function(window, model, options) {

	'use strict';

	var animationCallbackId;

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
		model.scaleX = w / dotProgress.defaultOptions.width;
		model.scaleY = h / dotProgress.defaultOptions.height;
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