module.exports = {
      elementHelper : {
          setElementValue : function (webElem, value) {
              return webElem.clear().sendKeys(value);
          },

          login: function (loginValue, passwordValue ,loginElem, passwordElem) {
            this.setElementValue(loginElem, loginValue);
            return this.setElementValue(passwordElem, passwordValue);
          }
      },

      browserHelper : {

      }
};