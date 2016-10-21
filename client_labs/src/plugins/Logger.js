(function () {
  function Logger (Vue, options) {
    Vue.prototype.$logger = function (level, ...message) {
      var levelDef = {
        info: 'info',
        error: 'error',
        warn: 'warn',
        log: 'log'
      }
      level = level || levelDef.info
      if (options.loggin) {
        console[level](message)
      }
    }
    Vue.$logger = function (level, ...message) {
      var levelDef = {
        info: 'info',
        error: 'error',
        warn: 'warn',
        log: 'log'
      }
      level = level || levelDef.info
      if (options.loggin) {
        console[level](message)
      }
    }
  }
  module.exports = Logger
})()
