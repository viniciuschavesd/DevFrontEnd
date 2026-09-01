// Usando função para alterar a propriedade de um objeto

function aumentaSalario(j){
    //j.salario *= 4.5;
    j['salario'] *= 4.5; //Com array
}

let jogador = {
    nome: "Garrincha",
    posicao: "atacante",
    salario: 12000
};

aumentaSalario(jogador);

console.log('Salário: R$', jogador.salario);

