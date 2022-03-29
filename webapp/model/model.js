sap.ui.define([
    "sap/ui/core/json/JSONModel"
], function(JSONModel) {
    'use strict';
      createMyJSONModel: function (param){
        // step1 create a brand mew model 
        var oSpiderman = new sap.ui.model.json.JSONModel();
        //set up or load the data
        oModel.setData({
            "empStr": {
                "empId": 100,
                "empName": "ajil",
                "salary": 9500,
                "currency": "euro",
                "sherlok": false
            }

        })

    }
});
