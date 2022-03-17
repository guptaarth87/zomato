const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose')

const PORT=3010;
// import the routes
const routes = require('./Routes/index');


// initialise the libraries
const app = express();
app.use(bodyParser.json());




// handle CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// start using the routes
app.use('/', routes);


// connect to the mongoDB
mongoose.connect(
    'mongodb+srv://arthgupta861:arthgupta861@cluster0.e0ech.mongodb.net/zomato?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {

    console.log('Connected to MongoDB');
    
    // start the server
    app.listen(PORT,()=>{
        console.log(`server started! ar port ${PORT}`)
    })

}).catch(error => {
    console.log('Error in Connection ' + error);
});
