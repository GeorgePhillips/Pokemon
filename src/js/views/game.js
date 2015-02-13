(function (App) {
  var GameView = Backbone.View.extend({
    views: [],

    initialize: function() {
      this.controls = new Controls({});

      var player = this.model = new Player({
        x: 0,
        y: 0
      });

      this.worldView = new WorldView({
        model: this.model,
        game: this
      });

      // console.log(this.model);
      // this.battleView = new BattleView({
      //   player: this.model,
      //   game: this
      // }).render();

      // this.battleView.$el.appendTo("#game");
      // console.log(this.battleView);
    }
  });

  App.GameView = GameView;
})(window);
