let taille = document.getElementById('height');
let poids = document.getElementById('weight');
let calculer = document.getElementById('calculate');
let msg = document.getElementById('message');
calculer.addEventListener('click', ()=>{
    msg.textContent = (poids.valueAsNumber / taille.valueAsNumber);
});