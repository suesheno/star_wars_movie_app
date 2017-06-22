//refers to express in node modules
var express = require('express');

//app is a new express application
var app = express();

//access routes file
var routes = require ("./routes");

//tells express that static assets are in public path directory
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//set view engine
app.set('view engine', 'ejs');
//Route

//home

//first parameter is the url,  second param is a callback
//request, response
app.get('/', routes.home);

// movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//notFound
app.get('*', routes.notFound);

//tells the app to listen to production environment port or 3000
app.listen(process.env.PORT || 3000);