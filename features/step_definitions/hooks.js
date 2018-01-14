const {defineSupportCode} = require('cucumber')
const fs = require('fs-extra')

defineSupportCode(function({BeforeAll, After}) {

  /**
   * Make sure every Testrun starts with a clean state,
   * but keep the examples directory for documentation purposes
   */
  BeforeAll(function(cb) {
    fs.removeSync('./examples')
    fs.mkdir('./examples', cb)
  })

  After(function() {
    this.cleanupCallbacks.forEach(function(f) {
      f()
    })
    process.chdir(this.workingDir)
  })

})
