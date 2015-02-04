var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT || 5000;
connect().use(serveStatic('./dist/')).listen(port);