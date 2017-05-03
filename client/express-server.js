var express = require('express');
var path = require('path');
var cors = require('cors');
var proxy = require('http-proxy-middleware');

var app = express();

app.use(express.static('dist'));
app.use(cors());
app.use('/api', proxy({
    target: `http://${process.env.BACKEND_HOST || 'localhost'}:${process.env.BACKEND_PORT || 3000}`,
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.FRONTEND_PORT || 4000, function () {
    console.log('Production Express server running at ' + this.address().port);
});
