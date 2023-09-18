

function askTvSerie() {
  let movie = {
    name: String,
    productYear: Number,
    actors: []
    
  }
  
  
  let stop = false;
  movie.name = prompt('Wath is your favorite film');
  movie.productYear = prompt('What year was the film released?');

  do {
    let actors = {
      name: String,
      age: Number
    }
    
    actors.name = prompt('Which actors were in the film?');
    actors.age = prompt('How old is he');

    movie.actors.push(actors);
    let valid = prompt('Are you finish?');
    if(valid === 'yes'){
      stop = true;
    }
  } while (!stop);

  return movie
}

function randomizeCast(tvSerie = {}){
  let actors = tvSerie.actors;
  for (let i = actors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  
    [actors[i], actors[j]] = [actors[j], actors[i]]; // méthode pour swap les acteurs.
  }
  return tvSerie;
}
let movie = askTvSerie();

console.log(randomizeCast(movie)); 
  
