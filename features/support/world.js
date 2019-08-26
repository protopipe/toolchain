require('chromedriver')
var {defineSupportCode} = require('cucumber')

function CustomWorld() {
  this.workingDir = process.cwd()
  this.driver = null;
  this.currentDirectory = null
  this.cleanupCallbacks = new Array()
  this.cmdStdout = null
  this.cmdStderr = null
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})
