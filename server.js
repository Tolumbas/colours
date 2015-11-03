var app = require('express')();
var bodyparser = require('body-parser');

app.listen(80);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

var queue =[];


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/connections',function(req,res){
	res.json(queue);
	if (queue == 1){queue = [];}
});
app.post('/queueup',function(req,res){
	queue.push(req.body.id);
});