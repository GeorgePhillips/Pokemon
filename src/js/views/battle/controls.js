var BattleControlsView = Backbone.View.extend({
    tagName: "div",
    className: "messages",
    events: {
    	"click .back": "returnFromAlternative",
    	"click .fight": "goToAlternative",
    	"click .action": "doAction"
    },

    initialize: function() {
    },

    returnFromAlternative: function () {
    	this.$(".control-wrapper").removeClass("alternate-controls-active");
    	return false;
    },

    goToAlternative: function () {
    	this.$(".control-wrapper").addClass("alternate-controls-active");
    	return false;
    },

    doAction: function (e) {
    	var action = $(e.currentTarget).data("action");
    	return false;
    },

    render: function() {
        this.$el.html(JST["battle/controls"]({
            pokemon: this.model.currentPokemon()
        }));
        return this;
    }

});