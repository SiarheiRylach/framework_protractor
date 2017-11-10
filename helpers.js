module.exports = {
      elementHelper : {
          setElementValue : function (value, webElem) {
              return webElem.clear().sendKeys(value).sendKeys(protractor.Key.TAB);
          },

          login: function (loginValue, passwordValue ,loginElem, passwordElem, submitBtn) {
            this.setElementValue(loginValue, loginElem);
            this.setElementValue(passwordValue, passwordElem);
            return submitBtn.click();
          },

          setElementValueWithWait: function (value, webElem, timeout) {
              browser.wait(EC.visibilityOf(webElem, timeout));
              return this.setElementValue(value, webElem);
          },

          clickWithWait: function (webElem, timeout) {
              browser.wait(EC.visibilityOf(webElem, timeout));
              return webElem.click();
          },
      },

      browserHelper : {

      }
};