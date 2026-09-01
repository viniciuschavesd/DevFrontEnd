// Usando função para alterar a propriedade de um objeto

function aumentaSalario(j){
    j.salario=1500000;
}

let jogador = {
    nome: "Garrincha",
    posicao: "atacante",
    salario: 12000
};

aumentaSalario(jogador);

console.log('Salário: ', jogador.salario);