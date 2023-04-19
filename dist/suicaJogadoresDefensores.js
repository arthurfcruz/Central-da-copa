"use strict";
let textNome = document.querySelectorAll('.text1');
let textIdade = document.querySelectorAll('.text2');
let arrayIdade = [];
fetch('https://apigenerator.dronahq.com/api/U6xEuHqk/dataJogadores')
    .then(response => response.json())
    .then(data => {
    let imagensJogadores = document.getElementsByClassName('imagemTS');
    let index2 = 0;
    for (let index = 0; index < 23; index++) {
        if (data[index].selecao == "Suiça" && data[index].posicao == "defensor") {
            imagensJogadores[index2].src = data[index].imagem;
            textNome[index2].innerHTML = data[index].nome;
            textIdade[index2].innerHTML = data[index].idade;
            index2++;
            arrayIdade.push(data[index].idade);
        }
    }
    let card = document.getElementsByClassName('players');
    let vlMin = document.getElementById('valorMinimo');
    let vlMax = document.getElementById('valorMaximo');
    vlMin.addEventListener("blur", function () {
        let valorMinimo = parseInt(vlMin.value);
        let resultadoFiltro = arrayIdade.filter(function (idade) {
            let valorNumerico = parseInt(idade.match(/\d+/)[0]);
            return valorNumerico >= valorMinimo;
        });
        for (let i = 0; i < card.length; i++) {
            let idade = textIdade[i].textContent;
            if (resultadoFiltro.includes(idade)) {
                card[i].style.display = 'flex';
            }
            else {
                card[i].style.display = 'none';
            }
        }
    });
    vlMax.addEventListener("blur", function () {
        let valorMaximo = parseInt(vlMax.value);
        let resultadoFiltro = arrayIdade.filter(function (idade) {
            let valorNumerico = parseInt(idade.match(/\d+/)[0]);
            return valorNumerico <= valorMaximo;
        });
        for (let i = 0; i < card.length; i++) {
            let idade = textIdade[i].textContent;
            if (resultadoFiltro.includes(idade)) {
                card[i].style.display = 'flex';
            }
            else {
                card[i].style.display = 'none';
            }
        }
    });
})
    .catch(error => {
    console.error('Erro na requisição:', error);
});
//# sourceMappingURL=suicaJogadoresDefensores.js.map