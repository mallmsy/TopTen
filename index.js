let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');


// Initialize the app
let app = express();

let apiRoutes = require("./routes")

// Configure bodyparser to handle post requests
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/topten', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
console.log("Error connecting db")
else
console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running TopTen on port " + port);
});