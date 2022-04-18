sap.ui.define([
    "ibm/fin/ar/controller/BaseController",
    "ibm/fin/ar/models/model"
], function (Controller,model) {

    return Controller.extend("ibm.fin.ar.controller.Main", {

        onInit: function () {

          
            var oSpiderman = model.createMyJSONModel("models/mockdata/sample.json"); 
            // var oIronman = model.createMyJSONModel("models/mockdata/sample1.json");
        
            sap.ui.getCore().setModel(oSpiderman)
            // sap.ui.getCore().setModel(oIronman, "anya")
    
             this._bindValue(); 
            //  this.onRowSelect()
         
          
        },

            _bindValue: function(){
          
                
            // var oSalary = this.getView().byId("idSalary");
           
            var oCurr = this.getView().byId("idCurr");
            oCurr.bindProperty("value", "/empStr/currency")
          
           
            },
 
            onRowSelect:function(oEvent){

           
                var oModel=sap.ui.getCore().getModel(); 
                // console.log(oModel.getProperty(oEvent.getParameter("rowContext").getPath()))
                var sRowData=oModel.getProperty(oEvent.getParameter("rowContext").getPath())
                oModel.setProperty("/empStr",sRowData )
              
            },

            oCore:sap.ui.getCore(),
            onChange:function(){
                var oSpiderman=this.oCore.getModel();
                var oIronman=this.oCore.getModel("anya");
                sap.ui.getCore().setModel(oSpiderman, "anya");
                sap.ui.getCore().setModel(oIronman)
            },

            mario: false, 
            onMagic: function () {
            
            if(this.mario===true){
                this.mario=false;
            }else{
                this.mario=true;
            }

            var oModel= this.getView().getModel();
            console.log(oModel, "oModel")
            oModel.setProperty("/empStr/sherlok", this.mario)
        }
        

    });
})
