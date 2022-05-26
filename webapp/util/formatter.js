sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function (NumberFormat) {

    return {

        changeNameToUC: function (inp) {
            if (inp) {
                return inp.toUpperCase();
            }

        }, 
        formatCurrency:function(amount,curr){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(amount, curr);
        }
    }
});
