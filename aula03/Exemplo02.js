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