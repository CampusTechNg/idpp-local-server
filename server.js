//var utils = require("bolt-internal-utils");
var crypto;
try {
 	crypto = require('crypto');
} catch (err) {
 	console.log('crypto support is disabled!');
}
var getRandomString = function(length){
	if(crypto) {
		return crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0, length);   /** return required number of characters */
	}
	else {
		return Date.now.toString();
	}
}

var bodyParser = require('body-parser');
var exec = require('child_process').exec, child;
var express = require('express');
var fs = require('fs');
var path = require('path');

//var multer = require('multer'), 
	/*storage =   multer.diskStorage({
	  destination: function (req, file, callback) {
	    callback(null, 'public/photos/');
	  },
	  filename: function (req, file, callback) {
	    callback(null, file.fieldname + '-' + Date.now());
	  }
	}),
	upload = multer({ storage : storage})*///upload = multer({ dest : 'public/photos/'});


/*********************JAVA******************
var java_call = function(_class, method, args, callback){
	var argsStr = "";
	if(args){
		argsStr = JSON.stringify(args);
	}

	var file = path.join(__dirname, 'SourceAFIS.exe');
	child = exec(file + ' call ' + _class + ' ' + method + ' ' + argsStr, callback);
}*/
/*
var mkdirp = require('mkdirp');
    
mkdirp('/tmp/foo/bar/baz', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});
*/

var app = express();

//app.use(express.static(__dirname));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use('/public', express.static(__dirname + "/public"));

app.use(function (req, res, next) {
	res.set('Content-Type', 'application/json');
	next();
});

app.post('/enroll', function (request, response) {
	var body = request.body;
	var id = body.id;
	var first_name = body.first_name;
	var last_name = body.last_name;
	var other_names = body.other_names;
	var dob = body.dob;
	var yob = body.yob;
	var gender = body.gender;
	var marital_status = body.marital_status;
	var state = body.state;
	var lga = body.lga;
	var photo = body.photo;
	var photo_location;

	try {
		fs.mkdirSync(__dirname + "/public/photos/"); //TODO: change to async version
	}
	catch (folderAlreadyExistsError){}
	try {
		fs.mkdirSync(__dirname + "/public/fingers/"); //TODO: change to async version
	}
	catch (folderAlreadyExistsError){}

	if (photo) {
		photo_location = "public/photos/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(photo, 'base64');
		fs.writeFileSync(path.join(__dirname, photo_location), bitmap); //TODO: change to async version
	}
	var finger_1 = body.finger_1;
	var finger_1_location;
	if (finger_1) {
		finger_1_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_1, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_1_location), bitmap); //TODO: change to async version
	}
	var finger_2 = body.finger_2;
	var finger_2_location;
	if (finger_2) {
		finger_2_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_2, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_2_location), bitmap); //TODO: change to async version
	}
	var finger_3 = body.finger_3;
	var finger_3_location;
	if (finger_3) {
		finger_3_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_3, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_3_location), bitmap); //TODO: change to async version
	}
	var finger_4 = body.finger_4;
	var finger_4_location;
	if (finger_4) {
		finger_4_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_4, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_4_location), bitmap); //TODO: change to async version
	}
	var finger_5 = body.finger_5;
	var finger_5_location;
	if (finger_5) {
		finger_5_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_5, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_5_location), bitmap); //TODO: change to async version
	}
	var finger_6 = body.finger_6;
	var finger_6_location;
	if (finger_6) {
		finger_6_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_6, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_6_location), bitmap); //TODO: change to async version
	}
	var finger_7 = body.finger_7;
	var finger_7_location;
	if (finger_7) {
		finger_7_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_7, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_7_location), bitmap); //TODO: change to async version
	}
	var finger_8 = body.finger_8;
	var finger_8_location;
	if (finger_8) {
		finger_8_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_8, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_8_location), bitmap); //TODO: change to async version
	}
	var finger_9 = body.finger_9;
	var finger_9_location;
	if (finger_9) {
		finger_9_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_9, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_9_location), bitmap); //TODO: change to async version
	}
	var finger_10 = body.finger_10;
	var finger_10_location;
	if (finger_10) {
		finger_10_location = "public/fingers/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger_10, 'base64');
		fs.writeFileSync(path.join(__dirname, finger_10_location), bitmap); //TODO: change to async version
	}

	var data = "";
	if (id) data += "id=" + id;
	if (first_name) data += ";first_name=" + first_name;
	if (last_name) data += ";last_name=" + last_name;
	if (other_names) data += ";other_names=" + other_names;
	if (dob) data += ";dob=" + dob;
	if (yob) data += ";yob=" + yob;
	if (gender) data += ";gender=" + gender;
	if (marital_status) data += ";marital_status=" + marital_status;
	if (state) data += ";state=" + state;
	if (lga) data += ";lga=" + lga;
	if (photo_location) data += ";photo=" + photo_location;
	if (finger_1_location) data += ";finger_1=" + finger_1_location;
	if (finger_2_location) data += ";finger_2=" + finger_2_location;
	if (finger_3_location) data += ";finger_3=" + finger_3_location;
	if (finger_4_location) data += ";finger_4=" + finger_4_location;
	if (finger_5_location) data += ";finger_5=" + finger_5_location;
	if (finger_6_location) data += ";finger_6=" + finger_6_location;
	if (finger_7_location) data += ";finger_7=" + finger_7_location;
	if (finger_8_location) data += ";finger_8=" + finger_8_location;
	if (finger_9_location) data += ";finger_9=" + finger_9_location;
	if (finger_10_location) data += ";finger_10=" + finger_10_location;
	child = exec('SourceAFISHelper.exe --action enroll --data "' + data + '"');
	child.stdout.on('data', function (data){
		if (data.indexOf("SourceAFISHelper.exe/enroll/success:") > -1) {
			var indexOfColon = data.indexOf(':');
			var indexOfCR = data.indexOf('\r');
			data = data.substring(indexOfColon + 1, indexOfCR);

			var resBdy = data;
			var returned = { code: 0, body: resBdy };
			response.send(returned);
		}
		else if (data.indexOf("SourceAFISHelper.exe/enroll/failure:") > -1) {
			var indexOfColon = data.indexOf(':');
			var indexOfCR = data.indexOf('\r');
			data = data.substring(indexOfColon + 1, indexOfCR);
			
			var resErr = data;
			var returned = { code: 1, error: resErr };
			response.send(returned);
		}
	});
})

