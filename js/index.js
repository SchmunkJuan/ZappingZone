fetch('https://api.themoviedb.org/3/movie/popular?api_key=18244799e13812364e948bca9d25aff1&page=1')

	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);

		let info = data.results
		let lista = document.querySelector(".popmovie")
		let moviespop = ""

		for (let i = 0; i < 5; i++) {
			console.log(info[i]);
			moviespop +=
				`<li class="movies">
            <ul class="movie">
                <a href="detalle_movie.html">
                    <img class="imgmovie" src="${ "https://image.tmdb.org/t/p/original" + data.results[i].poster_path}">
                        <li>${info[i].title}</li>
                </a>
                        <li>${info[i].release_date}</li>
                        <li>Rating: ${info[i].vote_average}</li>
            </ul>
        </li>`
		}

		console.log(moviespop)
		lista.innerHTML += moviespop;
	})
	.catch(function(error) {
		console.log('El error fue: ' + error);
	})

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=18244799e13812364e948bca9d25aff1&page=1')

	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);

		let info = data.results
		let lista = document.querySelector("#popmovie2")
		let moviesval = ""

		for (let i = 0; i < 5; i++) {
			console.log(info[i]);
			moviesval +=
				`<li class="movies">
            <ul class="movie">
                <a href="detalle_movie.html">
                    <img class="imgmovie" src="${ "https://image.tmdb.org/t/p/original" + data.results[i].poster_path}">
                        <li>${info[i].title}</li>
                </a>
                        <li>${info[i].release_date}</li>
                        <li>Rating: ${info[i].vote_average}</li>
            </ul>
        </li>`
		}

		console.log(moviesval)
		lista.innerHTML += moviesval;
	})
	.catch(function(error) {
		console.log('El error fue: ' + error);
	})

fetch('https://api.themoviedb.org/3/tv/popular?api_key=18244799e13812364e948bca9d25aff1&page=1')

	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);

		let info = data.results
		let lista = document.querySelector("#series")
		let seriespop = ""

		for (let i = 0; i < 5; i++) {
			console.log(info[i]);
			seriespop +=
				`<li class="movies">
        <ul class="movie">
            <a href="detalle_series.html">
                <img class="imgmovie" src="${"https://image.tmdb.org/t/p/original" + data.results[i].poster_path}" alt="">
                <li>${info[i].name}</li>
            </a>
            <li>${info[i].first_air_date}"</li>
            <li>Raiting:${info[i].vote_average}</li>
        </ul>
        </li>`
		}

		console.log(seriespop)
		lista.innerHTML += seriespop;
	})
	.catch(function(error) {
		console.log('El error fue: ' + error);
	})