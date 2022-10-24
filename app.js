document.addEventListener('DOMContentLoaded', function(){

eventListeners();


})

//VARIABLES

const hora = document.querySelector('#hora');
const fecha = document.querySelector('#fecha');
const boton = document.querySelector('#boton');
const input = document.querySelector('#input');



function eventListeners(){

    
    setInterval(() => {
        ponerHora();
    }, 1000);

    boton.addEventListener('click', function(e) {
        if (input.value == '') {
            alert('El campo texto tiene que estar relleno')
        }else {
            tipoColor();
            arrayTarea(e);

        }
    });

}



//ARRAY TAREAS

const arrayTareas = [];
let posicion = 0;

//FUNCION PONER HORA

function ponerHora(){
    hora.textContent = moment().format('HH:mm:ss');
    fecha.textContent = moment().format("DD/MM/YYYY")
};

//FUNCION AÑADIR TAREA AL ARRAY

function arrayTarea(e){
    e.preventDefault();
    // console.log(input.value);
    
    resetearDivs();
    
   
    const tarea = {
        texto : input.value,
        hora : hora.textContent,
        fecha: fecha.textContent
    }

    arrayTareas.push(tarea);

    // console.log(arrayTareas);


    input.value = '';

    contarArray()
}

function contarArray(){
    
    for (let i = 0; i < arrayTareas.length; i++) {
        // crearDiv(arrayTareas[i].texto, hora, fecha, i)
        crearDiv(arrayTareas[i].texto, arrayTareas[i].hora, arrayTareas[i].fecha, i+1, arrayColor[i])
        
        
    }
}




function crearDiv(texto, hora, fecha, i, color){
    console.log(i-1);
    
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
    //  if (arrayTareas.length = 0) {
    //      divTarea.classList.add('tarea-azul');
    //  }else {
    //      if (color == 'azul') {
    //          divTarea.classList.add('tarea-azul');
    //          console.log('azul');
    //      }else {
    //          divTarea.classList.add('tarea-verde');
    //          console.log('verde');
    //      }
    //  }
    
    divTarea.setAttribute('id',i)
    cajaTareas.appendChild(divTarea);
    divTarea.appendChild(textoTarea);
    textoTarea.textContent = texto;
    divTarea.appendChild(divInferior);
    hora_fecha.classList.add('hora_fecha');
    divInferior.appendChild(hora_fecha);
    spanHoraTarea.setAttribute('id', 'hora_tarea');
    spanHoraTarea.textContent = hora; 
    hora_fecha.appendChild(spanHoraTarea);
    spanFechaTarea.setAttribute('id', 'fecha_tarea');
    spanFechaTarea.textContent = fecha; //borrar
    hora_fecha.appendChild(spanFechaTarea);
    divBotones.classList.add('botones')
    divInferior.appendChild(divBotones);

    divBotonBorrar.classList.add('boton_azul');
    divBotones.appendChild(divBotonBorrar);
    divBotonBorrar.appendChild(abbrBorrar);
    spanBorrar.classList.add('borrar', 'material-symbols-outlined');
    spanBorrar.setAttribute('id', `borrar${i}`);
    spanBorrar.textContent = 'delete'
    abbrBorrar.appendChild(spanBorrar);

    divBotonEditar.classList.add('boton_azul');
    divBotones.appendChild(divBotonEditar);
    divBotonEditar.appendChild(abbrEditar);
    spanEditar.classList.add('editar', 'material-symbols-outlined');
    spanEditar.setAttribute('id', `editar${i}`);
    spanEditar.textContent = 'edit'
    abbrEditar.appendChild(spanEditar);
    
    divBotonCompletado.classList.add('boton_azul');
    divBotones.appendChild(divBotonCompletado);
    divBotonCompletado.appendChild(abbrCompletado);
    spanCompletado.classList.add('Completar', 'material-symbols-outlined');
    spanCompletado.setAttribute('id', `completar${i}`);
    spanCompletado.textContent = 'event_available'
    abbrCompletado.appendChild(spanCompletado); 

    botonCompletado(i);
    
}


function resetearDivs(){

    if (arrayTareas.length != 0) {
        for (let i = 0; i < arrayTareas.length; i++) {
            const tareaBorrar = document.getElementById(i+1);

            tareaBorrar.remove(); 
            
        }       
    }

}

function botonCompletado(id){
    const botonCompletar = document.getElementById(`completar${id}`)

    botonCompletar.addEventListener('click', function(e) {
        // console.log(e.target.id.slice(9,10));
        const tareaCompletar = document.querySelector(`#completar${id}`).parentNode.parentNode.parentNode.parentNode.parentNode;
        // console.log(tareaCompletar);

        if(tareaCompletar.classList.contains('tarea-azul')){
            tareaCompletar.classList.remove('tarea-azul')
            tareaCompletar.classList.add('tarea-verde');
            tareaCompletar.lastChild.lastChild.lastChild.classList.remove('boton_azul');
            tareaCompletar.lastChild.lastChild.lastChild.classList.add('boton_verde');
            tareaCompletar.lastChild.lastChild.lastChild.previousSibling.classList.remove('boton_azul');
            tareaCompletar.lastChild.lastChild.firstChild.classList.remove('boton_azul');
            // console.log(tareaCompletar.lastChild.lastChild.lastChild);
           
            // console.log('tiene azul');
            return;
        };
        if (tareaCompletar.classList.contains('tarea-verde')) {
            tareaCompletar.classList.remove('tarea-verde')
            tareaCompletar.classList.add('tarea-azul');
            tareaCompletar.lastChild.lastChild.lastChild.classList.remove('boton_verde');
            tareaCompletar.lastChild.lastChild.lastChild.classList.add('boton_azul');
            // console.log('tiene verde');
            return;
        };    

        
    })
}

let arrayColor = [];



function tipoColor(e){
    arrayColor = [];
    const colorTarea = document.querySelectorAll('.tarea');

    if (colorTarea.length != 0) {
        for (let i = 0; i < colorTarea.length; i++) {
            const divColor = colorTarea[i];

            if (divColor.classList[1] == 'tarea-azul') {
                arrayColor.push('azul')
                // console.log(arrayColor);
            } else {
                arrayColor.push('verde');
                // console.log(arrayColor);
            }            
        }
        console.log(arrayColor);
    }  
    
}

