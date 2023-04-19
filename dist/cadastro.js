"use strict";
const formCadastro = document.getElementById('formCadastro');
const botaoCadastro = document.getElementById('botaoCadastro');
botaoCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    const imagem = document.getElementById('imagem').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const posicao = document.getElementById('posicao').value;
    const selecao = document.getElementById('selecao').value;
    const jogador = {
        imagem,
        nome,
        idade,
        posicao,
        selecao
    };
    fetch('https://apigenerator.dronahq.com/api/U6xEuHqk/dataJogadores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogador)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
});
//# sourceMappingURL=cadastro.js.map