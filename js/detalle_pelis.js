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

            let movies = ""
            let info1 = data.results

            document.querySelector('.seccionpelis').innerHTML

            for (let i = 0; i < info1.length; i++) {
                console.log(info1[i])
                movies +=
                    `
                    <div class="div1">
                        <h2 class="movietit">${info1[i].original_title}</h2>
                    </div>
                    <div class="div2">
                        <img class="imgtit" src="${ "https://image.tmdb.org/t/p/original" + data.poster_path}" alt="">
                    </div>    
                    <ul>
                        <li class="data" id="sinopsis">${info1[i].overview}</li>
                        <li class="data" id="calificacion">${info1[i].vote_average}</li>
                        <li class="data" id="duracion">${info1[i].runtime}</li>
                        <li class="data" id="genero">${info1[i].genres}</li>
                        <li class="data" id="estreno">${info1[i].release_date}</li>
                    </ul> 
                    <p>
                        <a class="data" href="">Agregar a favoritos</a>
                    </p>      
                 `
            }
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