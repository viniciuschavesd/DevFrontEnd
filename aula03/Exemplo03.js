//Parametros rest

function somar(valor, ...vetor) {
    let total = valor;

    for (let x = 0; x < vetor.length; x++) {
        total += vetor[x];
    }
    
    return total;
}

let valores = somar(3, 1, 2, 3);

console.log(valores);
