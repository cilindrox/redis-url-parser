exports.parse = function (url) {
  var options = {}

  if (url) {
    var rtg = require('url').parse(url)
    options.port = rtg.port
    options.host = rtg.hostname
    options.password = rtg.auth.split(':')[1]
  }

  return options
}
