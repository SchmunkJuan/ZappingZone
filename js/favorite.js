console.log('favoritosPeliculas');
console.log('favoritosSerie')
//Recupero storage
let favoritosPelisStorage = localStorage.getItem("favoritosPeliculas");
let favoritosSerieStorage = localStorage.getItem("favoritosSerie");
//y transformar de json en array
let favoritosPeliculas = JSON.parse(favoritosPeliculasStorage);
let favoritosSerie = JSON.parse(favoritosSerieStorage);

console.log(favoritosPeliculas); 
console.log(favoritosSerie); 

//Capturar el contenedor de los elementos a mostar
let section = document.querySelector('.lista');

//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados.
if(favoritosPeliculas == null || !favoritosPeliculas || favoritosPeliculas.length) {
    section.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    if (favoritosPeliculas != null | favoritosPeliculas) {
        favoritosPeliculas.forEach((id) => {
            console.log(id);
            buscarYMostarFavoritosPeliculas(id)
        });
    }
    
    function buscarYMostrarFavoritosPeliculas(id) {
        fetch(`https://api.themoviedb.org/3/movie/${idSerie}?api_key=a070d8766877ff453cfcafc5a8c99cec`)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            if (data) {
              document.querySelector(".tapas").innerHTML += `
            <li>  
              <a href="detalle_pelis.html?id=${id}">
                <img src=''>
                <p>${data.title}</p>
              </a>
            </li>`;
            }
          })
          .catch(function (error) {
            console.log(error);
          });    
    }

    
}
if(favoritosSerie == null || !favoritosSerie || favoritosSerie.length) {
    section.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    if (favoritosSerie != null | favoritosSerie) {
        favoritosSerie.forEach((id) => {
            console.log(id);
            buscarYMostarFavoritosSerie(id)
        });
    }
    function buscarYMostrarFavoritosSerie(id) {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US`)
            .then(function (response) {
            return response.json();
            })
            .then(function (data) {
            if (data) {
                console.log(data.title);
                document.querySelector(".tapas").innerHTML += `
                <li>  
                    <a href="detalle_serie.html?id=${id}">
                        <img src=''>
                        <p>${data.name}</p>
                    </a>
                </li>`;
                }
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