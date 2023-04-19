"use strict";

const apiEndPoint = "https://apigenerator.dronahq.com/api/4WigOHEg/jogos";

let classificatoriasElement = document.querySelector(".qualify");

const oitavasElement = document.querySelector(".qualifyOitavas");

const botaoVerMais = document.querySelector(".verMais");

let content = document.querySelector(".content");

let hidden = document.querySelector(".hiddenCards");

let grid = document.querySelector(".gridContent");

let jogos = [];
let body;

botaoVerMais.addEventListener("click", expandirDivs);

function expandirDivs() {
  content.style.height = "1100px";
  hidden.style.overflow = "visible";
  classificatoriasElement.style.height = "fit-content";
  grid.style.height = "1100px";
  botaoVerMais?.innerHTML = "Ver Menos";

  botaoVerMais.removeEventListener("click", expandirDivs);

  botaoVerMais.addEventListener("click", voltarAoNormal);
}

function voltarAoNormal() {
  content.style.height = "85vh";
  hidden.style.overflow = "hidden";
  classificatoriasElement.style.height = "250px";
  grid.style.height = "85vh";
  botaoVerMais?.innerHTML = "Ver Mais";

  botaoVerMais.removeEventListener("click", voltarAoNormal);

  botaoVerMais.addEventListener("click", expandirDivs);
}

fetch(apiEndPoint)
  .then(function (response) {
    body = response.json();
    return body;
  })
  .then(function (data) {
    Jogos(data);
    addDisplay(data);
  });

function Jogos(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].Time1 === "Portugal" || data[i].Time2 === "Portugal") {
      jogos.push(data[i]);
    }
  }
}

function addDisplay(data) {
  for (let i = 0; i < jogos.length; i++) {
    const jogo = jogos[i];

    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
    <span id="time1">${jogo.Time1}</span>
    <span>x</span>
    <span id="time2">${jogo.Time2}</span>
    <br>
    <span id="placar">${jogo.Placar}</span>
  `;

    if (jogo.Jogo === "Classificatorio") {
      classificatoriasElement.appendChild(newCard);
    } else {
      oitavasElement.appendChild(newCard);
    }
  }
}
