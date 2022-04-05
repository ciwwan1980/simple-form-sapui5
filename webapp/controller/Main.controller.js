sap.ui.define([
    "ibm/fin/ar/controller/BaseController",
    "ibm/fin/ar/models/model"
], function (Controller,model) {

    return Controller.extend("ibm.fin.ar.controller.Main", {

        onInit: function () {

        //   var oSpiderman= model.createMyJSONModel()
            ///steps 1: create a brand new model object 
            // steps 2- set or load date in the model
            //steps 3- make a model awar to the application
            var oSpiderman=model.createMyJSONModel("models/mockdata/sample.json"); 
            var oIronman=model.createMyJSONModel("models/mockdata/sample1.json");


            // i shall save them in variable in case if i have 2 models
            // the first oen is default one 
            this.getView().setModel(oSpiderman)
           this.getView().setModel(oIronman, "anya")
        //    var oSalary = this.getView().byId("idSalary");
        //    oSalary.bindValue("/empStr/salary");
        //    var oCurr = this.getView().byId("idCurr");
        //    oCurr.bindProperty("value", "/empStr/currency")

             this._bindValue()
        },
        // complex-depening on ID in View

            _bindValue: function(){
               //steps4: binding - 4 ways we can do binding-syntac
            var oSalary = this.getView().byId("idSalary");
            oSalary.bindValue("/empStr/salary");
            var oCurr = this.getView().byId("idCurr");
            oCurr.bindProperty("value", "/empStr/currency")
            // oCurr.bindProperty("enabled", "/empStr/sherlok")
           
            },
           
            mario: false, 
            onMagic: function () {
            
        //technique number 2- 
            // var aForm = this.getView().byId("simpleForm");
            // var aContent = aForm.getContent();
            // for (let i = 0; i <aContent.length; i++) {
            //     const element = aContent[i];
            //   if(element.getMetadata().getName()==="sap.m.input"){
            //         element.setEnabled(true)
            //   }  

            // }

            if(this.mario===true){
                this.mario=false;
            }else{
                this.mario=true;
            }

        //technique number 3- 
            
            //1- get the model of the object again, after we set the model in onint 
            // sap.ui.getCore().setModel(oSpiderman), we get it again below
            var oModel= this.getView().getModel();
            //2-change the value in the model for scherlock 
            console.log(oModel, "oModel")
            oModel.setProperty("/empStr/sherlok", this.mario)
        }

    });
})
