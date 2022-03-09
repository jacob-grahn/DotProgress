var MockAnimationFrame = (function() {

	var iterations = 0
	var maxIterations = 3


	var requestAnimationFrame = function(func) {
		if(iterations < maxIterations) {
			iterations++
			func()
		}
		return(iterations)
	}


	var cancelAnimationFrame = function(timeoutId) {
		iterations = 0
	}


	var setMaxIterations = function(num) {
		iterations = 0
		maxIterations = num
	}


	var getIterations = function() {
		return(iterations)
	}


	return({
		requestAnimationFrame: requestAnimationFrame,
		cancelAnimationFrame: cancelAnimationFrame,
		setMaxIterations: setMaxIterations,
		getIterations: getIterations
	})

}())