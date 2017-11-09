module.exports = {
      elementHelper : {
          setElementValue : function (webElem, value) {
              return webElem.clear().sendKeys(value);
          },

          login: function (loginValue, passwordValue ,loginElem, passwordElem, submitBtn) {
            this.setElementValue(loginElem, loginValue);
            this.setElementValue(passwordElem, passwordValue);
            return submitBtn.click();
          }
      },

      browserHelper : {

      }
};