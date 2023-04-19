"use strict";
let verMais = document.getElementsByClassName('SeeMore');
let division = document.getElementsByClassName('hiddenDivision');
let button = document.getElementsByClassName('buttonExit');
verMais[0].addEventListener("click", function () {
    
    for (let i = 0; i < division.length; i++) {
        division[i].style.display = 'flex';
    }
    
    for (let i = 0; i < button.length; i++) {
        button[i].style.display = 'flex';
    }
});
button[0].addEventListener("click", function () {
    
    for (let i = 0; i < division.length; i++) {
        division[i].style.display = 'none';
    }
     
    for (let i = 0; i < button.length; i++) {
        button[i].style.display = 'none';
    }
});