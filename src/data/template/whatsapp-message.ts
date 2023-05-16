export const WhatsAppInvoiceMessage = (invoiceRedLine: string, price: string, paymentUrl: string) => 
`
Olá! Eu sou o Mineirinho, seu assistente virtual da LinkNET. 😊
Estou aqui para lembrá-lo que há uma fatura pendente com vencimento para o dia ${invoiceRedLine}, no valor de ${price}. 💰
Para facilitar o pagamento, basta clicar no link abaixo:

${paymentUrl}

Agradecemos antecipadamente pela sua atenção e pela preferência em utilizar nossos serviços. 🙏
Se tiver alguma dúvida ou precisar de suporte adicional, estou à disposição para ajudar. 😊
`;