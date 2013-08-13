/* global shuffle */

var dotProgress = dotProgress || {};
dotProgress.DotProgress = function(elm, customOptions) {

	var options = dotProgress.applyObjectDefaults(customOptions, dotProgress.defaultOptions);
	options.halfWidth = Math.round((options.width - options.spacing) / 2);
	options.halfHeight = Math.round((options.height - options.spacing) / 2);

	var field = new dotProgress.Field3d();
	var dotController = new dotProgress.DotController(window, field, options, shuffle);
	var fieldView = new dotProgress.FieldView(window, document, field, options);
	elm.appendChild(fieldView.div);


	var remove = function() {
		dotController.remove();
		dotController = null;

		fieldView.remove();
		fieldView = null;

		field = null;
	};


	return({
		start: dotController.start,
		stop: dotController.stop,
		setProgress: dotController.setProgress,
		remove: remove
	});
};