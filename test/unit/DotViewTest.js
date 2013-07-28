/* global describe, beforeEach, it, expect, dotProgress */

(function () {

	"use strict";

	describe('DotView', function () {

		var model;
		var div;
		var dotView;


		beforeEach(function() {
			model = new dotProgress.DotModel();
			model.particles = [{x2d:1, y2d:-2, scale:-1}, {x2d:-20, y2d:-20, scale:0.5}, {x2d:0, y2d:0, scale:1}];
			model.active = true;

			div = document.createElement('<div></div>');
			dotView = new dotProgress.DotView(model, div, window);
			dotView.render();
		});


		it('should create an html element for each particle', function () {
			expect(div.childNodes).toBe(3);
		});


		it('should add or remove html elements to match the number of particles', function() {
			model.particles.push({x2d:-15, y2d:234}, {x2d:3, y2d:88});
			dotView.render();
			expect(div.childNodes).toBe(5);

			model.particles.pop();
			dotView.render();
			expect(div.childNodes).toBe(4);

			model.particles = [];
			dotView.render();
			expect(div.childNodes).toBe(0);
		});


		it('should set css styles to match x2d, y2d, and scale', function() {
			var c0 = div.firstChild();
			expect(c0.style.left).toBe(1);
			expect(c0.style.top).toBe(-2);

			var c1 = div.childNodes[1];
			expect(c1.style.left).toBe(-20);
			expect(c1.style.top).toBe(-20);

			var c2 = div.childNodes[2];
			expect(c2.style.transform).toBe('scale(.5,.5)');
		});


		it('should set class to active or inactive to match particle values', function() {
			var c0 = div.childNodes[0];
			var c1 = div.childNodes[1];
			var c2 = div.childNodes[2];
			expect(c0.className).toMatch('active');
			expect(c1.className).toMatch('inactive');
			expect(c2.className).toMatch('inactive');

			model.particles[0].active = false;
			model.particles[1].active = true;
			expect(c0.className).toMatch('inactive');
			expect(c1.className).toMatch('active');
			expect(c2.className).toMatch('inactive');
		});
	});

})();
