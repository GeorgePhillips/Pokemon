var Map = Backbone.Model.extend({

  sprite: function (x, y) {
    return this._sprite(this.get("grid")[x][y]);
  },

  _sprite: function (item) {
    var sprite = this.get("sprite"),
      column = item % sprite.columns,
      row = Math.floor(item / sprite.columns);

    return {
      item: item,
      img: sprite.img,
      size: sprite.size,
      sx: Math.floor((sprite.size + sprite.gap) * column),
      sy: Math.floor((sprite.size + sprite.gap) * row)
    };
  },

  canMoveTo: function (x, y) {
    var whitelist = this.get("whitelist"),
      grid = this.get("grid");

    return grid.length > y && grid[y].length > x && _.contains(whitelist, grid[y][x]);
  },

  draw: function (iteratee, context) {
    var grid = this.get("grid");
    for (x = 0; x < grid.length; x++) {
      for (y = 0; y < grid[x].length; y++) {
        iteratee.apply(context, [x, y, this.sprite(x, y), this._sprite(184)]);
      }
    }
  }

});