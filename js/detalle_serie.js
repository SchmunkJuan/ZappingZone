let qs = location.search
let qslo = new URLSearchParams(qs);
let id = qslo.get ('id');

let url = `https://api.themoviedb.org/3/tv/100?api_key=a070d8766877ff453cfcafc5a8c99cec=${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let calificacion = document.querySelector('#calificacion');
        let estreno = document.querySelector('#estreno');
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
})
 
let favoritos = [];

let recuperoStorage = localStorage.getItem('favoritos');

if(recuperoStorage != null || recuperoStorage == 0){
    favoritos = JSON.parse(recuperoStorage);
}

let fav = document.querySelector('fav');

if(favoritos.includes(id)){
    fav.innerText="Quitar de favoritos";
}

fav.addEventListener('click', function(series){
    series.preventDefault()
    alert('Agregar a favoritos')

    if(favoritos.includes(id)){
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice, 1)
        fav.innerText="Agregar a favoritos"
    } else {
        favoritos.push(id)
        fav.innerText="Quitar de favoritos";
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favsToString);

    console.log(localStorage);
})