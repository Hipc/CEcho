/**
 * Created by HIPC on 16/7/25.
 */

var express = require('express');
var morgan = require('morgan');
var logger = require('log4js').getLogger(__filename);
var https = require('https');

var editor = require('./app/service/editor');

var app = express();
editor.setApp(app);

app.use(morgan('combined'));

app.use('/public',express.static('public'));
// app.use('/public/name/css.js',express.static('app/service/css.js'));

editor.loadMod();
app.get('/',function (req, res) {
    res.send(editor.testpage());
});

app.listen(3000,function () {
    logger.info('start app');
});