// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

//Dependencies
const bodyParser = require('body-parser');


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8010;

// Setup Server
const server = app.listen(port, listening);
function listening() {
  console.log("server running");
    console.log(`Server is running on localhost: ${port}`);
}


//post
app.post('/add', postData)
function postData(req, res){
  console.log(req.body)
  projectData = req.body;
  res.send(projectData);
}

app.get("/get", (req,res)=>{
  res.send(projectData);
  console.log(projectData);
})

