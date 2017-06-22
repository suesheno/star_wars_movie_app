var moviesJSON = require('../movies.json');

//home
//first parameter is the url,  second param is a callback
//request, response
exports.home = function(req, res){
    //fetch the movie array and assign it to the variable
    var movies = moviesJSON.movies;
    /*
    var moviePosters = [];
    
    another way to get movie poster from the json
    for(var i = 0; i < movies.length; i++){
        //concatinating each movie poster name to the moviePoster array
        moviePosters = moviePosters.concat(movies[i].poster);
    }
    */
    //send info back to the client
    //refers to the home.ejs file in views
    res.render('home', {
        title: "Star Wars Movies",
        movies: movies,
        
    })
};

// movie_single
exports.movie_single =  function(req, res){
    //the number being passed in the url is store in this var
    var episode_number = req.params.episode_number;
    
    var movies = moviesJSON.movies;
    //episode_number refers to the number in the url -1 array starts at 0

    if (episode_number >= 1 && episode_number <= 6 ){
        var movie = movies[episode_number - 1];

        var title = movie.title;
        var main_characters = movie.main_characters;

        res.render('movie_single',{
            movies : movies,
            title : title,
            movie : movie,
            main_characters : main_characters
        })
    }else{
        res.render('notFound', {
            movies : movies,
            title : "This is not the page your are looking for"
        })
    }
};

//notFound
exports.notFound = function(req, res){
    
    var movies = moviesJSON.movies;
    
    res.render('notFound', {
            movies : movies,
            title : "This is not the page your are looking for"
        })
};