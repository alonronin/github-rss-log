/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , path = require('path')
    , dust = require('dustjs-linkedin');

var app = module.exports.app = express();

// all environments
app.set('port', process.env.PORT || 80);

app.engine('dust', require('consolidate').dust);

app.set('view engine', 'dust');
app.set('views', path.join(__dirname, 'views'));

app.set('rss', 'https://github.com/Empeeric/Sentr/commits/master.atom?login=alonronin&token=1d2fb8b581da136e39cd6101e20ad631');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    dust.optimizers.format = function(ctx, node) { return node };

    app.use(express.errorHandler());
}

require('./compile_templates');
require('./routes');

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
