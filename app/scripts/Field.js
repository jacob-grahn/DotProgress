var Field = function () {
	this.fov = 600;
	this.xRotation = 0;
	this.yRotation = 0;
	this.zRotation = 0;
	this.members = [];
}

Field.prototype.flatten = function () {
	var sx = Math.sin( this.xRotation );
	var cx = Math.cos( this.xRotation );
	var sy = Math.sin( this.yRotation );
	var cy = Math.cos( this.yRotation );
	var sz = Math.sin( this.zRotation );
	var cz = Math.cos( this.zRotation );

	var dot;
	var len = this.members.length;

	for ( var i = 0; i < len; i++ ) {
		dot = this.members[i];

		var x = dot.roundX;
		var y = dot.roundY;
		var z = dot.roundZ;

		var xy = cx * y - sx * z;
		var xz = sx * y + cx * z;

		var yz = cy * xz - sy * x;
		var yx = sy * xz + cy * x;

		var zx = cz * yx - sz * xy;
		var zy = sz * yx + cz * xy;

		var perspective = this.fov / (this.fov - yz);
		dot.scaleX = dot.scaleY = perspective;

		dot.x = zx * perspective;
		dot.y = zy * perspective;
	}
}