function mudar(x) {
    x = 15;
    console.log('valor de x: ', x);
}

let numero = 10;
console.log('valor do numero: ', numero);
mudar(numero);
console.log('valor do numero: ', numero);

console.log("----------- \n");
/*Tudo que nao é primitivo, é um parametro por referência*/
function mudarObj(obj) {
    obj.gols += 10;
    console.log('objeto: ', obj);
}
let jogador = {
    nome: "Garrincha",
    posicao: "atacante",
    gols: 10
};
console.log('jogador: ', jogador);
mudarObj(jogador);
console.log('jogador: ', jogador);

console.log("----------- \n");

function mudarVetor(funcao, vetor) {
    for (let x = 0; x < vetor.length; x++) {
        vetor[x] = funcao(vetor[x]);
    }
}

/*Função anônima, guarda referência dentro da variável.
Pode ser passada via parâmetro.*/
let dobrar = function (valor) {
    return valor * 2;
}
let vetor = [1, 2, 3, 4, 5, 6];
mudarVetor(dobrar, vetor);
console.log(vetor);

console.log("----------- \n");







