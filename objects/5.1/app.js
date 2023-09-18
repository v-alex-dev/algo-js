
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
      name: '',
      age: 0
    }
    let finish = false
    
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
console.log(askTvSerie());
