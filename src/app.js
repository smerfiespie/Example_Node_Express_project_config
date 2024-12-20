 // make sure you have installed express and morgan using npm i morgan etc. 

 
// import Express library using the require() method
const express = require("express");
 // import Morgan (logging) library using the require() method 
const morgan = require('morgan');

// create express app
const app = express();

// passing Morgan to Express with the .use() method
app.use(morgan('dev'));

// create sayHello middleware func using the
// (request, response, next) function
// log to to terminal "Hello Murphie" 
// after send a response "who said that? O.o" to the server
const sayHello = (req, res, next) => {
    console.log("Hello Murphie!");
    
    // responds "who said that O.o to server"
    res.send('who said that? O.o');
};

// call sayHello func using app.use() method
app.use(sayHello);

// export module
module.exports = app;


