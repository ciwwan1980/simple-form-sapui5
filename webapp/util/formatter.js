sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function (NumberFormat) {

    return {

        changeNameToUC: function (inp) {
            if (inp) {
                return inp.toUpperCase();
            }

        }, 
        formatCurrency:function(){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                currencyCode: false
            });
            return oCurrencyFormat.format(1.21, "EUR");
        }
    }
});