app.post('/identify', function (request, response) {
	var body = request.body;
	var finger = body.finger;
	var finger_location = "";
	if (finger) {
		finger_location = "public/temp/" + getRandomString(25) + ".png";
		var bitmap = new Buffer(finger, 'base64');
		try {
			fs.mkdirSync(__dirname + "/public/temp/"); //TODO: change to async version
		}
		catch (folderAlreadyExistsError){}
		fs.writeFileSync(path.join(__dirname, finger_location), bitmap); //TODO: change to async version
	}

	var data = "finger=" + finger_location;
	child = exec('SourceAFISHelper.exe --action identify --data "' + data + '"');
	child.stdout.on('data', function (data){
		if (data.indexOf("SourceAFISHelper.exe/identify/success:") > -1) {
			var indexOfColon = data.indexOf(':');
			var indexOfCR = data.indexOf('\r');
			data = data.substring(indexOfColon + 1, indexOfCR);

			var resBdy = data;
			var returned = { code: 0, body: resBdy };
			response.send(returned);
		}
		else if (data.indexOf("SourceAFISHelper.exe/identify/failure:") > -1) {
			var indexOfColon = data.indexOf(':');
			var indexOfCR = data.indexOf('\r');
			data = data.substring(indexOfColon + 1, indexOfCR);
			
			var resErr = data;
			var returned = { code: 1, error: resErr };
			response.send(returned);
		}
	});
})

app.get('/history/:id', function (request, response) {
	var id = request.params.id;

	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database : 'idpp'
	});

	connection.connect();

	connection.query('select * from history where id="' + id + '"', function(err, rows, fields) {
	  if (!err){
	  	var result = [];
	  	rows.forEach(function(row){
	  		result.push({id: row.id, date: row.date_registered, event: row.activity})
	  	});
	  	response.send(result);
	  }
	  else
	    console.log('Error while performing Query.');
	});

	connection.end();
})

app.post('/history', function (request, response) {
	var body = request.body;
	var id = body.id;
	var activity = body.event;
	var date = body.date;

	var data = "id=" + id + ";activity=" + activity;
	if (date) data += ";date=" + date;
	child = exec('SourceAFISHelper.exe --action add-activity --data "' + data + '"');
	child.stdout.on('data', function (data){
		if (data.indexOf("SourceAFISHelper.exe/add-activity/success:") > -1) {
			var returned = { code: 0, body: true };
			response.send(returned);
		}
		else if (data.indexOf("SourceAFISHelper.exe/add-activity/failure:") > -1) {
			var indexOfColon = data.indexOf(':');
			var indexOfCR = data.indexOf('\r');
			data = data.substring(indexOfColon + 1, indexOfCR);
			
			var resErr = data;
			var returned = { code: 1, error: resErr };
			response.send(returned);
		}
	});
})

app.get('/ping', function (request, response) {
	console.log("got u");
	response.send("pong")
})

app.get('/:id', function (request, response) {//console.log(request.params.id);
	var data = "id=" + request.params.id;
	if(request.query.fields) {
		data += ";fields=" + request.query.fields;
	}
	child = exec('SourceAFISHelper.exe --action get --data "' + data + '"');
	child.stdout.on('data', function (data){
		if (data.indexOf("SourceAFISHelper.exe/get/success:") > -1) {
			var indexOfColon = data.indexOf(':');//console.log(indexOfColon);
			var indexOfCR = data.indexOf('\r');//console.log(indexOfCR);
			data = data.substring(indexOfColon + 1, indexOfCR);//console.log(data);

			var resBdy = JSON.parse(data);
			var returned = { code: 0, body: resBdy };//console.log(returned);
			response.send(returned);
		}
		else if (data.indexOf("SourceAFISHelper.exe/get/failure:") > -1) {
			var indexOfColon = data.indexOf(':');
			var indexOfCR = data.indexOf('\r');
			data = data.substring(indexOfColon + 1, indexOfCR);
			
			var resErr = data;
			var returned = { code: 1, error: resErr };//console.log(returned);
			response.send(returned);
		}
	});
})

// GET: /history/:id
// [{date, activity}]
// POST: /history
// {id, activity}
// /search

var server = app.listen(process.env.PORT || 3000, "192.168.137.1", function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("IDDP Local Server listening at http://%s:%s", host, port);
});