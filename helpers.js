module.exports = {
      elementHelper : {
          sendKeys : function (webElem, value) {
              return webElem.clear().sendKeys(value);
          }
      },

      browserHelper : {

      }
};