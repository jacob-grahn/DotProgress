var dotProgress = dotProgress || {};
dotProgress.Dot = function () {

	var Dot = function () {
		this.active = false;
		this.scale = 1;
		this.x3d = 0;
		this.y3d = 0;
		this.z3d = 0;
		this.x2d = 0;
		this.y2d = 0;
	}

	return(Dot);

}()