var express = require('express');

var PORT = process.env.PORT || 3000;

var app = express();
app.listen(PORT, () => console.log('server running'));

app.use('/', require('./app/routing/htmlRoutes.js'));
app.use('/api', require('./app/routing/apiRoutes.js'));
