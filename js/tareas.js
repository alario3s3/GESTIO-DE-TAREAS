const span = document.getElementById('Secion taks');

const nameTask = document.getElementById('nameTask');

const btnAdd = document.getElementById('btnAdd');
const btnClose = document.getElementById('btnClose');
const btnChek = document.getElementById('btnChek');
const btnDelete = document.getElementById('btnDelete');

const taks = [];

let valueNameTak;

nameTask.addEventListener('input', ()=>{
    valueNameTak = nameTask.value
});

btnAdd.addEventListener('click', ()=>{
    span.innerHTML = 
    `<section class="mostrarTareas">
        <input type="button" class="material-symbols-outlined" id="btnChek" value="check">     
        <h2>${valueNameTak}</h2>   
        <input type="button" class="material-symbols-outlined" id="btnDelete" value="delete">       
    </section>`;
});


