function selectOption() {
    const paymentModeSelected = document.querySelector('input[name="payment-mode"]:checked').value;

    switch (paymentModeSelected) {
        case "online-payment":
            window.location.href = 'page/tela3.html';
            break;
        case "delivery-payment":
            window.location.href = 'page/delivery-payment-processing.html';
            break;
    }
}

function initialize() {
    const radios = document.querySelectorAll('input[type="radio"][name="payment-mode"]');
    const btn = document.querySelector("#payment-mode-selector");
    const paymentModeSelected = document.querySelector('input[name="payment-mode"]:checked').value;

    btn.innerText = getButtonText(paymentModeSelected);

    radios.forEach(radio => {
      radio.addEventListener('change', (event) => {
        if (event.target.checked) {
          btn.innerText = getButtonText(event.target.value);
        }
      });
    });
}

function getButtonText(value) {
    return value === "delivery-payment" 
            ? "Seguir com Pagamento na Entrega" 
            : "Seguir com Pagamento Online";
}