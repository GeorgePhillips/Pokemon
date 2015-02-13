(function (App) {
  var keys = {
    // WASD
    "68": "rightKeyPressed",
    "65": "leftKeyPressed",
    "87": "upKeyPressed",
    "83": "downKeyPressed",

    // ARROWS
    "39": "rightKeyPressed",
    "37": "leftKeyPressed",
    "38": "upKeyPressed",
    "40": "downKeyPressed"
  };

  App.Controls = Backbone.Model.extend({
    initialize: function() {
      this.resetKeys();
      document.addEventListener('keydown', _.bind(this.keyDown, this), false);
      document.addEventListener('keyup', _.bind(this.keyUp, this), false);
    },

    resetKeys: function () {
      for (var keyCode in keys) {
        var key = keys[keyCode];
        this.set(key, false);
      }
    },

    pressed: function (key) {
      return this.get(key + "KeyPressed");
    },

    keyDown: function(e) {
        if (e.keyCode in keys) {
          var key = keys[e.keyCode];

          this.trigger("press:" + key.replace(/KeyPressed$/, ""), this);
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
})(window);
