function selectOption() {
    const paymentModeSelected = document.querySelector('input[name="payment-mode"]:checked').value;

    switch (paymentModeSelected) {
        case "online-payment":
            window.location.href = 'pages/online-payment-options.html';
            break;
        case "delivery-payment":
            window.location.href = 'pages/delivery-payment-processing.html';
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

function showPaymentModes() {
  const options = [
    {
      name: "online-payment",
      img_path: "assets/online-payment.png",
      alt: "online payment",
      checked: true
    },
    {
      name: "delivery-payment",
      img_path: "assets/delivery-payment.png",
      alt: "delivery payment",
      checked: false
    }
  ]

  const optionsBody = options.map(o => PaymentModeOption(o)).join("");

  document.querySelector(".options").innerHTML = optionsBody;
}

const PaymentModeOption = ({name, img_path, alt, checked}) => `
  <div class="option">
    <label for="${name}">
    <img src="${img_path}" alt="${alt}" />
    </label>
    
    <input type="radio" name="payment-mode" id="${name}" value="${name}" ${checked ? "checked" : ""}/>
  </div>
`