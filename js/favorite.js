console.log('favoritosPeliculas');
console.log('favoritosSerie')

let favoritosPelisStorage = localStorage.getItem("favoritosPeliculas");
let favoritosSerieStorage = localStorage.getItem("favoritosSerie")

let favoritosPeliculas = JSON.parse(favoritosPelisStorage);
let favoritosSerie = JSON.parse(favoritosSerieStorage);

console.log(favoritosPeliculas); 
console.log(favoritosSerie); 

let section = document.querySelector('.lista');
let favoritos = '';

if(favoritosPeliculas == null || favoritosPeliculas.length == 0) {    
    section.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    for (let i=0; i<favoritosPeliculas.length; i++){
        buscarYMostrarFavoritos(favoritosPeliculas[i]);
    }
}

function buscarYMostrarFavoritos(id){
    let url = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=bd47c5f8586064b310c2211d383a653d&language=${id}`
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            favoritosPeliculas += `<article>
                <img src=${data.image}>
                <p>Calificacion: ${data.vote_average}</p>
                <p>Estreno: ${data.release_date}</p>
                <p>Duracion: ${data.runtime}</p>
                <p>Sinopsis: ${data.overview}</p>
                <p>Genero: ${data.genero}</p>
            </article>`
            section.innerHTML = favoritosPeliculas
        })
        .catch( function(error){
            console.log(error);
        })
}

if(favoritosSerie == null || favoritosSerie.length == 0){
    section.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    for (let i=0; i<favoritosSerie.length; i++){
        buscarYMostrarFavoritos(favoritosSerie[i]);
    }
}

function buscarYMostrarFavoritos(id){
    let url = `https://api.themoviedb.org/3/tv/100?api_key=a070d8766877ff453cfcafc5a8c99cec=${id}`
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            favoritosSerie += `<article>
                <img src=${data.image}>
                <p>Calificacion: ${data.vote_average}</p>
                <p>Estreno: ${data.release_date}</p>
                <p>Duracion: ${data.runtime}</p>
                <p>Sinopsis: ${data.overview}</p>
                <p>Genero: ${data.genero}</p>
            </article>`
            section.innerHTML = favoritosSerie
        })
        .catch( function(error){
            console.log(error);
        })
}
//Boton de Favoritos
//Creo array a rellenar de peliculas favoritas
let peliculasFav = []
//Recupero el storage
let recuperoStorage = localStorage.getItem("favoritosPeliculas");
let recuperoStorage = localStorage.getItem("favoritosSerie");
//Reviso si el id ya esta en favoritos
if(recuperoStorage != null){
    favoritosPeliculas = JSON.parse(recuperoStorage);
    favoritosSerie = JSON.parse(recuperoStorage);
}
//Capturo el elemento DOM
let fav = document.querySelector('.fav');
let botonFav = document.querySelector('.botonFav');

if(favoritosPeliculas.includes(id)){
    botonFav.innerText = 'Quitar de favoritos'
}

if(favoritosSerie.includes(id)){
    botonFav.innerText = 'Quitar de favoritos'
}

fav.addEventListener('click', function(evento){
    evento.preventDefault();
    
    if(favoritosPeliculas.includes(id)){
        let indice = favoritosPeliculas.indexOf(id);
        favoritosPeliculas.splice(indice, 1);
        botonFav.innerText = 'Agregar a favoritos'
    } else {
        favoritosPeliculas.push(id);
        botonFav.innerHTML = 'Quitar de favoritos'
    }
    console.log(favoritosPeliculas);
    let favsToString =JSON.stringify(favoritosPeliculas);
    localStorage.setItem('favoritosPeliculas', favsToString)
})

fav.addEventListener('click', function(evento){
    evento.preventDefault();
    
    if(favoritosSerie.includes(id)){
        let indice = favoritosSerie.indexOf(id);
        favoritosSerie.splice(indice, 1);
        botonFav.innerText = 'Agregar a favoritos'
    } else {
        favoritosSerie.push(id);
        botonFav.innerHTML = 'Quitar de favoritos'
    }
    console.log(favoritosSerie);
    let favsToString =JSON.stringify(favoritosSerie);
    localStorage.setItem('favoritosSerie', favsToString)
})