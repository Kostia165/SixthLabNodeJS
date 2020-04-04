var userService = require('./services/service');
// index.js
var express = require('express');
var app = express();
var request = require('request');
var config = require('./config.js');
var db_service = require('./services/db_service');

app.use(function (req, res, next) {
    const d = new Date();
    var dt = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
    var pth = req.path;
    var agent = req.headers['user-agent'];

    db_service.toCreateRecord([dt, pth, agent]);
    next();
});

//get 5 records
app.get('/getRecords', async(req, res) =>{
    var arr_ret = await db_service.toGetRecords(5);
    var str = "";
    arr_ret.forEach(element => {
        str += element['id'];
        str += "   ";
        str += element['date'];
        str += "   ";
        str += element['path'];
        str += "   ";
        str += element['user_agent'];
        str += "<br>";
    });
    res.send(str);
});

app.get('/', function(req, res) {
    request('http://' + config.get('ip') + ':' + config.get('port') +'/' , function(error, response, body) {
        res.send(body);
    });
});

/*
app.get('/:name', function(req, res) {
    var userInstance = new userService();
    res.send(userInstance.authorizate(req.params.name));
});*/

module.exports.app = app
