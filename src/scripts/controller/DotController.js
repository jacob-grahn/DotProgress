import defaultOptions from '../model/DefaultOptions'
import Point3D from '../model/Point3D'


export default class DotController {
	

	constructor (window, field, options) {
		this.window = window
		this.field = field
		this.options = options

		this.setDimensions(options.width, options.height)
		this.createDots(options.rows, options.columns, options.depth, options.spacing)
		this.start()
	}


	createDots (rows, columns, depth, spacing) {
		this.clearDots()
		var point
		var num = rows * columns
		var halfWidth = columns * spacing / 2
		var halfHeight = rows * spacing / 2
		for (var i = 0; i < num; i++) {
			point = new Point3D()
			point.x3d = Math.floor(i / rows) * spacing - halfWidth
			point.y3d = (i % rows) * spacing - halfHeight
			point.z3d = depth / 2 * spacing
			this.field.particles.push(point)
		}
		if(this.options.shuffle) {
			this.field.particles = this.shuffle(this.field.particles)
		}
	}


	clearDots () {
	}


	start () {
		this.stop()
		this.field.active = true
		this.animationCallbackId = this.window.requestAnimationFrame(this.step)
	}


	stop () {
		this.field.active = false
		this.window.cancelAnimationFrame(this.animationCallbackId)
	}


	setProgress (num) {
		var len = this.field.particles.length
		for(var i=0; i<len; i++) {
			var point = this.field.particles[i]
			var percent = i / len
			if(percent <= num) {
				point.active = true
			}
			else {
				point.active = false
			}
		}
	}


	setDimensions (w, h) {
		this.field.scaleX = w / defaultOptions.width
		this.field.scaleY = h / defaultOptions.height
	}


	animateActivePoints () {
		var len = this.field.particles.length
		var zInactive = this.options.depth / 2 * this.options.spacing
		var zActive = -zInactive
		var dist
		var point
		var zTarget

		for(var i=0; i<len; i++) {
			point = this.field.particles[i]

			if(point.active) {
				zTarget = zActive
			}
			else {
				zTarget = zInactive
			}

			dist = zTarget - point.z3d
			if(dist !== 0) {
				if(dist > 0) {
					point.z3d += this.options.transitionVel
				}
				else {
					point.z3d -= this.options.transitionVel
				}
			}
		}
	}


	step = () => {
		this.field.xRotation += this.options.xRotVel
		this.field.yRotation += this.options.yRotVel
		this.field.zRotation += this.options.zRotVel
		this.flatten3d(this.field.fov, this.field.xRotation, this.field.yRotation, this.field.zRotation, this.field.particles)
		this.animateActivePoints()
		this.animationCallbackId = this.window.requestAnimationFrame(this.step)
	}


	flatten3d (fov, xRot, yRot, zRot, particles) {
		var sx = Math.sin( xRot )
		var cx = Math.cos( xRot )
		var sy = Math.sin( yRot )
		var cy = Math.cos( yRot )
		var sz = Math.sin( zRot )
		var cz = Math.cos( zRot )

		var particle
		var len = particles.length

		for ( var i = 0; i < len; i++ ) {
			particle = particles[i]

			var x = particle.x3d
			var y = particle.y3d
			var z = particle.z3d

			var xy = cx * y - sx * z
			var xz = sx * y + cx * z

			var yz = cy * xz - sy * x
			var yx = sy * xz + cy * x

			var zx = cz * yx - sz * xy
			var zy = sz * yx + cz * xy

			var perspective = fov / (fov - yz)

			particle.scale = perspective
			particle.x2d = zx * perspective
			particle.y2d = zy * perspective
		}
	}


	//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	shuffle (o) { //v1.0
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	}


	remove () {
		this.stop()
		this.clearDots()
	}
}