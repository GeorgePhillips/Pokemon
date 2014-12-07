var BattleOpponentView = Backbone.View.extend({
    tagName: "div",
    className: "opponent-wrapper slideInLeft",
    events: {},

    initialize: function() {
    },

    render: function() {
        this.$el.html(JST["battle/opponent"]({
            pokemon: new Pokemon({
                "number": 151,
                "level": 10,
                "wild": true,
                "health": 13,
                "maxHealth": 13
            })
        }));
        return this;
    }

});