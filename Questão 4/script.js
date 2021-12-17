const data = [
    {
        'uf' : 'sp',
        'faturamento' : '6783643'
    },
    {
        'uf' : 'rj',
        'faturamento' : '3667866'
    },
    {
        'uf' : 'mg',
        'faturamento' : '2922988'
    },
    {
        'uf' : 'es',
        'faturamento' : '2716548'
    },
    {
        'uf' : 'outros',
        'faturamento' : '1984953'
    }
]

/* Somatório total --------------------------------------- */

const faturamento = data.map(item =>{
    return item.faturamento;
})

const somatorio = faturamento.reduce((item, accumulator) =>{
    return item + Number(accumulator);
}, 0)


/* Cálculo percentual */

const percentualSP = ((data[0].faturamento * 100) / somatorio).toFixed(2);
const percentualRJ = ((data[1].faturamento * 100) / somatorio).toFixed(2);
const percentualMG = ((data[2].faturamento * 100) / somatorio).toFixed(2);
const percentualES = ((data[3].faturamento * 100) / somatorio).toFixed(2);
const percentualOutros = ((data[4].faturamento * 100) / somatorio).toFixed(2);

console.log(`Dados percentuais em relação ao faturamento total (R$${somatorio.toFixed(2)}): \n`);


/* Apresentação do resultado */
console.log(`Faturamento de SP em ${percentualSP}%.`);
console.log(`Faturamento de RJ em ${percentualRJ}%.`);
console.log(`Faturamento de MG em ${percentualMG}%.`);
console.log(`Faturamento de ES em ${percentualES}%.`);
console.log(`Outros faturamentos em ${percentualOutros}%.`);