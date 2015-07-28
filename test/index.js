var expect = require('chai').expect

var parser = require('../')

describe('URL parser', function () {

  it('parses a redis url', function (done) {

    var url = 'redis://:secrets@example.com:1234/9?foo=bar&baz=qux'
    var opts = parser.parse(url)

    expect(opts).to.have.keys('host', 'port', 'password')

    expect(opts.host).to.equal('example.com')
    expect(opts.port).to.equal('1234')
    expect(opts.password).to.equal('secrets')

    done()
  })

  it('returns an empty object', function (done) {

    expect(parser.parse(null)).to.be.empty
    done()
  })
})
