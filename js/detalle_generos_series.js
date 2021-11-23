let qs = location.search
let qslo = new URLSearchParams(qs);

let id = qslo.get ('id');

let genero = qslo.get ('genre_ids');

let url = (`https://api.themoviedb.org/3/discover/tv?api_key=18244799e13812364e948bca9d25aff1&with_genres=${id}`)

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
        let title = document.querySelector('h2')

        title.innerHTML = genero
        
        let info = data.results
        let detalle_generos = ""
        
        for (let i = 0; i < info.length; i++) {
			console.log(info[i]);
			detalle_generos +=
				`<li class="movies">
            <ul class="movie">
                <a href="">
                    <img class="imgmovie"  src="${"https://image.tmdb.org/t/p/original"+data.results[i].poster_path}" alt="">
                    <li>${info[i].name}</li>
                </a>
                <li>${info[i].first_air_date}</li>
                <li>Rating: ${info[i].vote_average}</li>
            </ul>
        </li>`
        }
        
        let detalle = document.querySelector('.popmovie')
		detalle.innerHTML = detalle_generos
    })
    .catch(function(error){
		console.log('El error fue: ' + error);
    }) 