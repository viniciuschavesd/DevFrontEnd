function aumentaSalario(j){
    j.salario=1500000;
}

let jogador = {
    nome: "Garrincha",
    posicao: "atacante",
    salario: 12000 ,
    altura: 10
};

aumentaSalario(jogador);

console.log('Salário: ', jogador.salario);