function showPaymentOptions() {
    const options = [
        {
            img_path: "../assets/credit-card.png",
            alt: "Cartão",
            title: "Cartão de Débito ou Crédito",
            t1: "O entregador levará uma maquininha para que você possa inserir ou aproximar seu cartão e digitar sua senha.",
            t2: "Aceitamos as principais bandeiras como <strong>Visa</strong>, <strong>Mastercard</strong>, <strong>Elo</strong>, entre outras."
        },
        {
            img_path: "../assets/money.png",
            title: "Dinheiro",
            alt: "Dinheiro",
            t1: "Se preferir pagar em dinheiro, é só entregar o valor diretamente ao entregador.",
            t2: "Ah! Se precisar de troco, tente avisar no campo de observação do pedido para que ele leve o valor certinho."
        },
        {
            img_path: "../assets/pix.png",
            title: "Pix",
            alt: "Pix",
            t1: "O entregador mostrará um QR Code ou chave Pix para que você possa fazer a transferência na hora.",
            t2: "Você usa o aplicativo do seu banco para escanear o código e confirmar o pagamento rapidinho."
        }
    ]

    document.querySelector(".cards").innerHTML = options.map(o => PaymentOptionCard(o)).join(" ");
}

const PaymentOptionCard = ({img_path, alt, title, t1, t2}) => `
    <div class="card">
      <img src="${img_path}" alt="${alt}">
      <h2>${title}</h2>
      <p>${t1}</p>
      <p>${t2}</p>
    </div>
`