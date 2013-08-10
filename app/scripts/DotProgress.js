var dotProgress = dotProgress || {};
dotProgress.DotProgress = function(elm, customOptions) {

	var options = dotProgress.applyObjectDefaults(customOptions, dotProgress.defaultOptions);
	var field = new dotProgress.Field3d();
	var dotController = new dotProgress.DotController(window, field, options);
	var fieldView = new dotProgress.FieldView(window, document, field, options);
	elm.appendChild(fieldView.div);

	var start = function() {
		dotController.start();
	};


	var stop = function() {
		dotController.stop();
	};


	var remove = function() {
		dotController.remove();
		dotController = null;

		fieldView.remove();
		fieldView = null;

		field = null;
	};


	return({
		start: start,
		stop: stop,
		remove: remove
	});
};