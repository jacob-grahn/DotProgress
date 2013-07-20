module jigg.utils {

	export var applyObjectDefaults = function( obj:any, defaultObj:any ):{} {
		for( var key in defaultObj ) {
			obj[key] = obj[key] || defaultObj[key];
		}
		return( obj );
	}

}