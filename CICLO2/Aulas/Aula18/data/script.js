//Data:

let meses = [
    'Janeiro','Fevereiro','Março', 'Abril','Maio',
     'Junho','Julho','Agosto','Setembro',
     'Outubro','Novembro','Dezembro'
];

let diaSemana = [
    'Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira',
    'Quinta-Feira','Sexta-Feira','Sábado'
];

let data  = new Date();
console.log(`Hoje é ${diaSemana[data.getDay()]} de ${meses[data.getMonth()]} de ${data.getFullYear()}`);

let dataFormatada = data.toLocaleString('pt-BR', {year:'numeric', month:'2-digit', day:'2-digit'});

   console.log(dataFormatada); 
   
/*getDate(): que traz o resultado do dia;
getMonth(): retorna o mês utilizado;
getFullYear(): retorna o ano com quatro dígitos;
getHours(): retorna o valor das horas;
getMinutes(): traz os minutos informados.

E para modificar novos valores utiliza-se os métodos: 

setDate(): modifica um valor dia;
setMonth(): modifica o valor mês;
setFullYear(): modifica o valor ano de quatro dígitos ;
setHours(): modifica o valor das horas;
setMinutes(): modifica os minutos.*/