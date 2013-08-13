# opurl

URL utility. Work with the path portion of URLs. Expose the same API as [opath](https://github.com/curvedmark/opath);

## Installation

	npm install opurl

## Example

```javascript
var Url = require('opurl');

var url = new Url('http://example.com/foo/bar?q=search#hash').dirname();
url.toString() === 'http://example.com/foo?q=search#hash';
```