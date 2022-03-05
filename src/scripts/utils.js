//--- fill in blanks with default values ---
export function applyObjectDefaults ( obj, defaultObj ) {
	for (var field in defaultObj) {
		if (defaultObj.hasOwnProperty(field) && !obj.hasOwnProperty(field)) {
			obj[field] = defaultObj[field]
		}
	}
	return(obj)
}