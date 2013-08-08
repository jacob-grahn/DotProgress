var dotProgress = dotProgress || {};
dotProgress.DotGroup = function(model, elm, window) {

	'use strict';

	var dots = [];
	var animationCallbackId;


	var render = function() {
		if(model.active) {
			createDotsIfNeeded();
			removeDotsIfNeeded();
			positionDots();
		}
	};


	var animationFrameCallback = function() {
		animationCallbackId = window.requestAnimationFrame(animationFrameCallback);
		render();
	};


	var createDotsIfNeeded = function() {
		var particleLen = model.particles.length;
		var dotLen = dots.length;
		while(dotLen < particleLen) {
			var particle = model.particles[dotLen];
			var dot = new dotProgress.Dot(document, particle);
			elm.appendChild(dot.div);
			dots.push(dot);
			dotLen++;
		}
	};


	var removeDotsIfNeeded = function() {
		var particleLen = model.particles.length;
		while(dots.length > particleLen) {
			var dot = dots.pop();
			elm.removeChild(dot.div);
		}
	};


	var positionDots = function() {
		var particleCount = model.particles.length;
		for(var i=0; i<particleCount; i++) {
			var particle = model.particles[i];
			var dot = dots[i];
			dot.setPosition(particle.x2d, particle.y2d, particle.scale, particle.zIndex, particle.active);
		}
	};


	var start = function() {
		render();
	};


	var stop = function() {
		window.cancelAnimationFrame(animationCallbackId);
	};


	return({
		start: start,
		stop: stop,
		render: render
	});

};