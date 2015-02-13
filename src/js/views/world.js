(function (App) {
    var WorldView = AbstractGameInterface.extend({
        events: {},

        initialize: function(options) {
            _.bindAll(this, "checkControls", "redraw");
            this.game = options.game;
            this.listenTo(this.model, "change:x change:y", this.redraw);
            $(window).resize(this.redraw);
            this.redraw();

            this.checkControls();

            this.checkControls = _.throttle(this.checkControls, 200);
        },

        checkControls: function () {
            var position = {
                "x": this.model.get("x"),
                "y": this.model.get("y"),
            };

            increment = 1;

            if (this.game.controls.pressed("right")) {
                position.x += increment;
            }

            if (this.game.controls.pressed("left")) {
                position.x -= increment;
            }

            if (this.game.controls.pressed("down")) {
                position.y += increment;
            }

            if (this.game.controls.pressed("up")) {
                position.y -= increment;
            }

            this.model.set(position);

            requestAnimationFrame(this.checkControls);
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

            // TODO abstract map
            var map = [
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [3,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
              [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
              [3,0,0,0,0,0,0,0,2,1,3,0,0,0,0,0,0,0,0,0,0,0,0,2],
              [3,0,0,0,0,0,0,0,2,1,1,1,3,0,0,0,0,0,0,0,0,0,0,2],
              [3,0,0,0,0,0,0,0,0,0,2,1,1,1,1,3,0,0,0,0,0,0,0,2],
              [3,0,0,0,0,0,0,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,2],
              [3,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
              [3,0,2,1,1,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1],
              [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            ];

            var centerX = this.model.get("x"); // center of player tile
            var centerY = this.model.get("y"); // center of player tile
            var offsetX = width / 2;
            var offsetY = height / 2;

            var tileSize = width / 15;


            // TODO padding tiles
            for (x = 0; x < map.length; x++) {
                for (y = 0; y < map[x].length; y++) {
                    context.fillStyle = colours[map[x][y]];
                    context.fillRect((y - centerX) * tileSize + offsetX, (x - centerY) * tileSize + offsetY, tileSize, tileSize);
                }
            }

            context.fillStyle = '#000';

            var buffer = tileSize * 0.1;
            context.fillRect(
                offsetX, 
                offsetY,
                tileSize, 
                tileSize
            );
        }
    });

    App.WorldView = WorldView;
})(window);