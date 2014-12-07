var BattlePlayerView = Backbone.View.extend({
    tagName: "div",
    className: "player-wrapper slideInRight",
    events: {},

    initialize: function() {
    },

    render: function() {
        this.$el.html(JST["battle/player"]({
            pokemon: this.model.currentPokemon()
        }))
        return this;
    }
});