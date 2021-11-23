let formulario = document.querySelector('form');
let inputField = document.querySelector('.Busqueda');
let mensaje = document.querySelector('mensaje');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    console.log('sin resultado');

    if(inputField.value == 0){
        MessageChannel.innerText ="es obligatorio escribir";
        inputField.style.outline = "2px solid red"
    } else if(inputField.value.length < 3){
        MessageChannel.innerText = "Escribe al menos 3 caracteres. "
    } else {
        this.submit()
    }
})

inputField.addEventListener('focus', function(){
    MessageChannel.innerText = '' ;
    inputField.style.outline = " auto"
})

/*search*/

let qs = location.search;
let qsto = new URLSearchParams(qs);
let queryP = qsto.get('busqueda');
let nombreObject = new URLSearchParams(qs)
let nombre = nombreObject.get("busqueda")

let mainTitle = document.querySelector('.searchTitle');
mainTitle = `Resultados busqueda para: ${nombre}`
let urlMovies = `https://api.themoviedb.org/3/search/multi?api_key=18244799e13812364e948bca9d25aff1&language=en-US&query=${queryP}`
console.log(urlMovies);

fetch(urlMovies);

fetch(urlMovies)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        let mainTitle = document.querySelector('h2');
        
        mainTitle.innerHTML = nombre ;
        
        let stringVacioPeli = '';
        let info = data.results;
        
        for (let i = 0; i < info.length; i++) {
			console.log(info[i]);
			stringVacioPeli +=
            `<li class="movies">
        <ul class="movie">
            <a href="">
                <img class="imgmovie"  src="${"https://image.tmdb.org/t/p/original"+data.results[i].poster_path}" alt="">
                <li>${info[i].title}</li>
            </a>
            <li>${info[i].release_date}</li>
            <li>Rating: ${info[i].vote_average}</li>
        </ul>
    </li>`
   
    }
    let container = document.querySelector('.containerPelis')
    container.innerHTML = stringVacioPeli
    

})
.catch(function(error){
    console.log(error);
}) 