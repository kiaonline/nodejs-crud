const express       = require('express');
const cors 			= require('cors');
const path          = require('path');
const mongoose      = require('mongoose');

//start the app
const app           = express();
//create a server
const server        = require('http').createServer(app);
//create a websocket
//const io    = require('socket.io')(server);

//start db : mongoose
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser:true }
);
//root path
let root_dir 		= path.join(__dirname,'../');
const routes 		= require(path.join(root_dir,'src/routes'));


//use the public path
app.use(express.static(path.join(root_dir,'/public')));
app.set('views', path.join(root_dir,'/public'));

//render html
app.engine('html',require('ejs').renderFile);
app.set('view engine','html')					//set the render engine
app.use(express.json());						//enable json
app.use(cors());								//enable cors cross origns security

//Routes
app.get('/',(req,res) => {
    res.render('index.html')
})

app.use('/api',routes);


server.listen(3000,()=>{
    console.log('listener on port 3000')
})

module.exports = app;