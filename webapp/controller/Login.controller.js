sap.ui.define([
   "tom/controller/BaseController",
], function (Controller) {

   return Controller.extend("tom.controller.Login",

      {
         onInit: function () {

         },
         onLogin: function () {
            var oInpUser = this.oView.byId("idUser");
            var oPassword = this.oView.byId("idPassword");
            var sUser = oInpUser.getValue();
            var sPassword = oPassword.getValue();


            if (sUser === "" || sPassword === "") {
               alert("please enter at least some value")
               return
            }

            if (sUser === sPassword) {
               document.write("login")
            } else {
               alert("something is wrong")
            }

         }
      });
})