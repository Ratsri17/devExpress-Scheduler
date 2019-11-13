let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res){
   res.sendFile(__dirname + '/dist/index.html');
});

let port = process.env.PORT || 80;
app.listen(port, function(){
   console.log('server running on port ' + port + '.');
})