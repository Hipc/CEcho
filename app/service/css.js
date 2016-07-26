/**
 * Created by HIPC on 16/7/25.
 */

var R = require('ramda');
var utils = require('./../utils/utils');

// Object -> String
var attrToString = function (item) {
    return R.prop('name',item) + ':' + R.prop('value',item) + ';';
};

var attrToObj = R.curry(function (attrName, attrValue) {
    return {
        name:attrName,
        value:attrValue
    }
});

// [Object] -> [String]
var makeAttr = R.map(attrToString);

// [String] -> String
var makeLabel = R.reduce((res,item)=>res + item + ' ','');

var closeAttr = function (attr) {
    return '{' + attr + '};';
};

var makeCSS = R.curry(function (labellist, attrlist) {
    return utils.merge([
        makeLabel(labellist),
        closeAttr(
            makeAttr(attrlist)
        )
    ])
});

module.exports = {
    backgroundColor:attrToObj('background-color'),
    makeCSS:makeCSS
};
