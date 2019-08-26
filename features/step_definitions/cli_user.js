const {defineSupportCode} = require('cucumber')
const fs = require('fs')
const {exec} = require('child_process')

/**
 * In this file all steps are included, which are documenting the * different actions a user of the toolchain can do.
 *
 * As this file is meant to be used as a documentation goto point
 * please make sure, that you document all the steps and don't
 * generalize as you would do in the other files.
 */

defineSupportCode(function({Given, When/*, Then*/}) {


  /**
   * This step is just checking if yoeman is installed as
   * it would not be clean to install it automatically.
   *
   *  `npm install -g yo`
   */
  Given('NPM package {string} is installed globally', { timeout: 10 * 1000}, function (packageName, callback) {
    exec('npm ls --global --json --depth 1', {timeout: 10 * 1000}, (err, stdout) => {
      if (err) {
        return callback(null, err)
      }

      const dependencies = JSON.parse(stdout).dependencies

      if (dependencies[packageName] === undefined) {
        callback(packageName + ' is not installed globally. Please do that manually by executing: `npm install -g `' + packageName)
      } else {
        callback()
      }
    })
  })

  /**
   * This creates a new Folder in the example directory:
   *
   *  `cd examples`
   *  `mkdir {string}`
   */
  Given('I am in a fresh directory {string}', function (folder, callback) {
    this.currentDirectory = './examples/' + folder
    const self = this
    fs.mkdir(this.currentDirectory, function(err) {
      if (err) {
        callback(err)
      }

      process.chdir(self.currentDirectory)
      callback()
    })
  })


  When(/^I r(u|a)n `(.*)`$/,  { timeout: 20 * 1000 }, function (u_a, command, callback) {
    exec(command, { timeout: 20 * 1000 }, (err, stdout, stderr) => {
      if (err) {
        return callback(err)
      }
      this.cmdStdout = stdout
      this.cmdStderr = stderr
      callback()
    })
  })

  When(/I start the webpack-dev-server/, function(callback) {
    this.devServer = exec('npm run start:dev', (err, stdout, stderr) => {
      if (err) {
        return callback(err + '\n' + stderr)
      }
    })

    callback()
  })
})
