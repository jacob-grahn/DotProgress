/// <reference path="IParticle.ts"/>

module jigg.three {

	export class Field {

		public fov:number = 600;
		public xRotation:number = 0;
		public yRotation:number = 0;
		public zRotation:number = 0;
		public members:jigg.three.IParticle[] = [];


		public flatten():void {
			var sx:number = Math.sin( this.xRotation );
			var cx:number = Math.cos( this.xRotation );
			var sy:number = Math.sin( this.yRotation );
			var cy:number = Math.cos( this.yRotation );
			var sz:number = Math.sin( this.zRotation );
			var cz:number = Math.cos( this.zRotation );

			var dot:jigg.three.IParticle;
			var len:number = this.members.length;

			for( var i = 0; i<len; i++ ){
				dot = this.members[i];
				//
				var x:number = dot.roundX;
				var y:number = dot.roundY;
				var z:number = dot.roundZ;
				//rotation around x
				var xy:number = cx*y - sx*z;
				var xz:number = sx*y + cx*z;
				//rotation around y
				var yz:number = cy*xz - sy*x;
				var yx:number = sy*xz + cy*x;
				//rotation around z
				var zx:number = cz*yx - sz*xy;
				var zy:number = sz*yx + cz*xy;
				//scale
				var perspective:number = this.fov / (this.fov-yz);
				dot.scaleX = dot.scaleY = perspective;
				//flat position
				dot.x = zx * perspective;
				dot.y = zy * perspective;
			}

			//this.arrange();
		}


		/*public arrange():void {
			array.sortOn("scaleX", Array.NUMERIC);
			for(var i = 0; i<array.length; i++){
				if (dotHolder.getChildAt(i) != array[i]) {
					dotHolder.setChildIndex(array[i], i);
				}
			}
		}*/
	}
}