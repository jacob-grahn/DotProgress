var dotProgress = dotProgress || {};

/*dotProgress.bind = function (fn, me) {
	return function () {
		return fn.apply(me, arguments);
	};
}

//--- extend function from http://www.2ality.com/2012/01/js-inheritance-by-example.html
dotProgress.extend = function(target, source) {
	Object.getOwnPropertyNames(source)
		.forEach(function(field) {
			Object.defineProperty(target, field,
				Object.getOwnPropertyDescriptor(source, field));
		});
	return target;
}

//--- inherits function from http://www.2ality.com/2012/01/js-inheritance-by-example.html
dotProgress.inherits = function (SubC, SuperC) {
	var subPrototype = Object.create(SuperC.prototype);
	// At the very least, we keep the "constructor" property
	// At most, we keep additions that have already been made
	dotProgress.extend(subPrototype, SubC.prototype);
	SubC.prototype = subPrototype;
	SubC._super = SuperC.prototype;
};*/


//--- fill in blanks with default values ---
dotProgress.applyObjectDefaults = function ( obj, defaultObj ) {
	for (var field in defaultObj) {
		if (defaultObj.hasOwnProperty(field) && !obj.hasOwnProperty(field)) {
			obj[field] = defaultObj[field];
		}
	}
	return(obj);
};


//--- requestAnimationFrame polyfill
(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());


//--- flatten 3d coordinates down to 2d space
dotProgress.flatten3d = function (fov, xRot, yRot, zRot, particles) {
	var sx = Math.sin( xRot );
	var cx = Math.cos( xRot );
	var sy = Math.sin( yRot );
	var cy = Math.cos( yRot );
	var sz = Math.sin( zRot );
	var cz = Math.cos( zRot );

	var particle;
	var len = particles.length;

	for ( var i = 0; i < len; i++ ) {
		particle = particles[i];

		var x = particle.x3d;
		var y = particle.y3d;
		var z = particle.z3d;

		var xy = cx * y - sx * z;
		var xz = sx * y + cx * z;

		var yz = cy * xz - sy * x;
		var yx = sy * xz + cy * x;

		var zx = cz * yx - sz * xy;
		var zy = sz * yx + cz * xy;

		var perspective = fov / (fov - yz);

		particle.scale = perspective;
		particle.x2d = zx * perspective;
		particle.y2d = zy * perspective;
	}
};