window.addEventListener('load', function(){
    //Pasos para QS
    let qs = location.search; //Obtener la qs de la url
    let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
    let id = qsto.get('id'); //Obtener el dato de id del objeto literal
    
    //Armar un nuevo fetch
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=a070d8766877ff453cfcafc5a8c99cec`
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
    
           //Paso 1: capturar DOM.
           let title = document.querySelectorAll('.movietit')[1];
           let image = document.querySelectorAll('.imgtit')[1];
           let calificacion = document.querySelector('#calificacion');
           let estreno = document.querySelector('#estreno');
           let duracion = document.querySelector('#duracion')
           let sinopsis = document.querySelector('#sinopsis');
           let genero = document.querySelector('#genero');
    
           //Paso 2 y 3: actualizar datos y actualizar DOM;
           title.innerText = data.title;
           image.src = `${ "https://image.tmdb.org/t/p/original" + data.poster_path}`
           calificacion.innerHTML += data.vote_average; 
           duracion.innerText += data.runtime;   
           estreno.innerText += data.release_date;
           sinopsis.innerText += data.overview;
    
            let infoGeneros = data.genres;
            let arrayGeneros = "";
    
    
            //console.log(infoGeneros);
    
            for(let i = 0; i <infoGeneros.length; i++) {
                arrayGeneros +=`
                <li>
                    <p><a href="detalle_genero_pelis.html?id=${infoGeneros[i].id}&title=${infoGeneros[i].name}">${infoGeneros[i].name}
                    </a></p>
                </li>`
            }
    
            genero.innerHTML = arrayGeneros;
        })
    
        .catch(function(error){
            console.log(error);
        });
    
    
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
            let indice = favoritos.indexOf(id);
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