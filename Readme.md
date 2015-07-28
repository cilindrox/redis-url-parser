
# redis-url-parser

  A Redis URL parser

[![Build Status](https://travis-ci.org/cilindrox/redis-url-parser.svg)](https://travis-ci.org/cilindrox/redis-url-parser) [![Code Climate](https://codeclimate.com/github/cilindrox/redis-url-parser/badges/gpa.svg)](https://codeclimate.com/github/cilindrox/redis-url-parser) [![Test Coverage](https://codeclimate.com/github/cilindrox/redis-url-parser/badges/coverage.svg)](https://codeclimate.com/github/cilindrox/redis-url-parser/coverage)

## Installation

```bash
npm install --save redis-url-parser
```

## Example

```js

// parses URL for connection options

var redisParser = require('redis-url-parser');
var url = 'redis://user:password@example.com:9876/db';

var options = redisParser.parse(url);

/* options is now
{ 
  host: 'example.com',
  port: 9876,
  password: 'password'
}
*/
```


## License 

(The MIT License)

Copyright (c) 2015 Gaston Festari &lt;cilindrox@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
