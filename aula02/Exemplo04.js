function mensagem() {
    let resultado = "";
    for (let x = 0; x < arguments.length; x++) {
        resultado += arguments[x] + " ";
    }
    return resultado;
}
let um = mensagem("Oi tudo bem?");
let dois = mensagem("Boa", "noite!");
let tres = mensagem("HTML", "CSS e", "JavaScript");
console.log(um, dois, tres);

console.log("----------- \n");

function somar(a, b) {
    b = typeof b === 'undefined' ? 0 : b;
    return a + b;
}
let resultado = somar(9);
console.log(resultado);

console.log("----------- \n");

