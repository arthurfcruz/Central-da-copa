let verMais = document.getElementsByClassName('SeeMore')

let division = document.getElementsByClassName('hiddenDivision')

let button = document.getElementsByClassName('buttonExit')

verMais[0].addEventListener("click", function () {
    // Altera o valor do estilo display para flex nos elementos com classe 'hiddenDivision'
    for (let i = 0; i < division.length; i++) {
        division[i].style.display = 'flex';
    }

    // Altera o valor do estilo display para flex nos elementos com classe 'buttonExit'
    for (let i = 0; i < button.length; i++) {
        button[i].style.display = 'flex';
    }
});

button[0].addEventListener("click", function () {
    // Altera o valor do estilo display para none nos elementos com classe 'hiddenDivision'
    for (let i = 0; i < division.length; i++) {
      division[i].style.display = 'none';
    }
    
    // Altera o valor do estilo display para none nos elementos com classe 'buttonExit'
    for (let i = 0; i < button.length; i++) {
      button[i].style.display = 'none';
    }
  });


  