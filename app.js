const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const homeRoutes = require('./routes/homeRoutes'); 

app.engine('.handlebars', engine({
    defaultLayout: 'main',
    extname: '.handlebars'
}));
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, 'css')));

app.use('/', homeRoutes); 

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});