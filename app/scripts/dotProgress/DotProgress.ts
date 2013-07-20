/// <reference path="Dots.ts"/>
/// <reference path="IDotProgressOptions.ts"/>
/// <reference path="../utils/misc.ts"/>
/// <reference path="../../../define/createjs/easeljs.d.ts"/>
/// <reference path="../../../define/jquery/jquery.d.ts"/>

module dotProgress {


	export class DotProgress {

		private stage:createjs.Stage;
		private dots:Dots;
		private defaults:IDotProgressOptions = {
			sprite: 'img/dot-sprite.png',
			spriteWidth: 12,
			spriteHeight: 12,
			width: 300,
			height: 300,
			offsetX: 0,
			offsetY: 0,
			spacing: 10,
			rows: 10,
			columns: 10
		};

		constructor( canvas:any, options:IDotProgressOptions ) {
			options = <IDotProgressOptions> jigg.utils.applyObjectDefaults( options, this.defaults );

			this.dots = new Dots( options );

			this.setCanvas( canvas );
			this.setDimensions( options.width, options.height );
			this.setOffset( options.offsetX, options.offsetY );

			createjs.Ticker.addEventListener( "tick", $.proxy(this.tickHandler, this) );
		}


		/*public setDotSprite( img:HTMLImageElement, w:number, h:number ) {
			this.dotSprite = img;
			this.dotSpriteWidth = w;
			this.dotSpriteHeight = h;
		}*/


		public setCanvas(c:HTMLCanvasElement):void {
			this.stage = new createjs.Stage( c );
			this.stage.addChild( this.dots );
		}


		public setDimensions(w:number, h:number):void {
			this.dots.scaleX = w / this.defaults.width;
			this.dots.scaleY = h / this.defaults.height;
		}


		public setOffset(oX:number, oY:number):void {
			this.dots.x = oX;
			this.dots.y = oY;
		}


		public start():void {

		}


		public stop():void {

		}


		private tickHandler() {
			this.stage.update();
		}


		public remove():void {
			this.stop();

			this.dots.remove();
			delete this.dots;
		}
	}
}
