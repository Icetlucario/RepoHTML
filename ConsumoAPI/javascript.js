const API_KEY = 'api_key=ce0dcdd00c899aa0029c470469185d35';
const BASE_URL = 'https://api.themoviedb.org/4';
const API_URL = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => { //Obtener la Info de la API con json
    
    showMovies(data.results); 
    console.log(data)
  })
}

function showMovies(data) {

  main.innerHTML = ''; // Limpio de Filtro para agregar elementos

  data.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie; //Usar para ordenar los filtros
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie'); // lista De Clases
    movieEl.innerHTML = `
      <img src="${IMG_URL+poster_path}" alt="${title}">

      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
      </div>

      <div class="overview">
      <h3></h3>
        ${overview}
      </div>
    `

    main.appendChild(movieEl); // Agregar elementos a la Carpeta Principal

  })

}

function getColor(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

// Escuchador de eventos Clic
form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  
  // llamar metodo getMovies
  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(searchURL + '&query=' + searchTerm);
  } else {
    getMovies(API_URL);
  }
})