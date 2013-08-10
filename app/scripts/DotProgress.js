var dotProgress = dotProgress || {};
dotProgress.DotProgress = function(elm, customOptions) {

	var field = new dotProgress.Field3d();
	var dotController = new dotProgress.DotController(window, field, customOptions);
	var fieldView = new dotProgress.FieldView(field, elm, window);


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