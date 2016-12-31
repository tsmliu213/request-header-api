var express = require('express');
var path = require('path');

var app = express();
app.use('/', express.static(path.join(__dirname, '/static')));
app.get('/api/whoami', function(req, res) {
    var ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers['accept-language'];
    var software = req.headers['user-agent'];
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        "ipaddress": ipAddress,
        "language": language,
        "software": software
    }));
});
app.listen(process.env.PORT || 8080);