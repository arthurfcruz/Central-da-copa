"use strict";
const controls = document.querySelectorAll(".esquerda, .direita");
const apiEndPoint = "https://apigenerator.dronahq.com/api/U6xEuHqk/dataJogadores";
const posicao = document.querySelector(".posicao");
const divCarousel_Wrapper = document.querySelector(".carousel-wrapper");
const btnFiltrar = document.querySelector(".filtrar");
let jogadores = [];
let iPosicao = 0;
let currentItem = 0;
let current_Position;
let body;
let items;
let maxItens;
let jogadoresFiltrados;
posicao.addEventListener("click", () => {
    mudarPosicao();
});
function mudarPosicao() {
    switch (iPosicao) {
        case 0:
            posicao === null || posicao === void 0 ? void 0 : posicao.innerHTML = "Meio Campo";
            iPosicao++;
            break;
        case 1:
            posicao === null || posicao === void 0 ? void 0 : posicao.innerHTML = "Defensores";
            iPosicao++;
            break;
        case 2:
            posicao === null || posicao === void 0 ? void 0 : posicao.innerHTML = "Goleiros";
            iPosicao++;
            break;
        case 3:
            posicao === null || posicao === void 0 ? void 0 : posicao.innerHTML = "Atacantes";
            iPosicao = 0;
            break;
    }
}
fetch(apiEndPoint)
    .then(function (response) {
    body = response.json();
    return body;
})
    .then(function (data) {
    Jogadores(data);
    addDisplay(jogadores);
});
function Jogadores(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].selecao === "Portugal") {
            jogadores.push(data[i]);
        }
    }
    jogadoresFiltrados = jogadores;
}
function addDisplay(jogadores) {
    removerCards();
    verificaPosicao();
    for (let i = 0; i < jogadores.length; i++) {
        const jogador = jogadores[i];
        if (jogador.posicao === current_Position) {
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.classList.add("current-item");
            newCard.innerHTML = `
    <img src="${jogador.imagem}">
    <div class="nomeJogador">${jogador.nome}</div>
    <div class="IdadeJogador">${jogador.idade}</div>
    `;
            const divCarousel = document.querySelector(".carousel");
            divCarousel === null || divCarousel === void 0 ? void 0 : divCarousel.appendChild(newCard);
        }
    }
    items = document.querySelectorAll(".card");
    maxItens = items.length;
}
function removerCards() {
    const carousel = document.querySelector(".carousel");
    carousel.parentNode.removeChild(carousel);
    const newCarousel = document.createElement("div");
    newCarousel.classList.add("carousel");
    divCarousel_Wrapper === null || divCarousel_Wrapper === void 0 ? void 0 : divCarousel_Wrapper.appendChild(newCarousel);
}
function verificaPosicao() {
    switch (posicao === null || posicao === void 0 ? void 0 : posicao.textContent) {
        case "Atacantes":
            current_Position = "atacante";
            break;
        case "Meio Campo":
            current_Position = "meio-campista";
            break;
        case "Goleiros":
            current_Position = "goleiro";
            break;
        case "Defensores":
            current_Position = "defensor";
            break;
    }
}
posicao === null || posicao === void 0 ? void 0 : posicao.addEventListener("click", () => {
    addDisplay();
});
controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isleft = control.classList.contains("esquerda");
        if (isleft) {
            currentItem -= 3;
        }
        else {
            currentItem += 3;
        }
        if (currentItem >= maxItens) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItens - 1;
        }
        items.forEach((item) => item.classList.remove("current-item"));
        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
        items[currentItem].classList.add("current-item");
    });
});
function filtrarPorIdade() {
    const idadeMinima = document.getElementById("idadeMin").value;
    const idadeMaxima = document.getElementById("idadeMax").value;
    jogadoresFiltrados = jogadores.filter((jogador) => {
        const idade = parseInt(jogador.idade.match(/\d+/));
        return idade >= idadeMinima && idade <= idadeMaxima;
    });
    addDisplay(jogadoresFiltrados);
}
btnFiltrar === null || btnFiltrar === void 0 ? void 0 : btnFiltrar.addEventListener("click", () => {
    filtrarPorIdade();
});
//# sourceMappingURL=portugalJogadores.js.map