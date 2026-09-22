function calcularMedia(){
    let campo1 = (document.getElementById("nota1").value);
    let campo2 = (document.getElementById("nota2").value);
    let campo3 = (document.getElementById("nota3").value);

    //Ver se o usuario digitou todas as notas
    if (campo1 === "" || campo2 === "" || campo3 === "") {
        document.getElementById('resultado').innerText = "Por favor, digite todas as três notas!";
        return; 
    }

    //Transformar as notas em números - caso passou na verificação acima
    let n1 = Number(campo1);
    let n2 = Number(campo2);
    let n3 = Number(campo3);

    let media = (n1 + n2 + n3) / 3;
    
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }
    
    document.getElementById('resultado').innerText = "Média: " + media.toFixed(1) + " - " + situacao;

}