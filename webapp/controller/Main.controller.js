sap.ui.define([
    "ibm/fin/ar/controller/BaseController",
], function (Controller) {

    return Controller.extend("ibm.fin.ar.controller.Main", {


        onInit: function () {


            ///steps 1: create a brand new model object 
            var oSpiderman = new sap.ui.model.json.JSONModel();
            // steps 2- set or load date in the model
            oSpiderman.setData({
                "empStr": {
                    "empId": 100,
                    "empName": "ajil",
                    "salary": 9500,
                    "currency": "euro",
                    "sherlok": false
                }

            })
            //steps 3- make a model awar to the application
            sap.ui.getCore().setModel(oSpiderman)

            // //steps4: binding - 4 ways we can do binding-syntac
            // var oSalary = this.getView().byId("idSalary");
            // oSalary.bindValue("/empStr/salary");
            // var oCurr = this.getView().byId("idCurr");
            // oCurr.bindProperty("value", "/empStr/currency")
            // oCurr.bindProperty("enabled", "/empStr/sherlok")

        },
        // complex-depening on ID in View
        onMagic: function () {
            var aForm = this.getView().byId("simpleForm");
            var aContent = aForm.getContent();
            for (let i = 0; i <aContent.length; i++) {
                const element = aContent[i];
              if(element.getMetadata().getName()==="sap.m.input"){
                    element.setEnabled(true)
              }  

            }
        }

    });
})
