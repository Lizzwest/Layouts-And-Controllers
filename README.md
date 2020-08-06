# Layouts-And-Controllers
This is my repo on Layouts and controllers.

Over the last 2 days, we have been learning about node modules and how to implement them in our work. I will be going over my understanding of these concepts and practices below.

### Let's talk about Node apps

How do we create a node app? 

1. Make a directory and initialize node *inside* that directory.
2. Create your entry point file.(index.js)

We now have a node app!




### What is a node module? 
#### A node module is a set of functions we want to use in our project.

### How do we make a node module?
To create your own module:

1. Set up a Module folder inside your working directory.
2. Use the *module.exports* javascript object to grab the information you want to take and put into other files.
Example:
```javascript
module.exports.beHappy = () =>"Don't worry, Be happy!"
```
3. Within your index.js, link your modules folder so the two can communicate. In this example, my module folder is titled myModules.js.
```javascript
const myModule = require('./myModule.js')
```
I now have my own module and can export the information inside it to my index.js for import.


### Node Packages

Node packages are handy little, well, packages that we can install into our node projects and utilize in our apps. Rather than having to create our own module, we are able to use premade packages to do different things.

A couple I have used are:
*chalk-animation* This one creates pretty colors in the terminal, with a message of your choice. Here is an example of the code.
```javascript
const chalkAnimation = require('chalk-animation');

chalkAnimation.rainbow('Show me the rainbow');
```
*express* 
Express allows us to build a web app that can handle multiple http requests at a defined url. Rather than give an example here, we will dive into creating an express app below.

To use a node package in the project we are working on, we would install the package inside our folder that is already using node.

### Creating a Node app with Express

These are the steps to create a node app using express.

1. Follow steps 1 and 2 to create a Node app.
2. Use ```npm i express``` in the terminal to install express.
3. Inside the index.js file, use the *require* keyword to use express within this app and create an instance of express.

```javacript
const express = require("express")

const app = express()
```
Express is now added to our node app.

### What are express routes?

A route itself is a combo of a url pattern and http verb. Everything *after* the / in front of animals is the url pattern.

```
http://localhost:8000/faves/animals
```
When viewing routes using express, we declare our *home* route using app.listen. If we want our app to listen on port 8000, our code would look like this.
```javascript
app.listen(8000);
```

This is listening for *port* 8000 on our *local* machine.

When we write the code we want to send to the port, we will use the http verb *get*.

```javascript
app.get('/', (req, res) => {
  res.send("Having nothing after the slash makes me your landing or home page! ");
});
```

### Views

Views allow us to connect html files through our express app.

1. Make a views folder.
2. Create an index.html and put in some basic HTML for testing.
3. Use this code to connect your index.js to your index.html.
```javascript
  app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html');
});
```

### Templates

Templates let you insert javascript functionality into your html document.

1. Install ejs inside your working folder.

```npm install ejs

```
2. Changes your index.html to index.ejs, so you can use the ejs template.

3. Instead of 
```javascript  
res.sendFile(__dirname+'/views/index.html');
```
change your code to
```javascript
res.render('index')
```
You can now insert javascript *into* your html document.

*Important to note!*
To insert javascript functinality, you will use *squids*. They look like this : <% code goes here %>.

### Layouts

Layouts allow you to have a single file that dictates what your html documents will look like. 
For example, if you want all your documents to have the same layout, and only want to write the inserting lines of code, you can have a basic layout folder with this:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Html document Layout</title>
</head>
<body>
  <%- body %>
</body>
</html>

```

This tells our documents that they have all the same code as if we had put a boiler plate in each one individually.
You must also *require* the layout within your document.
```javascript
var ejsLayouts = require('express-ejs-layouts');
```

### Controllers

A controllers folder allows you to reduce the amount of routes in a single file to keep it from being bogged down by all the information moving through it.

Within the controller folder you must:

1. *require* express and create an instance of the router via express.
```javascript
var express = require('express');
var router = express.Router();

});
```
2. Add in new code to create a path that will use express and ejs to print your documents on the page. Here is an example.
```javascript

router.get('/foods', function(req, res) {
  res.render('faves/foods', {title: 'Favorite Foods', foods: ['chicken fried steak', 'filet mignon', 'lobster bisque']})
});
```
3. And, finally, include your export path to the router.
```javascript
module.exports = router;
```






