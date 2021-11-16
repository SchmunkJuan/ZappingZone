console.log('validando');

let formulario = document.querySelector('form');
let inputField = document.querySelector('.Busqueda');
let mensaje = document.querySelector('mensaje');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    console.log('sin resultado');
})
