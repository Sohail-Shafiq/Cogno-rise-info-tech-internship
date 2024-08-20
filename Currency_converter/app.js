document.addEventListener("DOMContentLoaded", function () {
    // Fetch and populate currency options
    fetch("https://open.er-api.com/v6/latest")
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            const fromCurrencySelect = document.getElementById("from");
            const toCurrencySelect = document.getElementById("to");

            currencies.forEach(currency => {
                const option = document.createElement("option");
                option.value = currency;
                option.text = currency;
                fromCurrencySelect.add(option);

                const optionTo = document.createElement("option");
                optionTo.value = currency;
                optionTo.text = currency;
                toCurrencySelect.add(optionTo);
            });
        });
});

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;

    fetch(`https://open.er-api.com/v6/latest?base=${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const result = amount * rate;

            document.getElementById("result").innerHTML = `${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error("Error fetching exchange rates:", error);
        });
}

function clearFields() {
    document.getElementById("amount").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("result").innerHTML = "";
}
