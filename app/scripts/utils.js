var bind = function (fn, me) {
	return function () {
		return fn.apply(me, arguments);
	};
}

//--- inherits function from http://www.2ality.com/2012/01/js-inheritance-by-example.html
function inherits(SubC, SuperC) {
	var subProto = Object.create(SuperC.prototype);
	// At the very least, we keep the "constructor" property
	// At most, we keep additions that have already been made
	extend(subProto, SubC.prototype);
	SubC.prototype = subProto;
	SubC._super = SuperC.prototype;
};