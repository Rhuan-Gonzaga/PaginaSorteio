function sortear (){
    let numero = document.getElementById("numero").value;
    let tela = document.getElementById("titulo");
    let vencedor =  Math.floor(Math.random() * numero) + 1;

    tela.innerText = "O Sorteado foi: " + vencedor;

}

