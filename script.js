$(document).ready(function () {
    $("#convert").click(function () {
        var amount = parseFloat($("#amount").val());
        var fromCurrency = $("#from").val();
        var toCurrency = $("#to").val();

        $.ajax({
            url: "https://api.exchangerate-api.com/v4/latest/" + fromCurrency,
            method: "GET",
            success: function (data) {
                var exchangeRate = data.rates[toCurrency];
                var convertedAmount = amount * exchangeRate;
                $("#result").text(amount + " " + fromCurrency + " is equal to " + convertedAmount.toFixed(2) + " " + toCurrency);
            },
            error: function () {
                $("#result").text("Error fetching exchange rates. Please try again later.");
            }
        });
    });
});