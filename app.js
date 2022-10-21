const hora = document.querySelector('#hora');
const fecha = document.querySelector('#fecha');
const boton = document.querySelector('#boton');
const input = document.querySelector('#input');




// botonCompletar.addEventListener('click', function(e) {
//     console.log(e);
// });

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

// console.log(tareas);
 input.value = '';

 crearDiv(tarea.texto, tarea.hora, tarea.fecha, tarea.id);
}

function crearDiv(textTarea, horatarea, fechatarea,tareaid){
    const cajaTareas = document.querySelector('#tareas')
    const divTarea = document.createElement('div');
    const textoTarea = document.createElement('p');
    const divInferior = document.createElement('div')
    const hora_fecha = document.createElement('div');
    const spanHoraTarea = document.createElement('span');
    const spanFechaTarea = document.createElement('span');
    const divBotones = document.createElement('div');
    const divBotonBorrar = document.createElement('div');
    const divBotonEditar = document.createElement('div');
    const divBotonCompletado = document.createElement('div');
    const spanBorrar = document.createElement('span');
    const spanEditar = document.createElement('span');
    const spanCompletado = document.createElement('span');
    const abbrBorrar = document.createElement('abbr');
    const abbrEditar = document.createElement('abbr');
    const abbrCompletado = document.createElement('abbr');
    


    divInferior.classList.add('inferior');
    divTarea.classList.add('tarea','tarea-azul');
    divTarea.setAttribute('id',tareaid)
    cajaTareas.appendChild(divTarea);
    divTarea.appendChild(textoTarea);
    textoTarea.textContent = textTarea;
    divTarea.appendChild(divInferior);
    hora_fecha.classList.add('hora_fecha');
    divInferior.appendChild(hora_fecha);
    spanHoraTarea.setAttribute('id', 'hora_tarea');
    spanHoraTarea.textContent = horatarea; 
    hora_fecha.appendChild(spanHoraTarea);
    spanFechaTarea.setAttribute('id', 'fecha_tarea');
    spanFechaTarea.textContent = fechatarea; //borrar
    hora_fecha.appendChild(spanFechaTarea);
    divBotones.classList.add('botones')
    divInferior.appendChild(divBotones);

    divBotonBorrar.setAttribute('id', 'boton_borrar');
    divBotones.appendChild(divBotonBorrar);
    divBotonBorrar.appendChild(abbrBorrar);
    spanBorrar.classList.add('borrar', 'material-symbols-outlined');
    spanBorrar.setAttribute('id', `borrar${tareaid}`);
    spanBorrar.textContent = 'delete'
    abbrBorrar.appendChild(spanBorrar);

    divBotonEditar.setAttribute('id', 'boton_editar');
    divBotones.appendChild(divBotonEditar);
    divBotonEditar.appendChild(abbrEditar);
    spanEditar.classList.add('editar', 'material-symbols-outlined');
    spanEditar.setAttribute('id', `editar${tareaid}`);
    spanEditar.textContent = 'edit'
    abbrEditar.appendChild(spanEditar);
    
    divBotonCompletado.setAttribute('id', 'boton_completado');
    divBotones.appendChild(divBotonCompletado);
    divBotonCompletado.appendChild(abbrCompletado);
    spanCompletado.classList.add('Completar', 'material-symbols-outlined');
    spanCompletado.setAttribute('id', `completar${tareaid}`);
    spanCompletado.textContent = 'event_available'
    abbrCompletado.appendChild(spanCompletado);

    crearConst(tareaid);    
}

function crearConst(id){
    const botonBorrar = document.querySelector(`#borrar${id}`);
    const botonEditar = document.querySelector(`#editar${id}`)
    const botonCompletar = document.querySelector(`#completar${id}`);
    // console.log(botonCompletar);
    botonCompletar.addEventListener('click', function(e){
        // console.log(e.target.id, id);
        completarTarea(e.target.id, id);
    })
}

function completarTarea(eid, id){
    // console.log(`Cambiando color con el id${id}`);
    const divTarea = document.querySelectorAll('.tarea')[id-1];
    console.log(divTarea);
    
    if(divTarea.classList.contains('tarea-azul')){
        divTarea.classList.remove('tarea-azul')
        divTarea.classList.add('tarea-verde');
       
        console.log('tiene azul');
        return
    };
    if (divTarea.classList.contains('tarea-verde')) {
        divTarea.classList.remove('tarea-verde')
        divTarea.classList.add('tarea-azul');
        console.log('tiene verde');
        return;
    };

    
    
    
}