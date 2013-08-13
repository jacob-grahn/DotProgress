var dotProgress = dotProgress || {};


//--- fill in blanks with default values ---
dotProgress.applyObjectDefaults = function ( obj, defaultObj ) {
	for (var field in defaultObj) {
		if (defaultObj.hasOwnProperty(field) && !obj.hasOwnProperty(field)) {
			obj[field] = defaultObj[field];
		}
	}
	return(obj);
};



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



//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};