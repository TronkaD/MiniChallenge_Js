import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';

/*  DECLARATION */
const diceTmages = [dice1, dice2, dice3, dice4,  dice5, dice6];
 
/*RECUPERATION DES ELEMENTS DU DOM */
 let result = document.getElementById('display-result');
 let diceImg1 = document.getElementById('img1');
 let diceImg2 = document.getElementById('img2');
 let btnPlayer = document.getElementById('player');

function showResultat(random1,random2){
    if(random1 < random2){
        result.textContent = 'Le joueur 2 est le gagneur';
    }else if(random1 > random2){
        result.textContent = 'Le joueur 1 est le gagneur';
    }else{
        result.textContent = 'Tirage au sort'
    }
};

function play() {
    let random1 = Math.floor(Math.random() * 6);
    let random2 = Math.floor(Math.random() * 6);

    diceImg1.setAttribute('src', diceTmages[random1]);
    diceImg2.setAttribute('src', diceTmages[random2]);

    showResultat(random1, random2);
};

btnPlayer.addEventListener('click', play);
play();
