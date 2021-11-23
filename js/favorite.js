console.log('favoritosPeliculas');
console.log('favoritosSerie')
//Recupero storage
let favoritosPelisStorage = localStorage.getItem("favoritosPeliculas");
let favoritosSerieStorage = localStorage.getItem("favoritosSerie");
//y transformar de json en array
let favoritosPeliculas = JSON.parse(favoritosPelisStorage);
let favoritosSerie = JSON.parse(favoritosSerieStorage);

console.log(favoritosPeliculas); 
console.log(favoritosSerie); 

//Capturar el contenedor de los elementos a mostar
let section = document.querySelector('.lista');

//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados.
if(favoritosPeliculas == null || favoritosPeliculas.length == 0) {
    section.innerHTML="<p>No hay favoritos seleccionados</p>"
} else {
    for (let i=0; i<favoritosPeliculas.length; i++){
        buscarYMostarFavoritos(favoritosPeliculas[i]);
} 

function buscarYMostrarFavoritosPeliculas(id) {
    let url =`https://api.themoviedb.org/3/movie/${id}?api_key=a070d8766877ff453cfcafc5a8c99cec`
    
    fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
              console.log(data);
              favoritosPeliculas += `<article>
                <img src=${data.image}>
                <p>Calificacion: ${data.vote_average}</p>
                <p>Duracion: ${data.runtime}</p>
                <p>Estreno: ${data.realease_date}</p>
                <p>Sinopsis: ${data.overview}</p>
                </article>`

                section.innerHTML=favoritosPeliculas
            })
          .catch(function (error) {
            console.log(error);
          });    
    }
}

if(favoritosSerie == null || favoritosSerie.length == 0) {
    section.innerHTML="<p>No hay favoritos seleccionados</p>"
} else {
    for (let i=0; i<favoritosSerie.length; i++){
        buscarYMostarFavoritos(favoritosSerie[i]);
} 

function buscarYMostrarFavoritosSeries(id) {
    let url =`https://api.themoviedb.org/3/tv/${id}?api_key=a070d8766877ff453cfcafc5a8c99cec`
    
    fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
              console.log(data);
              favoritosPeliculas += `<article>
                <img src=${data.image}>
                <p>Calificacion: ${data.vote_average}</p>
                <p>Duracion: ${data.runtime}</p>
                <p>Estreno: ${data.realease_date}</p>
                <p>Sinopsis: ${data.overview}</p>
                </article>`

                section.innerHTML=favoritosPeliculas
            })
          .catch(function (error) {
            console.log(error);
          });    
    }
}



//Boton de Favoritos

//Creo array a rellenar de peliculas favoritas
let peliculasFav = []

//Recupero el storage
let recuperoStorage = localStorage.getItem('peliculasFav');

//Reviso si el id ya esta en favoritos
if (recuperoStorage != null){ //Sucede si hay datos en el storage
    peliculasFav = JSON.parse(recuperoStorage);
}

//Capturo el elemento en el DOM
let fav = document.querySelector('.favoritos');
let botonFav = document.querySelector('.botonFav')

if(peliculasFav.includes(id)){
    botonFav.innerText = 'Quitar de Favoritos'
}

fav.addEventListener('click', function(evento){
    evento.preventDefault();

    //En el caso de que la pelicula ya este en favoritos y el usuario quiera sacarla
    if (peliculasFav.includes(id)){
        let indice = peliculasFav.indexOf(id);
        peliculasFav.splice(indice, 1);
        botonFav.innerText = 'Agregar a Favoritos'

    } else {
    //En el caso de que la pelicula no este en favoritos
        peliculasFav.push(id);
        botonFav.innerHTML = 'Quitar de Favoritos';
    }
    console.log(peliculasFav);
    //Guardo el array en el storage
    let favToStirng = JSON.stringify(peliculasFav); //Se transforma al array en una cadena de texto

    localStorage.setItem('peliculasFav', favToStirng) //Guardo la info en el storage
    }
);