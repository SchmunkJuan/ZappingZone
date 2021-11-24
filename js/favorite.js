console.log('favoritos');

let recuperoStorage = localStorage.getItem('favorito');
let favorito = JSON.parse(recuperoStorage);
console.log(favorito); 

let section = document.querySelector('.lista');
let favorite = '';

if(favorito == null || favorito.length == 0){
    section.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    for(let i=0; i<favorito.length; i++){
        buscarYMostrarFavoritos(favorite[i]);
    }
}

function buscarYMostrarFavoritos(id){
    let url = ``

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            favorito += `<article>
                <img src=${data.image}>
                <p>Calificacion: ${data.vote_average}</p>
                <p>Estreno: ${data.release_date}</p>
                <p>Duracion: ${data.runtime}</p>
                <p>Sinopsis: ${data.overview}</p>
                <p>Genero: ${data.genero}</p>
            </article>`
            section.innerHTML = favoritos
        })
        .catch( function(error){
            console.log(error);
        })
}