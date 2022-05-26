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
           
            // var oCurr = this.getView().byId("idCurr");
            // oCurr.bindProperty("value", "/empStr/currency")
          
           
            },
 
            onRowSelect:function(oEvent){

                //technique number 1- deep copy the value
                // var oModel=sap.ui.getCore().getModel(); 
                // // console.log(oModel.getProperty(oEvent.getParameter("rowContext").getPath()))
                // var sRowData=oModel.getProperty(oEvent.getParameter("rowContext").getPath())
                // var copyData=JSON.parse(JSON.stringify(sRowData))
                // oModel.setProperty("/empStr",copyData )
                   //technique number 2


                //    if (oEvent.getParameter("userInteraction")) {
                //     var sPath=oEvent.getParameter("rowContext").getPath();
                //     console.log(sPath, "sPath----------------")
                //     var oSimpleForm=this.getView().byId("idNew");
                //     oSimpleForm.bindElement(sPath);
                //    }
                // var sPath=oEvent.getParameter("rowContext").getPath();
                // console.log(sPath, "sPath----------------")
                // var oSimpleForm=this.getView().byId("idNew");
                // oSimpleForm.bindElement(sPath);
                
                   if (oEvent.getParameter("rowContext") !== null && oEvent.getParameter("rowContext") !== undefined) {   
                        var sPath=oEvent.getParameter("rowContext").getPath();
                        console.log(sPath, "sPath----------------")
                        var oSimpleForm=this.getView().byId("idNew");
                        oSimpleForm.bindElement(sPath);
                   }
            },

            oCore:sap.ui.getCore(),
            onChange:function(){
                var oSpiderman=this.getView().getModel();
                var oIronman=this.getView().getModel("anya");
                this.getView().setModel(oSpiderman, "anya");
                this.getView().setModel(oIronman)
            },
            
            onDeletRaw:function(){
                // debugger;
                var oModel= this.getView().getModel();
                var aData= oModel.getProperty("/empTab"); 
                var sIndex= this.getView().byId("idTable").getSelectedIndices()[0]; 
                console.log(sIndex, "index--------------------")
                aData.splice(sIndex, 1); 
                oModel.setProperty("/empTab", aData); 

            },

            mario: false, 
            onMagic: function () {
            
            if(this.mario===true){
                this.mario=false;
            }else{
                this.mario=true;
            }

            var oModel= this.getView().getModel();
            console.log(oModel, "oModel");
            oModel.setProperty("/empStr/sherlok", this.mario)
        }, 
    
       
        
    });
})
