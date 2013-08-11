var dotProgress = dotProgress || {};
dotProgress.FieldView = function(window, document, model, options) {

	var dots = [];
	var animationCallbackId;
	var div = document.createElement('div');
	div.className = 'dot-field';
	div.style.position = 'relative';
	div.style.width = options.width + 'px';
	div.style.height = options.height + 'px';


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
			var dot = new dotProgress.PointView(document, options);
			div.appendChild(dot.div);
			dots.push(dot);
			dotLen++;
		}
	};


	var removeDotsIfNeeded = function() {
		var particleLen = model.particles.length;
		while(dots.length > particleLen) {
			var dot = dots.pop();
			div.removeChild(dot.div);
		}
	};


	var positionDots = function() {
		var particleCount = model.particles.length;
		for(var i=0; i<particleCount; i++) {
			var particle = model.particles[i];
			var dot = dots[i];
			dot.setPosition(particle.x2d, particle.y2d, particle.scale, particle.active);
		}
	};


	var start = function() {
		animationFrameCallback();
	};


	var stop = function() {
		window.cancelAnimationFrame(animationCallbackId);
	};


	var remove = function() {
		while (div.lastChild) {
			div.removeChild(div.lastChild);
		}
		div = null;
		dots = null;
	};


	start();


	return({
		div: div,
		start: start,
		stop: stop,
		render: render,
		remove: remove
	});

};