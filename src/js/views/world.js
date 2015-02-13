(function (App) {
    var WorldView = AbstractGameInterface.extend({
        events: {},

        initialize: function(options) {
            _.bindAll(this, "checkControls", "redraw");
            this.game = options.game;
            this.map = options.map;
            this.listenTo(this.model, "change:x change:y", this.redraw);
            this.listenTo(this.map, "sprite:load", this.redraw);
            $(window).resize(this.redraw);
            this.redraw();

            this.checkControls();

            this.checkControls = _.throttle(this.checkControls, 100);
        },

        checkControls: function () {
            var position = {
                "x": this.model.get("x"),
                "y": this.model.get("y")
            };

            increment = 1;

            if (this.game.controls.pressed("right") && this.map.canMoveTo(position.x + increment, position.y)) {
                position.x += increment;
            } else if (this.game.controls.pressed("left") && this.map.canMoveTo(position.x - increment, position.y)) {
                position.x -= increment;
            }

            if (this.game.controls.pressed("down") && this.map.canMoveTo(position.x, position.y + increment)) {
                position.y += increment;
            } else if (this.game.controls.pressed("up") && this.map.canMoveTo(position.x, position.y - increment)) {
                position.y -= increment;
            }

            this.model.set(position);

            this.checkCollision();

            requestAnimationFrame(this.checkControls);
        },

        checkCollision: function () {
            var doors = this.map.get("doors");

            for (var i = doors.length - 1; i >= 0; i--) {
                if (this.model.get("x") === doors[i].coordinates[0] &&
                    this.model.get("y") === doors[i].coordinates[1]) {
                    
                    this.map = doors[i].map;
                    this.model.set({
                        "x": doors[i].landing[0],
                        "y": doors[i].landing[1]
                    });
                    break;
                }
            }
        },

        redraw: function () {
            var $canvas = $("#canvas"),
                context = $canvas.get(0).getContext('2d'),
                width = $(window).width(),
                height = $(window).height();

            $canvas.attr("width", width).attr("height", height);

            var colours = {
                0: '#ffffff',
                1: '#aaffff',
                2: '#ffaaff',
                3: '#ffffaa',
                4: '#aaaaaa'
            };
            var centreX = this.model.get("x"),
                centreY = this.model.get("y"),
                offsetX = width / 2,
                offsetY = height / 2,
                tileSize = 16;

            this.map.draw(function (x, y, sprite, fallbackSprite) {
                var sx = (y - centreX) * tileSize + offsetX,
                    sy = (x - centreY) * tileSize + offsetY;

                if (fallbackSprite) {
                    this.drawSprite(context, fallbackSprite, sx, sy, tileSize);
                }

                this.drawSprite(context, sprite, sx, sy, tileSize);
            }, this);

            // TODO padding tile
            context.fillStyle = '#000';

            var buffer = tileSize * 0.1;
            context.fillRect(
                offsetX, 
                offsetY,
                tileSize, 
                tileSize
            );
        },

        drawSprite: function (context, sprite, sx, sy, tileSize) {
            context.drawImage(sprite.img, sprite.sx, sprite.sy, sprite.size, sprite.size, sx, sy, tileSize, tileSize);
        }
    });

    App.WorldView = WorldView;
})(window);