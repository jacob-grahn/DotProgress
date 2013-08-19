/* global describe, beforeEach, it, expect, dotProgress, MockAnimationFrame */

(function() {
	"use strict";

	describe('DotController', function() {

		var dc;
		var field;

		beforeEach(function() {
			var options = {
				rows: 5,
				columns: 2,
				spacing: 25,
				xRotVel: 0.1,
				yRotVel: 0.2,
				zRotVel: 0.3
			};
			field = new dotProgress.Field3d();
			dc = new dotProgress.DotController(MockAnimationFrame, field, options);
		});


		it('should create the correct number of dots', function() {
			expect(field.particles.length).toBe(10);
		});


		it('should space the dots in a grid', function() {
			var p0 = field.particles[0];
			var p7 = field.particles[7];
			expect(p0.x3d).toBe(-25);
			expect(p0.y3d).toBe(-62.5);
			expect(p7.x3d).toBe(0);
			expect(p7.y3d).toBe(-12.5);
		});


		it('should start stepping through the animation when start() is called', function() {
			expect(MockAnimationFrame.getIterations()).toBe(3);
			expect(field.xRotation).toBeCloseTo(0.3, 2);
			expect(field.yRotation).toBeCloseTo(0.6, 2);
			expect(field.zRotation).toBeCloseTo(0.9, 2);

			MockAnimationFrame.setMaxIterations(3);
			dc.start();
			expect(field.xRotation).toBeCloseTo(0.6, 2);
			expect(field.yRotation).toBeCloseTo(1.2, 2);
			expect(field.zRotation).toBeCloseTo(1.8, 2);

			dc.stop();
			expect(MockAnimationFrame.getIterations()).toBe(0);
		});

	});

}());