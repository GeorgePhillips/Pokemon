(function (App) {
  var GameView = Backbone.View.extend({
    views: [],

    initialize: function() {
      this.controls = new Controls({});

      var player = this.model = new Player({
        x: 10, 
        y: 4
      });

      var map, sprite = new Image();
      sprite.src = "assets/images/world.png";
      sprite.onload = function () {
        map.trigger("sprite:load");
      };

      var GRASS = 184;
      var BUSH = 52;
      var WALL_TL = 1;
      var WALL_T = 2;
      var WALL_TR = 3;
      var WALL_L = 51;
      var WALL_R = 53;
      var WALL_BL = 101;
      var WALL_B = 102;
      var WALL_BR = 103;

      var buildingStart = 50 * 4 - 1;

      var options = {
        sprite: {
          img: sprite,
          size: 16,
          gap: 1,
          columns: 50
        },
        whitelist: [GRASS, buildingStart + 203],
      }

      var smallMap = new Map(_.extend(options, {
        grid: [
          [WALL_TL, WALL_T, WALL_T, WALL_T, WALL_TR],
          [WALL_L, GRASS, GRASS, GRASS, WALL_R],
          [WALL_L, GRASS, GRASS, GRASS, WALL_R],
          [WALL_BL, WALL_B, GRASS, WALL_B, WALL_BR]
        ]
      }));

      map = new Map(_.extend(options, {
        grid: [
          [GRASS, GRASS, buildingStart + 1, buildingStart + 2, buildingStart + 3, buildingStart + 4, buildingStart + 5, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS],
          [GRASS, WALL_TL, buildingStart + 51, buildingStart + 52, buildingStart + 53, buildingStart + 54, buildingStart + 55, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_T, WALL_TR, GRASS],
          [GRASS, WALL_L, buildingStart + 101, buildingStart + 102, buildingStart + 103, buildingStart + 104, buildingStart + 105, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL_R, GRASS],
          [GRASS, WALL_L, buildingStart + 151, buildingStart + 152, buildingStart + 153, buildingStart + 154, buildingStart + 155, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, BUSH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL_R, GRASS],
          [GRASS, WALL_L, buildingStart + 201, buildingStart + 202, buildingStart + 203, buildingStart + 204, buildingStart + 205, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, BUSH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL_R, GRASS],
          [GRASS, WALL_L, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, BUSH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL_R, GRASS],
          [GRASS, WALL_L, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL_R, GRASS],
          [GRASS, WALL_L, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, BUSH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL_R, GRASS],
          [GRASS, WALL_L, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, BUSH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL_R, GRASS],
          [GRASS, WALL_BL, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_B, WALL_BR, GRASS],
          [GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS]
        ],
        doors: [{
          coordinates: [4, 4],
          map: smallMap,
          landing: [2, 2]
        }]
      }));

      smallMap.set("doors", [{
        coordinates: [2, 3],
        map: map,
        landing: [4, 5]
      }])

      this.worldView = new WorldView({
        model: this.model,
        game: this,
        map: map
      });

      // this.battleView = new BattleView({
      //   player: this.model,
      //   game: this
      // }).render();

      // this.battleView.$el.appendTo("#game");
    }
  });

  App.GameView = GameView;
})(window);
