const dados = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

/*Filtrando dias com faturamento------------*/
const diasComFaturamentos = dados.filter((item) => {
  return item.valor > 0;
});

/* Vazriáveis  do menor e maior faturamento ----------------------- */
let i = 0, dia = 0;
let menorFaturamento = diasComFaturamentos[0].valor;
let maiorFaturamento = diasComFaturamentos[0].valor;

/* Menor faturamento ----------------------- */
for (i = 1; i < diasComFaturamentos.length; i++) {
  if (diasComFaturamentos[i].valor < menorFaturamento) {
    menorFaturamento = diasComFaturamentos[i].valor;
    dia = diasComFaturamentos[i].dia;
  }
}
console.log(`Menor faturamento: R$${menorFaturamento} ocorrido no dia ${dia}.`);


/* Maior faturamento ----------------------- */
for (i = 1; i < diasComFaturamentos.length; i++) {
  if (diasComFaturamentos[i].valor > maiorFaturamento) {
    maiorFaturamento = diasComFaturamentos[i].valor;
    dia = diasComFaturamentos[i].dia;
  }
}
console.log(`Maior faturamento: R$${maiorFaturamento} ocorrido no dia ${dia}.\n`);



/*Faturamento de dias que são maiores que a média mensal -----------------*/

/* Cálculo da média mensal */
const somatorio = diasComFaturamentos.reduce((item, accumulator) =>{
    return item + accumulator.valor;
}, 0)

const mediaMensal = somatorio / diasComFaturamentos.length;



const diasComFaturamentoMaiorQueMedia = diasComFaturamentos.filter(item =>{
    return item.valor > mediaMensal;
})

console.log(`Foram ${diasComFaturamentoMaiorQueMedia.length} dias nas quais o faturamento ultrapassou o valor da média mensal (R$${mediaMensal.toFixed(2)}). Esses dias são: ` );

diasComFaturamentoMaiorQueMedia.forEach(item => {
    console.log(`Dia ${item.dia}, com faturamento de R$${item.valor.toFixed(2)}.`);
})