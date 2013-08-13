var Path = require('opath');
var urlRe = /^((?:\w+:)?\/\/[^\/]+)(\/[^?#]*|)((?:\?[^#]*)?(?:#.*)?)/;

module.exports = Url;

function Url(url) {
	var head, tail;

	if (url) {
		var result = urlRe.exec(url);
		Path.call(this, result[2] || '/');
		head = result[1];
		tail = result[3];
	} else {
		Path.call(this, '');
		head = '';
		tail = '';
	}

	this._head = head;
	this._tail = tail;
}

Url.prototype = Object.create(Path.prototype);

var toString = Path.prototype.toString;
Url.prototype.toString = function () {
	return this._head + toString.call(this) + this._tail;
};

Url.prototype.clone = function () {
	return this._clone(new Url());
};

var _clone = Path.prototype._clone;
Url.prototype._clone = function (url) {
	_clone.call(this, url);
	url._head = this._head;
	url._tail = this._tail;
	return url;
};