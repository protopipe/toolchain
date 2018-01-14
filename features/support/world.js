require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver')
var {defineSupportCode} = require('cucumber')

function CustomWorld() {
  this.workingDir = process.cwd()
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
  this.currentDirectory = null
  this.cleanupCallbacks = new Array()
  this.cmdStdout = null
  this.cmdStderr = null
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})
