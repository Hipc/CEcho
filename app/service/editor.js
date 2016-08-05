/**
 * Created by HIPC on 16/7/25.
 */
var app;
var html = require('./html');
var css = require('./css');
var express = require('express');
var modLoader = require('./modLoader');
var utils = require('./../utils/utils');
var R = require('ramda');

var loadMod = function () {
    modLoader.loadStaticPath();

    console.log(

    )
};

var getPage = function () {
    return function () {
        return html.html(
            html.merge(
                html.head(
                    html.merge(
                        html.script(
                            [{name: 'src', value: '/public/javascript/lib/jquery.js'}]
                        ),
                        html.script(
                            [{name: 'src', value: '/public/javascript/lib/ramda.js'}]
                        ),
                        utils.merge(
                            R.map(
                                html.link,
                                R.map(function (obj) {
                                    return [{name: 'rel', value: 'stylesheet'}, {name: 'href', value: obj.css}]
                                }, modLoader.loadStaticPath())
                            )
                        )
                    ),
                    []
                ),
                html.body(
                    utils.merge(
                        R.map(
                            html.script,
                            R.map(function (item) {
                                    return [item];
                                },
                                R.flatten(
                                    R.map(
                                        function (obj) {
                                            return R.map(
                                                function (list) {
                                                    return {
                                                        name: 'src',
                                                        value: list
                                                    }
                                                },
                                                obj.javascript
                                            )
                                        },
                                        modLoader.loadStaticPath()
                                    )
                                )
                            )
                            // R.map(function (obj) {
                            //     return [{name: 'src', value: obj.javascript}];
                            // }, modLoader.loadStaticPath())
                        )
                    ),
                    []
                )
            ),
            []
        );
    }
};

var setApp = function (appp) {
    app = appp;
    modLoader.setApp(app);
};

module.exports = {
    setApp: setApp,
    testpage: getPage(),
    loadMod: loadMod
};

