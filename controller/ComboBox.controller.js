sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.m.sample.ComboBox.controller.ComboBox", {
      onInit: function () {
        // set explored app's demo model on this sample
        var oModel = new JSONModel("/countriesExtendedCollection.json");
        this.getView().setModel(oModel, "CC");
      },
    });
  }
);
