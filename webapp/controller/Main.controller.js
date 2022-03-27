sap.ui.define([
    "sap/ui/core/mvc/Controller",
 ], function (Controller) {
  
    return Controller.extend("tom.controller.Main", 
                 
       {     
        onInit: function () {
 
           this.oView=this.getView();
                            },
                  myFunction: function () {
                   
                        var okuldeep=sap.ui.getcore().byId("idSpidy");
                        var sVal=okuldeep.getValue();
                        alert(sVal)
                   } ,
                   enableBtn: function () {
                   
                   
               } 
          });
       })