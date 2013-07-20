var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dotProgress;
(function (dotProgress) {
    var Dots = (function (_super) {
        __extends(Dots, _super);
        function Dots(options) {
            _super.call(this);
            this.dots = [];
            this.setDotSprite(options.sprite, options.spriteWidth, options.spriteHeight);
            this.createDots(options.rows, options.columns, options.spacing);
        }
        Dots.prototype.setDotSprite = function (sprite, frameWidth, frameHeight) {
            var data = {
                images: [sprite],
                frames: { width: frameWidth, height: frameHeight },
                animations: { inactive: [0], active: [1] }
            };
            this.spriteSheet = new createjs.SpriteSheet(data);
        };

        Dots.prototype.createDots = function (rows, columns, spacing) {
            var dot;
            var num = rows * columns;
            for (var i = 0; i < num; i++) {
                dot = new dotProgress.Dot(this.spriteSheet);
                dot.x = Math.floor(i / rows) * spacing;
                dot.y = (i % rows) * spacing;
                this.dots.push(dot);
                this.addChild(dot);
            }
        };

        Dots.prototype.clearDots = function () {
            var len = this.dots.length;
            var dot;
            for (var i = 0; i < len; i++) {
                dot = this.dots[i];
                dot.remove();
            }
            this.removeAllChildren();
        };

        Dots.prototype.remove = function () {
            this.clearDots();
            delete this.dots;
        };
        return Dots;
    })(createjs.Container);
    dotProgress.Dots = Dots;
})(dotProgress || (dotProgress = {}));
//@ sourceMappingURL=Dots.js.map
