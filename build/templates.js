this["JST"] = this["JST"] || {};

this["JST"]["battle/controls"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="control-wrapper">\n\t<div class="alternative-controls">\n\t\t<div class="controls large-controls animated fadeIn">\n\t\t\t<a href="#" class="action" data-action="1">THUNDERSHOCK</a>\n\t\t\t<a href="#" class="action" data-action="2">GROWL</a>\n\t\t\t<a href="#" class="action" data-action="3">THUNDERWAVE</a>\n\t\t\t<a href="#" class="action" data-action="4">--</a>\n\t\t</div>\n\t\t<div class="back">\n\t\t\t<a href="#" class="return">&larr;</a>\n\t\t</div>\n\t</div>\n\n\t<div class="main-controls">\n\t\t<div class="controls animated fadeIn">\n\t\t\t<a href="#" class="fight">FIGHT</a>\n\t\t\t<a href="#" class="pokemon"><sup>P</sup><sub>K</sub><sup>M</sup><sub>N</sub></a>\n\t\t\t<a href="#">ITEM</a>\n\t\t\t<a href="#">RUN</a>\n\t\t</div>\n\n\t\tWhat will ' +
((__t = ( pokemon.name() )) == null ? '' : __t) +
' do?\n\t</div>\n</div>';

}
return __p
};

this["JST"]["battle/layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="battle-screen"></div>\n';

}
return __p
};

this["JST"]["battle/opponent"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="stats-wrapper fadeIn">\n\t<div class="opponent-stats">\n\t\t<h3>' +
((__t = ( pokemon.name() )) == null ? '' : __t) +
'</h3>\n\t\t<span class="level">' +
((__t = ( pokemon.get("level") )) == null ? '' : __t) +
'</span>\n\n\t\t<div class="health-bar">\n\t\t\t<div class="inner-health" style="width: ' +
((__t = ( pokemon.percentAlive() )) == null ? '' : __t) +
'%;"></div>\n\t\t</div>\n\n\t\t<div class="pokeball-icon"></div>\n\t</div>\n\t<div class="opponent-notch"></div>\n</div>\n\n<div class="platform opponent">\n\t<img src="assets/images/pokemon/front/' +
((__t = ( pokemon.get("number") )) == null ? '' : __t) +
'.png">\n</div>\n';

}
return __p
};

this["JST"]["battle/player"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="stats-wrapper fadeIn">\n\t\t<div class="pokemon-stats">\n\t\t<h3>' +
((__t = ( pokemon.name() )) == null ? '' : __t) +
'</h3>\n\t\t<span class="level">' +
((__t = ( pokemon.get("level") )) == null ? '' : __t) +
'</span>\n\n\t\t<div class="health-bar">\n\t\t\t<div class="inner-health" style="width: ' +
((__t = ( pokemon.percentAlive() )) == null ? '' : __t) +
'%;"></div>\n\t\t</div>\n\t\t<span class="health">' +
((__t = ( pokemon.get("health") )) == null ? '' : __t) +
'/' +
((__t = ( pokemon.get("maxHealth") )) == null ? '' : __t) +
'</span>\n\n\t\t<div class="experience-bar">\n\t\t\t<div class="inner-experience" style="width: 10%"></div>\n\t\t</div>\n\t</div>\n\t<div class="pokemon-notch"></div>\n</div>\n\n<div class="platform">\n\t<img src="assets/images/pokemon/back/' +
((__t = ( pokemon.get("number") )) == null ? '' : __t) +
'.png">\n</div>\n';

}
return __p
};