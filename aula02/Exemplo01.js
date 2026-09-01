let texto = "Trabalhando com Strings";

console.log(texto);

console.log("texto.length: " + texto.length);
console.log("texto[3]: " + texto[3]);
console.log("texto[texto.length - 1]: " + texto[texto.length - 1]);
console.log("texto.indexOf(String em aspas):  " + texto.indexOf("balha"));
console.log("texto.slice(0,3) : " + texto.slice(0,3));
console.log("texto.slice(16): " + texto.slice(16));

console.log("---");
let herois = ["Batman", "Aquaman", "Hulk", "Flash"];
console.log(herois);
herois.splice(1, 0, "Superman", "Visão");
console.log("herois.splice(1,2, String1, String2 a serem inseridas) : " + herois);

console.log("---");
let frutas = ["maça", "pera"]
console.log(frutas);
frutas.splice(1, 0, "banana");
console.log("Splice usado em arrays: " + frutas);
/*console.log(": " + );*/
