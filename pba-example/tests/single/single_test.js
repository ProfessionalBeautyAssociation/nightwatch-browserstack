module.exports = {
  'PBA cookie consent functionality' : function (browser) {
    browser
      .url('https://www.probeauty.org')
      .waitForElementPresent('body', 1000, false)
      .click('#cookie-notice-btn')
      .waitForElementNotVisible('#cookie-notice-btn', 2000)
      .getCookie('cookie-consent', function callback(result) {
        this.assert.equal(result.value, 'true');
        this.assert.equal(result.name, 'cookie-consent');
      })
      .end();
  }
};
