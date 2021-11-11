console.log('detalle_generos')

let qs = location.search; 
let qsto = new URLSearchParams(qs) 
let id = qsto. get('id'); 

let url = `https://api.themoviedb.org/3/discover/movie?api_key=18244799e13812364e948bca9d25aff1&include_adult=false&include_video=false&page=1&with_genres=genre/${id}`

fetch(url)

	.then(function(response){
	return response.json();
})
	.then(function(data){
    console.log(data);
    let info = data.results
    let lista = document.querySelector('.peliculas')
    let detalle_generos = ""

    for (let i=0; i<info.length; i++){
        console.log(info[i]);
        detalle_generos += 
        `<li class="movies">
            <ul class="movie">
                <a href="">
                    <img class="imgmovie" alt="">
                    <li>${info[i].name}</li>
                </a>
                    <li></li>
                    <li></li>
            </ul>
        </li>`
    }
    
})
	.catch(function(error){
	console.log('El error fue: ' + error);
})

                    