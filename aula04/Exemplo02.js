console.log("For in: ");

let usuario = {
    nome: "Peter Parker",
    login: "peter@marvel.com",
    idade: 21
};

for (let nomePropriedade in usuario) {
    console.log(usuario[nomePropriedade]);
}
