import PointView from './PointView.js'

export default class FieldView {

	constructor(window, document, model, options) {
		this.window = window
		this.document = document
		this.model = model
		this.options = options
		this.dots = []
		this.div = document.createElement('div')
		this.div.className = 'dot-field'
		this.div.style.position = 'relative'
		this.div.style.width = options.width + 'px'
		this.div.style.height = options.height + 'px'
	}


	render() {
		if(this.model.active) {
			this.createDotsIfNeeded()
			this.removeDotsIfNeeded()
			this.positionDots()
		}
	}


	animationFrameCallback = () => {
		this.animationCallbackId = window.requestAnimationFrame(this.animationFrameCallback)
		this.render()
	}


	createDotsIfNeeded () {
		var particleLen = this.model.particles.length
		var dotLen = this.dots.length
		while(dotLen < particleLen) {
			var dot = new PointView(this.document, this.options)
			this.div.appendChild(dot.div)
			this.dots.push(dot)
			dotLen++
		}
	}


	removeDotsIfNeeded () {
		var particleLen = this.model.particles.length
		while(this.dots.length > particleLen) {
			var dot = this.dots.pop()
			this.div.removeChild(dot.div)
		}
	}


	positionDots () {
		var particleCount = this.model.particles.length
		for(var i=0; i<particleCount; i++) {
			var particle = this.model.particles[i]
			var dot = this.dots[i]
			dot.setPosition(particle.x2d, particle.y2d, particle.scale, particle.active)
		}
	}


	start () {
		this.animationFrameCallback()
	}


	stop () {
		this.window.cancelAnimationFrame(this.animationCallbackId)
	}


	remove () {
		while (this.div.lastChild) {
			this.div.removeChild(this.div.lastChild)
		}
		this.div = null
		this.dots = null
	}
}