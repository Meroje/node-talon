var zerorpc = require("zerorpc");

var client = new zerorpc.Client();
client.connect(process.env.TALON_PORT);

var app = require('express')();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res)
{
    res.send(['<form action="" method="post">',
        '<input name="sender"><br>',
        '<textarea cols="40" rows="8" name="message"></textarea><br>',
        '<button type="submit">Submit</button>',
    '</form>',
   ].join('\n'));
});

app.post('/', function(req, httpRes)
{
    console.log('sending message from '+req.body.sender);
    client.invoke("signature", req.body.sender, req.body.message, function(error, res, more) {
        httpRes.send(res);
    });
});

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});