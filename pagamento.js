function selectOption() {
    const paymentModeSelected = document.querySelector('input[name="payment-mode"]:checked').value;

    switch (paymentModeSelected) {
        case "online-payment":
            window.location.href = '/pages/tela3.html';
            break;
        case "delivery-payment":
            window.location.href = '/pages/delivery-payment-processing.html';
            break;
    }
}