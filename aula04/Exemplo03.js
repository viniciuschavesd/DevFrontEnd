console.log("For of: ");
console.log("-Vetor: ");
let herois = ['Batman', 'Wonder Woman', 'Flash'];
for (let valor of herois) {
    console.log(valor);
}

console.log("\n-Percorrendo um Array de objetos: ");
let usuarios = [{
    nome: "John",
    login: "johnwick@gmail.com",
    idade: 50
}, {
    nome: "Tony",
    login: "tonystark@marvel.com",
    idade: 41
}, {
    nome: "Peter",
    login: "peterparker@marvel.com",
    idade: 21
}];

for (let objeto of usuarios) {
    console.log(objeto.nome); // exibe o valor da propriedade nome de cada objeto
    console.log(objeto); // exibe cada um dos objetos 
}