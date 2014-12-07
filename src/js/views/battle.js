var BattleView = AbstractGameInterface.extend({

    tagName: "section",
    className: "notched",

    events: {},

    opponentView: null,
    playerView: null,
    controlsView: null,

    initialize: function(options) {
        this.opponentView = new BattleOpponentView({
            model: options.opponent
        });
        
        this.playerView = new BattlePlayerView({
            model: options.player
        });
        
        this.controlsView = new BattleControlsView({
            model: options.player
        });
    },

    render: function() {
        this.$el.html(JST["battle/layout"]());

        this.$(".battle-screen")
            .append(this.opponentView.render().el)
            .append(this.playerView.render().el)
            .append(this.controlsView.render().el);
        return this;
    }

});