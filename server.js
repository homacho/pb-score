//necessary imports
var	path = require('path'),
	express = require('express'),
	http = require('http')

//simplify to shorthand
var DIST_DIR = path.join(__dirname, 'dist'),
	app = express(),
	//create the server
	server = http.createServer(app)

//the port the app will connect to
const port = 8080

//start server
server.listen(port, function (error){
	//if there is an error
	if(error){
		console.log(error)
	}
	//notify you've connected to the server
	else{
		console.log('Server online: connected to port ' +port)
	}
})

//express will read from the "DIST_DIR" directory
app.use(express.static(DIST_DIR));

//serve this
app.get('*', function(req, res) {
	res.sendFile(path.join(DIST_DIR, "index.html"));
});
