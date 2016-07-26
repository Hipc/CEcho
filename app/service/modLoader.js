/**
 * Created by HIPC on 16/7/25.
 */
var app;
var fs = require('fs');
var R = require('ramda');
var path = require('path');
var express = require('express');
var logger = require('log4js').getLogger(__filename);


var modPath = path.normalize('./mods/');
var modJson = 'mod.json';

var print = function (x) {
    logger.debug('\n',x);
    return x;
};

var setStaticPath = R.curry(function (realpath) {
    app.use('/'+realpath,express.static(path.resolve(realpath)));
    return '/' + realpath;
});

var selectDirectory = R.curry(function (from, item) {
    return fs.statSync(path.join(from, item)).isDirectory();
});

var getPathDirList = function (dir) {
    return R.compose(
        R.map(R.concat(dir)),
        R.filter(selectDirectory(dir)),
        fs.readdirSync
    )(dir)
};

var modList = function () {
    return getPathDirList(modPath);
};

var checkModJson = function (dir) {
    return fs.existsSync(path.join(dir,modJson));
};
var readConfig = function (dir){
    return require(path.relative(__dirname,path.join(dir,modJson)));
};
var redirectConfigPath = R.curry(function (modpath,mod,configPath) {
    return path.join(modpath,mod,configPath);
});
var getReadfilePath = R.curry(function (modpath,config) {
    var rpath = redirectConfigPath(modpath,config.name);
    var tmp = R.assoc('javascript',R.map(rpath, config.javascript),config);
    tmp = R.assoc('css',R.map(rpath, config.css),tmp);
    return tmp;
});
var addPathToStatic = function (config) {
    return {
        javascript: R.map(setStaticPath, config.javascript),
        css: R.map(setStaticPath, config.css)
    }
};

var readFilelist = R.compose(
    R.map(addPathToStatic),
    R.map(getReadfilePath(modPath)),
    R.map(readConfig),
    R.filter(checkModJson)
);

var loadfile = null;

var loadStaticPath = function () {
    loadfile = readFilelist(modList());
    return loadfile;
};


var setApp = function (appp) {
    app = appp;
};

module.exports = {
    setApp:setApp,
    modList: modList,
    loadStaticPath:loadStaticPath,
    loadfile:loadfile
};
