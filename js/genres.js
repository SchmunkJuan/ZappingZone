fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=18244799e13812364e948bca9d25aff1`)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);

		let info = data.genres
		let lista = document.querySelector("#peliculas")
		let generos = ""

		for (let i = 0; i < info.length; i++) {
			console.log(info[i]);
			generos += `
        <li class="genero">
            <a href="detalle_generos_pelis.html?id=${info[i].id}&genre_ids=${info[i].name}" > ${info[i].name} </a>
        </li>`
		};

		console.log(generos)
		lista.innerHTML += generos;

	})
	.catch(function(error) {
		console.log('El error fue: ' + error);
	})

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=18244799e13812364e948bca9d25aff1`)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);

		let info = data.genres
		let lista = document.querySelector("#series")
		let generos = ""

		for (let i = 0; i < info.length; i++) {
			console.log(info[i]);
			generos += `
        <li class="genero">
        <a href="detalle_generos_series.html?id=${info[i].id}&genre_ids=${info[i].
            name}" > ${info[i].name} </a>
        </li>`
		};

		console.log(generos)
		lista.innerHTML += generos;

	})
	.catch(function(error) {
		console.log('El error fue: ' + error);
	})