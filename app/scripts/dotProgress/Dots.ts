/// <reference path="Dot.ts"/>
/// <reference path="IDotProgressOptions.ts"/>
/// <reference path="../../../define/createjs/easeljs.d.ts"/>

module dotProgress {

	export class Dots extends createjs.Container {

		private dots:Dot[] = [];
		private spriteSheet:createjs.SpriteSheet;


		constructor( options:IDotProgressOptions ) {
			super();
			this.setDotSprite( options.sprite, options.spriteWidth, options.spriteHeight );
			this.createDots( options.rows, options.columns, options.spacing );
		}


		private setDotSprite( sprite:any, frameWidth:number, frameHeight:number ):void {
			var data = {
				images: [sprite],
				frames: {width:frameWidth, height:frameHeight},
				animations: {inactive:[0], active:[1]}
			};
			this.spriteSheet = new createjs.SpriteSheet(data);
		}


		private createDots( rows:number, columns:number, spacing:number ):void {
			var dot:Dot;
			var num:number = rows * columns;
			for( var i = 0; i<num; i++ ) {
				dot = new Dot( this.spriteSheet );
				dot.x = Math.floor( i/ rows ) * spacing;
				dot.y = ( i % rows ) * spacing;
				this.dots.push( dot );
				this.addChild( dot );
			}
		}


		private clearDots():void {
			var len:number = this.dots.length;
			var dot:Dot;
			for( var i=0; i<len; i++ ) {
				dot = this.dots[i];
				dot.remove();
			}
			this.removeAllChildren();
		}


		public remove() {
			this.clearDots();
			delete this.dots;
		}
	}
}