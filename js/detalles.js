//Pasos para QS
let qs = location.search; //Obtener la qs de la url
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal

//Armar un nuevo fetch
let url = (`https://api.themoviedb.org/3/movie/550?api_key=dc595f48c885d38c5c9265bb69a0626c=${id}`)

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

       //Paso 1: capturar DOM.
       let title = document.querySelector('h1');
       let image = document.querySelector('img');
       let titulo = document.querySelector('.titulo');
       let calificacion = document.querySelector('.calificacion');
       let estreno = document.querySelector('.estreno');
       let duracion = document.querySelector('.duracion');
       let sinopsis = document.querySelector('.sinopsis');
       let genero = document.querySelector('.genero');

       //Paso 2 y 3: actualizar datos y actualizar DOM;
       title.innerText = data.name;
       image.src=data.image;
       titulo.innerText += data.titulo;
       calificacion.innerText += data.calificacion;    
       estreno.innerText += data.estreno;
       duracion.innerText += data.duracion;
       sinopsis.innerText += data.sinopsis;
       genero.innerText += data.genero;     

    })
    .catch(function(error){
        console.log(error);
    })