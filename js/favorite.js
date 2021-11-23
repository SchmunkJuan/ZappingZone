console.log('favoritos');
//Recupero storage
let recuperoStorage = localStorage.getItem('favoritos');
//y transformar de json en array
let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos); 


//Capturar el contenedor de los elementos a mostar
let section = document.querySelector('.lista');
let personajesFavoritos = '';


//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados.
if(favoritos == null || favoritos.length == 0){
    section.innerHTML='<p>No hay favoritos seleccionados</p>'
} else {
    //for para recorrer el array.
    for (let i=0; i<favoritos.length; i++){
        buscarYMostarFavoritos(favoritos[i]);
    }

}


function buscarYMostarFavoritos(id){
    //fetch para buscar cada elemento del array. 
    let url = `${id}`

    fetch(url)
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log(data);
            personajesFavoritos += `<article>
                                <img src=${data.image}>
                                <p>Calificacion: ${data.calificacion}</p>
                                <p>Estreno: ${data.estreno}</p>
                                <p>Duracion: ${data.duracion}</p>
                                <p>Sinopsis: ${data.sinopsis}</p>
                                <p>Genero: ${data.genero}</p>

                                <a href="detalle.html?id=${data.id}">Ver más</a>
                            </article>`
        
            //mostarlo al usuario.
            section.innerHTML = personajesFavoritos;            
        })
        .catch( function(error){
            console.log(error);
        })

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
})