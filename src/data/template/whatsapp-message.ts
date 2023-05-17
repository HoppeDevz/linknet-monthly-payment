export const WhatsAppInvoiceMessage = (firstname: string, lastname: string, invoiceRedLine: string, price: string, paymentUrl: string) => 
`
Olá ${firstname} ${lastname}! Eu sou o Mineirinho, seu assistente virtual da LinkNET. 😊
Estou aqui para lembrá-lo que há uma fatura pendente com vencimento para o dia ${invoiceRedLine}, no valor de ${price}. 💰
Para facilitar o pagamento, basta clicar no link abaixo:

${paymentUrl}

Agradecemos antecipadamente pela sua atenção e pela preferência em utilizar nossos serviços. 🙏
Se tiver alguma dúvida ou precisar de suporte adicional, estou à disposição para ajudar. 😊

Conectando você ao mundo com velocidade e confiabilidade! 
💻🌐✨ LinkNet Telecom - sua conexão para o futuro!
`;

export const PaymentSuccessfullMessage = (firstname: string, lastname: string, redLine: string) => 
`
Olá ${firstname} ${lastname}!

Agradecemos por efetuar o pagamento da sua fatura com vencimento para o dia ${redLine}. 
Sua colaboração é fundamental para mantermos nossos serviços de telecomunicações de qualidade.

Estamos sempre trabalhando para proporcionar a melhor experiência para nossos clientes, e sua contribuição é essencial nesse processo.
Se surgir qualquer dúvida ou se precisar de assistência adicional, não hesite em entrar em contato conosco. 

Estamos aqui para ajudar!

💻🌐✨ LinkNet Telecom - sua conexão para o futuro!
`;