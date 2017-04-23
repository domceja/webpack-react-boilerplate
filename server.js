var express = require('express');

//create web app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
    console.log("Express Web Server listening on port 3000");
})