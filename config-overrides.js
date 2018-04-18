const rewirePreact = require('react-app-rewire-preact')

module.exports = function override(config, env) {
  config = rewirePreact(config, env)
  return config
}
