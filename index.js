const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts');
app.use('/faves', require('./controllers/faves'));

app.set('view engine', 'ejs')
app.use(ejsLayouts);


app.get('/', function(req, res) {
    res.render('home');
  });

  app.get('/animals', function(req, res) {
    res.render('animals', {title: 'Favorite Animals', animals: ['cats', 'dogs', 'bunnies']})
  });

  app.get('/animals-least', function(req, res) {
    res.render('animals', {title: 'Least Favorite Animals', animals: ['skunks', 'spiders', 'gorilla']})
  });

  app.get('/foods', function(req, res) {
    res.render('foods', {title: 'Favorite Foods', foods: ['chicken fried steak', 'filet mignon', 'lobster bisque']})
  });
  app.get('/foods-least', function(req, res) {
    res.render('foods', {title: 'Least Favorite Foods', foods: ['asparagus', 'salad', 'ahi tuna']})
  });

app.listen(8000, ()=>{
    console.log("Are we there yet?")
})