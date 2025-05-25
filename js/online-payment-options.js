function selectOnlinePaymentOption(option) {
    let paymentOption;

    if(option === "pix") {
        paymentOption = PixPayment();
    } else {
        paymentOption = CardPayment();
    }
    document.querySelector(".selected-payment-option").innerHTML = paymentOption;
    
}

function continuePixPayment() {
    document.querySelector(".selected-payment-option").innerHTML = MockPixData();
}

function completePayment() {
     window.location.href = 'payment-finished.html';
}

const CardPayment = () => `
   <h3> Meio de pagamento selecionado: <span class="payment-option"> Cartão </span> </h3>
   <div class="card-payment">
    <div>
        <label for="card-number">Numero do cartão</label>
        <input type="text" id="card-number"/>
    </div>
    
    <div>
        <label for="card-name">Nome do cartão</label>
        <input type="text" id="card-name"/>
    </div>

    <div>
        <label for="expiration-date">Data de expiração</label>
        <input type="text" id="expiration-date" placeholder="xx/xxxx"/>
    </div>

    <div>
        <label for="cvv-code"> Código de segurança (CVV) </label>
        <input type="text" id="cvv-code"/>
        <span class="cvv-explanation"> O que é CVV? </span>
    </div>

    <button onclick="completePayment()"> Prosseguir </button>
  </div>
`

const PixPayment = () => `
    <h3> Meio de pagamento selecionado: <span class="payment-option"> Pix </span> </h3>
    <div class="pix-payment">
        <div>
            <label for="user-name">Nome</label>
            <input type="text" id="user-name"/>
        </div>
        <div>
            <label for="user-cpf">CPF</label>
            <input type="text" id="user-cpf"/>
        </div>
    </div>

    <button onclick="continuePixPayment()"> Gerar QR Code </button>

    <div class="qr-code"> </div>
`

const MockPixData = () => `
    <h3> Leia o QR Code abaixo ou use o codigo fornecido e prossiga com o pagamento </h3>
    <div class="pix-data">
        <img class="pix-qr-code" src="../assets/mock_pix_qr.png" alt="pix-qr-code">
        <p class="pix-text-code">00020126580014BR.GOV.BCB.PIX0136798123456785204000053039865405100.005802BR5912FULANO DE TAL6009SÃO PAULO61080540900062070503***6304ABCD</p>
    </div>
    <button onclick="completePayment()"> Prosseguir </button>
`