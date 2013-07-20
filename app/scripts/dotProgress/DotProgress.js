var dotProgress;
(function (dotProgress) {
    var DotProgress = (function () {
        function DotProgress(canvas, options) {
            this.defaults = {
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
            options = jigg.utils.applyObjectDefaults(options, this.defaults);

            this.dots = new dotProgress.Dots(options);

            this.setCanvas(canvas);
            this.setDimensions(options.width, options.height);
            this.setOffset(options.offsetX, options.offsetY);

            createjs.Ticker.addEventListener("tick", $.proxy(this.tickHandler, this));
        }
        DotProgress.prototype.setCanvas = function (c) {
            this.stage = new createjs.Stage(c);
            this.stage.addChild(this.dots);
        };

        DotProgress.prototype.setDimensions = function (w, h) {
            this.dots.scaleX = w / this.defaults.width;
            this.dots.scaleY = h / this.defaults.height;
        };

        DotProgress.prototype.setOffset = function (oX, oY) {
            this.dots.x = oX;
            this.dots.y = oY;
        };

        DotProgress.prototype.start = function () {
        };

        DotProgress.prototype.stop = function () {
        };

        DotProgress.prototype.tickHandler = function () {
            this.stage.update();
        };

        DotProgress.prototype.remove = function () {
            this.stop();

            this.dots.remove();
            delete this.dots;
        };
        return DotProgress;
    })();
    dotProgress.DotProgress = DotProgress;
})(dotProgress || (dotProgress = {}));
//@ sourceMappingURL=DotProgress.js.map
