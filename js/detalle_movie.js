let qs = location.search
let qslo = new URLSearchParams(qs);
let id = qslo.get ('id');

let detalleMovie = qslo.get ('detailMovie_ids');

let url = `https://api.themoviedb.org/3/movie?api_key=a070d8766877ff453cfcafc5a8c99cec=${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let calificacion = document.querySelector('.calificacion');
        let estreno = document.querySelector('.estreno');
        let sinopsis = document.querySelector('.sinopsis');
        let genero = document.querySelector('.genero');

        console.log(image);

        title.innerText = data.name;
        calificacion.innerText += data.vote_average;
        estreno.innerText += data.release_date;
        duracion.innerText += data.runtime; 
        sinopsis.innerText +=data.overview;
        genero.innerText += data.genero;
    })
    .catch(function(error){
        console.log(error);
    })
}
    
        //Crear un array que iremos completando con datos.
    let peliculasFavoritos = [];
    
    
    //Recuperar storage
    let recuperoStorage = localStorage.getItem('favoritosPeliculas');
    
    if(recuperoStorage != null){
        //1ro tenemos que transformarlo de cadena de texto y después lo guardamos en favoritos.
        seriesFavoritos = JSON.parse(recuperoStorage);
    }
    
    //Hacer click en el link. Primero debemos capturar el elemnto.
    let fav= document.querySelector('.fav');
    
    //Chequear que el id esté en el array de favoritos
    if(peliculasFavoritos.includes(id)){
        fav.innerText="Quitar de favoritos";
    }
    
    fav.addEventListener('click', function(evento){
        evento.preventDefault();
    
        if(peliculasFavoritos.includes(id)) {
            //Si el id está en el array.
            let indice = peliculasFavoritos.indexOf(id);
            //Borrar a partir del índice, un elemento.
            peliculasFavoritos.splice(indice, 1)
            fav.innerText="Agregar a favoritos"
        } else {
             //Agregar un dato al array.
            peliculasFavoritos.push(id);
            fav.innerText="Quitar de favoritos";
        }
     
        console.log(localStorage
            )
        //Guardar el array en el storage
        let favsToString = JSON.stringify(peliculasFavoritos); //Transformamos el array en una cadena de texto.
        localStorage.setItem('favoritosPeliculas', favsToString); //Guardamos el array en el storage.
    
    
    })
    
    })