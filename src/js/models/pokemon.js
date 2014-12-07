var Pokemon = Backbone.Model.extend({
	defaults: function () {
		return {
			"number": 0,
			"level": 1,
			"name": null,
			"wild": true,
			"experience": 0,
			"health": 1,
			"maxHealth": 1,
			"attack": 1,
			"defense": 1,
			"specialAttack": 1,
			"specialDefense": 1,
			"speed": 1
		}
	},

	constructor: function() {
		this.moves = new Backbone.Collection();
		Backbone.Model.apply(this, arguments);
	},

	fainted: function () {
		return this.get("health") === 0;
	},

	percentAlive: function () {
		return this.get("health") / this.get("maxHealth") * 100;
	},

	name: function () {
		return this.get("name") || this.pokedex().name.toUpperCase();
	},

	pokedex: function () {
		return Pokedex[this.get("number")];
	}
});