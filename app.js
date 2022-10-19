const hora = document.querySelector('#hora');
const fecha = document.querySelector('#fecha');
const boton = document.querySelector('#boton');

boton.addEventListener('click', function(e){
    e.preventDefault();
    console.log(hora.textContent);
})

function ponerHora(){
    hora.textContent = moment().format('HH:mm:ss');
    fecha.textContent = moment().format("DD/MM/YYYY")
}

ponerHora();

setInterval(() => {
    ponerHora();
}, 1000);

console.log(boton);

console.log('Hola Mundo!');

// console.log(moment());