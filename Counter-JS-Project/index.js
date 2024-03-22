let incre = document.getElementById('incrementation');
let decre = document.getElementById('decrementation');
let x = document.getElementById('selectValue');
let result = document.getElementById('resultat');
let btn = document.getElementById('btn-reset');
incre.addEventListener('click', ()=>{
    result.textContent =+ result.textContent + x.valueAsNumber;
})
decre.addEventListener('click', ()=>{
    result.textContent = parseInt(result.textContent) - x.valueAsNumber
})
btn.addEventListener('click', ()=>{
    result.textContent = 0;
})