const formCadastro = document.getElementById('formCadastro') as HTMLFormElement;
const botaoCadastro = document.getElementById('botaoCadastro') as HTMLInputElement;

botaoCadastro.addEventListener('click', (event) => {
  event.preventDefault();

  const imagem = (document.getElementById('imagem') as HTMLInputElement).value;
  const nome = (document.getElementById('nome') as HTMLInputElement).value;
  const idade = (document.getElementById('idade') as HTMLInputElement).value;
  const posicao = (document.getElementById('posicao') as HTMLSelectElement).value;
  const selecao = (document.getElementById('selecao') as HTMLInputElement).value;

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