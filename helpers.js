module.exports = {
      elementHelper : {
          setElementValue : function (value, webElem) {
              return webElem.clear().sendKeys(value);
          },

          login: function (loginValue, passwordValue ,loginElem, passwordElem, submitBtn) {
            this.setElementValue(loginValue, loginElem);
            this.setElementValue(passwordValue, passwordElem);
            return submitBtn.click();
          }
      },

      browserHelper : {

      }
};