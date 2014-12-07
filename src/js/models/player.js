var Player = Backbone.Model.extend({
  defaults: {
    "money": 0,
    "gender": "MALE",
    "name": "Unknown"
  },

  constructor: function() {
    this.pokemon = new Backbone.Collection();
    this.items = new Backbone.Collection();
    this.seen = new Backbone.Collection();
    this.badges = new Backbone.Collection();

    this.testPokemon = new Pokemon({
      "number": 1,
      "level": 4,
      "health": 8,
      "maxHealth": 13
    });

    Backbone.Model.apply(this, arguments);
  },

  fainted: function () {
  	return false;
  },

  currentPokemon: function () {
    return this.testPokemon; // TODO refactor
  }

});