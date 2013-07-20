var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dotProgress;
(function (dotProgress) {
    var Dot = (function (_super) {
        __extends(Dot, _super);
        function Dot(spriteSheet) {
            _super.call(this, spriteSheet);
            this.active = false;
            this.roundX = 0;
            this.roundY = 0;
            this.roundZ = 0;
            this.gotoAndStop('inactive');
        }
        Dot.prototype.activate = function () {
        };

        Dot.prototype.remove = function () {
        };
        return Dot;
    })(createjs.BitmapAnimation);
    dotProgress.Dot = Dot;
})(dotProgress || (dotProgress = {}));
//@ sourceMappingURL=Dot.js.map
