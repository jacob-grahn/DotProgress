/// <reference path="../../../define/createjs/easeljs.d.ts"/>
/// <reference path="../three/IParticle.ts"/>

module dotProgress {

	export class Dot extends createjs.BitmapAnimation implements jigg.three.IParticle {

		public active = false;
		public roundX:number = 0;
		public roundY:number = 0;
		public roundZ:number = 0;


		constructor( spriteSheet:createjs.SpriteSheet ) {
			super( spriteSheet );
			this.gotoAndStop('inactive');
		}


		public activate():void {

		}


		public remove():void {

		}
	}
}