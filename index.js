/* Biblioteca express */
const express = require('express');
/* Função do express */
const app = express();
/* Caminho relativo */
const path = require('path');
/* Criando rotas */
const router = express.Router();

/* Criando a função da rota */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
    console.log(__dirname);
    console.log("index");
});

router.get('/about', function(req, res) {
    console.log("About");
    res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/products', function(req, res) {
    console.log("Products");
    res.sendFile(path.join(__dirname+'/products.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Server rodando");