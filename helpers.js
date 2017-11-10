module.exports = {
      elementHelper : {
          setElementValue : function (value, webElem) {
              return webElem.clear().sendKeys(value);
          },

          login: function (loginValue, passwordValue ,loginElem, passwordElem, submitBtn) {
            this.setElementValue(loginValue, loginElem);
            this.setElementValue(passwordValue, passwordElem);
            return submitBtn.click();
          },

          setElementValueWithWait: function (value, webElem, timeout) {
              browser.wait(EC.visibilityOf(webElem, timeout));
              this.setElementValue(value, webElem);
          },

          clickWithWait: function (webElem, timeout) {
              browser.wait(EC.visibilityOf(webElem, timeout));
              return webElem.click();
          },
      },

      browserHelper : {

      }
};