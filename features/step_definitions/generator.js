const {defineSupportCode} = require('cucumber')
const fs = require('fs')
const {exec} = require('child_process')

/**
 * This is just a shortcut to not having the need to publish the generator each time.
 */

defineSupportCode(function({Given/*, Then*/}) {

  Given('I ran `yo protopipe simplePage --cli --componentType page`#TODO', { timeout: 20 * 1000 }, function(callback) {
    exec('yo protopipe simplePage --cli --componentType page', { timeout: 20 * 1000 }, (err, stdout, stderr) => {
      if (err) {
        return callback(err)
      }
      this.cmdStdout = stdout
      this.cmdStderr = stderr

      fs.writeFile('./src/templates/index.js', '<html><head></head><body><h1>Hello World</h1></body></html>', err => {
        if (err) {
          return callback(err)
        }
        callback()
      })
    })
  })
})
