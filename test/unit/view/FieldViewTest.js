/* global describe, beforeEach, it, expect, dotProgress */

(function () {

	"use strict";

	describe('FieldView', function () {

		var field;
		var div;
		var dotView;
		var options = dotProgress.applyObjectDefaults({}, dotProgress.defaultOptions);


		beforeEach(function() {
			field = new dotProgress.Field3d();
			field.particles = [{x2d:1, y2d:-2, scale:-1, active:false}, {x2d:-20, y2d:-20, scale:0.5, active:false}, {x2d:0, y2d:0, scale:1, active:true}];
			field.active = true;

			dotView = new dotProgress.FieldView(window, document, field, options);
			div = dotView.div;
			dotView.render();
		});


		it('should create an html element for each particle', function () {
			expect(div.childNodes.length).toBe(3);
		});


		it('should add or remove html elements to match the number of particles', function() {
			field.particles.push({x2d:-15, y2d:234}, {x2d:3, y2d:88});
			dotView.render();
			expect(div.childNodes.length).toBe(5);

			field.particles.pop();
			dotView.render();
			expect(div.childNodes.length).toBe(4);

			field.particles = [];
			dotView.render();
			expect(div.childNodes.length).toBe(0);
		});


		/*it('should set css styles to match x2d, y2d, and scale', function() {
			var c0 = div.firstChild;
			expect(c0.style.left).toBe('1px');
			expect(c0.style.top).toBe('-2px');

			var c1 = div.childNodes[1];
			expect(c1.style.left).toBe('-20px');
			expect(c1.style.top).toBe('-20px');

			var c2 = div.childNodes[1];
			expect(c2.style.transform).toBe('scale(0.5, 0.5)');
		});*/


		it('should set class to active or inactive to match particle values', function() {
			var c0 = div.childNodes[0];
			var c1 = div.childNodes[1];
			var c2 = div.childNodes[2];
			expect(c0.className).toMatch('inactive');
			expect(c1.className).toMatch('inactive');
			expect(c2.className).toMatch('active');

			field.particles[0].active = false;
			field.particles[1].active = true;
			field.particles[2].active = false;
			dotView.render();
			expect(c0.className).toMatch('inactive');
			expect(c1.className).toMatch('active');
			expect(c2.className).toMatch('inactive');
		});
	});

})();
