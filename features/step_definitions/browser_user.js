const {defineSupportCode} = require('cucumber')
require('chromedriver')
const {Builder, By, Key, until} = require('selenium-webdriver')
const fs = require('fs')


/**
 * In this file all steps are included, which are documenting the 
 * different actions an enduser is doing with his browser.
 *
 * As this file is meant to be used as a documentation goto point
 * please make sure, that you document all the steps and don't
 * generalize as you would do in the other files.
 */



defineSupportCode(function({BeforeAll, AfterAll, When}) {
  BeforeAll(function(cb) {
    this.driver = new Builder()
      .forBrowser('chrome').build()

    cb();
  })

  AfterAll(function() {
    this.driver.quit();

  })

  When(/I visit "(.*)"/, function(url) {
    this.driver.get(url);
  })

})

