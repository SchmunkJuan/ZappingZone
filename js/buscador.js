fetch('https://api.themoviedb.org/3/search/multi?api_key=18244799e13812364e948bca9d25aff1&language=en-US&page=1&include_adult=false')
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);

    let buscador = document.querySelector("form");
    let campoBuscar = document.querySelector(".campoBuscar");
    buscador.addEventListener('submit', function(event){
    event.preventDefault();
    if(campoBuscar.value =="") {
    } else{
        this.submit()
    }
})
})
	.catch(function(error){
	console.log('El error fue: ' + error);
})
