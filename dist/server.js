import app from './app.js';
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log('listening on port ' + port); });
