const {defineSupportCode} = require('cucumber')
const fs = require('fs')
//const {exec} = require('child_process')

/**
 * In this file all steps are included, which are documenting the 
 * different actions a user of the toolchain can do.
 *
 * As this file is meant to be used as a documentation goto point
 * please make sure, that you document all the steps and don't
 * generalize as you would do in the other files.
 */

defineSupportCode(function({Given, Then}) {
  Given(/created a file `(.*)` with content:/, function (fileName, docString, callback) {
    fs.writeFile(fileName, docString, callback)
  })

  Then(/there should be a "(.*)"/, function(fileName, callback) {
    fs.exists(fileName, function(exists) {
      if (exists) {
        callback();
      } else {
        callback("File " + fileName + " does not exist");
      }
    });
  })
})
