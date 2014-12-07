(function (App) {
  var keys = {
    "68": "rightKeyPressed",
    "65": "leftKeyPressed",
    "87": "upKeyPressed",
    "83": "downKeyPressed"
  };

  var GameView = Backbone.View.extend({
    views: [],

    initialize: function() {
      this.model = new Player({});

      document.addEventListener ('keydown', this.keyDown, false);
      document.addEventListener ('keyup', this.keyUp, false);

      this.worldView = new WorldView({
        model: this.model
      });
    },

    keyDown: function(e) {
        if (e.keyCode in keys) {
          var key = keys[e.keyCode];

          this.set(key, true);
        }
    },

    keyUp: function(e) {
        if (e.keyCode in keys) {
          var key = keys[e.keyCode];

          this.set(key, false);
        }
    }
  });

  App.GameView = GameView;
})(window);
