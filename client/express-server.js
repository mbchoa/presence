var express = require('express');
var path = require('path');
var cors = require('cors');

var app = express();

app.use(express.static('dist'));
app.use(cors());

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.FRONTEND_PORT || 4000, function () {
    console.log('Production Express server running at ' + this.address().port);
});
