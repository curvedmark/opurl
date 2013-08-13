var assert = require('./assert');
var Url = require('..');

test('toString()', function () {
	assert.equal(new Url('http://a.com/'), 'http://a.com/');
	assert.equal(new Url('http://a.com'), 'http://a.com/');
	assert.equal(new Url('http://a.com/abc'), 'http://a.com/abc');
	assert.equal(new Url('http://a.com/abc?foo'), 'http://a.com/abc?foo');
	assert.equal(new Url('http://a.com/abc#bar'), 'http://a.com/abc#bar');
	assert.equal(new Url('http://a.com/abc?foo#bar'), 'http://a.com/abc?foo#bar');
	assert.equal(new Url('http://a.com/abc/'), 'http://a.com/abc/');
	assert.equal(new Url('http://a.com/abc/?foo'), 'http://a.com/abc/?foo');
	assert.equal(new Url('http://a.com/abc/#bar'), 'http://a.com/abc/#bar');
	assert.equal(new Url('http://a.com/abc/?foo#bar'), 'http://a.com/abc/?foo#bar');
});

test('dirname()', function () {
	assert.equal(new Url('http://a.com/foo/bar').dirname(), 'http://a.com/foo');
});