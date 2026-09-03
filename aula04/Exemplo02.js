console.log("For in: ");
console.log("-Objeto: ");
let usuario = {
    nome: "Peter Parker",
    login: "peter@marvel.com",
    idade: 21
};

for (let nomePropriedade in usuario) {
    console.log(usuario[nomePropriedade]); //Usar somente nomePropriedade irá imprimir as propriedades
}

console.log("\n-Vetor:");
let vetor = ["Batman", "Flash", "Thanos", "Visão"];

for (let nomeVetor in vetor){
    console.log(vetor[nomeVetor]); //Usar somente nomeVetor irá imprimir os indices
}