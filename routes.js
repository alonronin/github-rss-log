var app = require.main.exports.app,
    request = require('request');

var rss = function(req, res, next){
    request.get(app.get('rss'),
        function(err, response, body){
            req.rss = body;
            next(err);
        })
};

app.get('/', function(req, res){
    res.locals.development = 'development' == app.get('env');
    res.render('index');
});

app.get('/rss', [ rss ], function(req, res){
    res.type('xml').send(req.rss);
});