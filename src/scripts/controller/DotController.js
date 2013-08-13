var dotProgress = dotProgress || {};
dotProgress.DotController = function(window, field, options, shuffle) {

	'use strict';

	var animationCallbackId;

	var createDots = function(rows, columns, depth, spacing) {
		clearDots();
		var point;
		var num = rows * columns;
		var halfWidth = columns * spacing / 2;
		var halfHeight = rows * spacing / 2;
		for (var i = 0; i < num; i++) {
			point = new dotProgress.Point3d();
			point.x3d = Math.floor(i / rows) * spacing - halfWidth;
			point.y3d = (i % rows) * spacing - halfHeight;
			point.z3d = depth / 2 * spacing;
			field.particles.push(point);
		}
		if(options.shuffle) {
			shuffle(field.particles);
		}
	};


	var clearDots = function() {
	};


	var start = function () {
		stop();
		field.active = true;
		animationCallbackId = window.requestAnimationFrame(step);
	};


	var stop = function () {
		field.active = false;
		window.cancelAnimationFrame(animationCallbackId);
	};


	var setProgress = function(num) {
		var len = field.particles.length;
		for(var i=0; i<len; i++) {
			var point = field.particles[i];
			var percent = i / len;
			if(percent <= num) {
				point.active = true;
			}
			else {
				point.active = false;
			}
		}
	};


	var setDimensions = function (w, h) {
		field.scaleX = w / dotProgress.defaultOptions.width;
		field.scaleY = h / dotProgress.defaultOptions.height;
	};


	var animateActivePoints = function() {
		var len = field.particles.length;
		var zInactive = options.depth / 2 * options.spacing;
		var zActive = -zInactive;
		var dist;
		var point;
		var zTarget;

		for(var i=0; i<len; i++) {
			point = field.particles[i];

			if(point.active) {
				zTarget = zActive;
			}
			else {
				zTarget = zInactive;
			}

			dist = zTarget - point.z3d;
			if(dist !== 0) {
				if(dist > 0) {
					point.z3d += options.transitionVel;
				}
				else {
					point.z3d -= options.transitionVel;
				}
			}
		}
	};


	var step = function() {
		field.xRotation += options.xRotVel;
		field.yRotation += options.yRotVel;
		field.zRotation += options.zRotVel;
		dotProgress.flatten3d(field.fov, field.xRotation, field.yRotation, field.zRotation, field.particles);
		animateActivePoints();
		animationCallbackId = window.requestAnimationFrame(step);
	};



	var remove = function () {
		stop();
		clearDots();
	};


	setDimensions(options.width, options.height);
	createDots(options.rows, options.columns, options.depth, options.spacing);
	start();


	return({
		start: start,
		stop: stop,
		setProgress: setProgress,
		remove: remove
	});

};