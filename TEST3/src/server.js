const express = require('express');
const routes = require('./routes/web');
const app = express();

app.set('view engine', 'ejs'); //usa isso como view engine, e mostra onde ficam (pasta)
app.set('views', 'views');

app.use(express.json());
app.use(routes);
app.listen(8080);
