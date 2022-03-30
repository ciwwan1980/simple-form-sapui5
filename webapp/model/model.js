sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
   
    return {
    createMyJSONModel: function (){
        // step1 create a brand mew model 
        var oSpiderman = new JSONModel();
        //set up or load the data
        oModel.setData({
            "empStr": {
                "empId": 100,
                "empName": "ajil",
                "salary": 9500,
                "currency": "euro",
                "sherlok": false
            }

        });
        return oModel

    }
   }
});
