// @see DotViewTest

var dotProgress = dotProgress || {};
dotProgress.DotView = function(model, elm, window) {

	'use strict';

	var dots = [];
	var animationCallbackId;


	var render = function() {
		if(model.active) {
			createDotsIfNeeded();
			removeDotsIfNeeded();
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
			var dot = new dotProgress.Dot(elm);
			dots.push(dot);
			dotLen++;
		}
	};


	var removeDotsIfNeeded = function() {
		var particleLen = model.particles.length;
		var dotLen = dots.length;
		if(dotLen > particleLen) {
			dots.slice(0, particleLen);
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