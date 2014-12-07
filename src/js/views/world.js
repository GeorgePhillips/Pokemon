(function (App) {
    var WorldView = Backbone.View.extend({
        events: {},

        initialize: function(options) {

            this.redraw();
        },

        redraw: function () {
            var $canvas = $("#canvas"),
                context = $canvas.get(0).getContext('2d'),
                width = $(window).width(),
                height = $(window).height(),
                tileSize = 33;

            $canvas.attr("width", width).attr("height", height);

            context.fillStyle = '#0000DD';
            for (x = 0; x < width; x += tileSize) {
                for (y = 0; y < height; y += tileSize) {
                    context.fillRect (x, y, tileSize - 1, tileSize - 1);
                }
            }

            // context.fillStyle = '#000000';
            // context.fillRect ( VIEW_WIDTH/2 - 10, VIEW_HEIGHT/2 - 10, 20, 20 );
            // context.fillStyle = '#FFFFFF';
            // context.fillRect ( VIEW_WIDTH/2 - 7, VIEW_HEIGHT/2 - 7, 14, 14); 
        }
    });

    App.WorldView = WorldView;
})(window);