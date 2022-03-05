export default class PointView {

	constructor(document, options) {
		this.div = document.createElement('div')
		this.options = options
		this.showActive(false)
	}

	setPosition(x, y, scale, active) {
		this.div.style.position = 'absolute'
		this.div.style.left = x + this.options.halfWidth + 'px'
		this.div.style.top = y + this.options.halfHeight + 'px'
		this.div.style.zIndex = Math.round(scale * 100) + 200
		if (active !== this.active) {
			this.showActive(active)
		}
	}

	showActive(active) {
		if (active) {
			this.div.className = 'dot-active'
			this.div.innerHTML = this.options.activeDisplay
		}
		else {
			this.div.className = 'dot-inactive'
			this.div.innerHTML = this.options.inactiveDisplay
		}
		this.active = active
	}
}