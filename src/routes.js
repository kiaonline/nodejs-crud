const express 		= require('express');
const routes		= express.Router();
const requireDir	= require('require-dir');
const path          = require('path');

//load models
requireDir(path.join(__dirname,'/models'));

const ProductController	= require('./controllers/ProductController');


routes.get('/about',(req,res) => {
    return res.send('hello world');
})

routes.get('/',(req,res) => {
    res.render('api.html')
})

routes.get('/products/',ProductController.index);
routes.get('/products/page/:page',ProductController.index);

routes.get('/products/:id',ProductController.show);
routes.delete('/products/:id',ProductController.destroy);
routes.post('/products',ProductController.store);
routes.post('/products',ProductController.store);



module.exports = routes;