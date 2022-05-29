sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function (NumberFormat) {

    return {

        changeNameToUC: function (inp) {
            if (inp) {
                return inp.toUpperCase();
            }

        }, 
        
        formatCurrency:function( curr, amount){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                currencyCode: false 
            });

            return oCurrencyFormat.format(curr, amount);
        }, 
        
    }
});
