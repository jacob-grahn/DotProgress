var jigg;
(function (jigg) {
    (function (utils) {
        utils.applyObjectDefaults = function (obj, defaultObj) {
            for (var key in defaultObj) {
                obj[key] = obj[key] || defaultObj[key];
            }
            return (obj);
        };
    })(jigg.utils || (jigg.utils = {}));
    var utils = jigg.utils;
})(jigg || (jigg = {}));
//@ sourceMappingURL=misc.js.map
