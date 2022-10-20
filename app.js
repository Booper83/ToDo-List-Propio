const hora = document.querySelector('#hora');
const fecha = document.querySelector('#fecha');
const boton = document.querySelector('#boton');
const input = document.querySelector('#input');

console.log(input.value);

let tareas = {};
let idTarea = 0;


boton.addEventListener('click', function(e){
    e.preventDefault();
    
    // console.log(hora.textContent, fecha.textContent);
    crearTarea(input.value);
})

function ponerHora(){
    hora.textContent = moment().format('HH:mm:ss');
    fecha.textContent = moment().format("DD/MM/YYYY")
}

ponerHora();

setInterval(() => {
    ponerHora();
}, 1000);

function crearTarea(e){
 if (e.trim() === '') {
    console.log('la tarea esta vacia');
    input.value = '';
    return;
 }
//  console.log(`Has escrito algo a la hora ${hora.textContent} y fecha ${fecha.textContent}`);
const tarea = {
    id : idTarea + 1,
    texto: input.value,
    hora: hora.textContent,
    fecha: fecha.textContent
}

idTarea = tarea.id;

tareas[tarea.id] = tarea;

console.log(tareas);
 input.value = '';

 crearDiv(tarea.texto);
}

function crearDiv(textTarea){
    const cajaTareas = document.querySelector('#tareas')
    const divTarea = document.createElement('div');
    const textoTarea = document.createElement('p');
    const divInferior = document.createElement('div')
    const hora_fecha = document.createElement('div');
    const spanHoraTarea = document.createElement('span');


    divInferior.classList.add('inferior');
    divTarea.classList.add('tarea')
    cajaTareas.appendChild(divTarea);
    divTarea.appendChild(textoTarea);
    textoTarea.textContent = textTarea;
    divTarea.appendChild(divInferior);
    hora_fecha.classList.add('hora_fecha');
    divInferior.appendChild(hora_fecha);
    spanHoraTarea.setAttribute('id', 'hora_tarea');
    hora_fecha.appendChild(spanHoraTarea);
    
}

// console.log(moment());