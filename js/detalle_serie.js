//Pasos para QS
let qs = location.search; //Obtener la qs de la url
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal

//Armar un nuevo fetch
let url = `https://api.themoviedb.org/3/tv/88?api_key=a070d8766877ff453cfcafc5a8c99cec${idSerie}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

       //Paso 1: capturar DOM.
       let title = document.querySelector('h1');
       let image = document.querySelector('img');
       let calificacion = document.querySelector('.calificacionNumero');
       let estreno = document.querySelector('.fechaNumero');
       let sinopsis = document.querySelector('.sinopsisTexto');
       let genero = document.querySelector('.generoTexto');

       //Paso 2 y 3: actualizar datos y actualizar DOM;
       title.innerText = data.name;
       image.src=data.image;

       calificacion.innerText = data.vote_average;    
       estreno.innerText = data.first_air_date;
       sinopsis.innerText = data.overview;

        let infoGeneros = data.genres;
        let arrayGeneros = "";


        console.log(infoGeneros);

        for(let i = 0; i <infoGeneros.length; i++) {
            arrayGeneros +=
            <li>
                <p><a href="detalle_genero_series.html?id=${infoGeneros[i].id}&title=${infoDetalleS[i].name}">${infoDetalleS[i].name}"
                </a></p>
            </li>
        }
        console.log(arrayGeneros);

        genero.innerHTML = arrayGeneros;
    })

    .catch(function(error){
        console.log(error);
    });


    //Crear un array que iremos completando con datos.
let seriesFavoritos = [];

//Recuperar storage
let recuperoStorage = localStorage.getItem('favoritosSerie');

if(recuperoStorage != null){
    //1ro tenemos que transformarlo de cadena de texto y después lo guardamos en favoritos.
    seriesFavoritos = JSON.parse(recuperoStorage);
}

//Hacer click en el link. Primero debemos capturar el elemnto.
let fav= document.querySelector('.fav');

//Chequear que el id esté en el array de favoritos
if(seriesFavoritos.includes(idSerie)){
    fav.innerText="Quitar de favoritos";
}

fav.addEventListener('click', function(evento){
    evento.preventDefault();

    if(seriesFavoritos.includes(idSerie)) {
        //Si el id está en el array.
        let indice = favoritos.indexOf(idSerie);
        //Borrar a partir del índice, un elemento.
        serieFavoritos.splice(indice, 1)
        fav.innerText="Agregar a favoritos"
    } else {
         //Agregar un dato al array.
        seriesFavoritos.push(idSerie);
        fav.innerText="Quitar de favoritos";
    }
 
    console.log(localStorage
        )
    //Guardar el array en el storage
    let favsToString = JSON.stringify(serieFavoritos); //Transformamos el array en una cadena de texto.
    localStorage.setItem('favoritosSerie', favsToString); //Guardamos el array en el storage.


})
