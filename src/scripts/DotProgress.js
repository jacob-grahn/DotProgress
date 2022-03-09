import { applyObjectDefaults } from './utils.js'
import defaultOptions from './model/DefaultOptions'
import Field3D from './model/Field3D'
import DotController from './controller/DotController'
import FieldView from './view/FieldView'

class DotProgress {
	
	constructor(elm, customOptions) {
		var options = applyObjectDefaults(customOptions, defaultOptions)
		options.halfWidth = Math.round((options.width - options.spacing) / 2)
		options.halfHeight = Math.round((options.height - options.spacing) / 2)

		var field = new Field3D()
		this.dotController = new DotController(window, field, options)
		this.fieldView = new FieldView(window, document, field, options)

		elm.appendChild(this.fieldView.div)

		this.start()
	}

	start () {
		this.dotController.start()
		this.fieldView.start()
	}

	stop () {
		this.dotController.stop()
		this.fieldView.stop()
	}

	setProgress (num) {
		this.dotController.setProgress(num)
	}

	remove () {
		this.dotController.remove()
		this.dotController = null

		this.fieldView.remove()
		this.fieldView = null

		this.field = null
	}
}


window.DotProgress = DotProgress