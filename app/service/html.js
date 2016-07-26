/**
 * Created by HIPC on 16/7/25.
 */
var R = require('ramda');
var utils = require('./../utils/utils');

var name = R.prop('name');
var value = R.prop('value');

var merge = function () {
    return utils.merge(arguments);
};

// Object [a]->String [b]
var attrList = function (item) {
    return name(item) + '="' + value(item) + '"';
};

var addAttrToLabel = R.curry( function (label, attrlist) {
    return R.reduce((res, item)=>res + ' ' + item, label, attrlist);
});

var makeLabelStart = function (label) {
    return '<' + label + '>';
};

var makeLabelEnd = function (label) {
    return '</' + label + '>';
};

// var addInnerHtml = R.curry(function (label, innerHtml) {
//     return makeLabelStart(label) + innerHtml + makeLabelEnd(label);
// });

var makeHtml = R.curry(function (label, innerHtml, attr) {
    return R.compose(
        R.concat(
            makeLabelStart(
                addAttrToLabel(
                    label,
                    R.map(attrList, attr)
                )
            )
        ),
        R.concat(innerHtml),
        makeLabelEnd
    )(label);
});

// var makeHtml2 = R.curry(function (label, innerHtml, attr) {
//     attr = attr || [];
//     return addInnerHtml(
//         addAttrToLabel(
//             label,
//             R.map(attrList, attr)
//         ),
//         innerHtml
//     )
// });

module.exports = {
    makeHtml:makeHtml,
    script:makeHtml('script',''),
    link:R.compose(
        makeLabelStart,
        addAttrToLabel('link'),
        R.map(attrList)
    ),
    head:makeHtml('head'),
    body:makeHtml('body'),
    html:makeHtml('html'),
    style:makeHtml('style',R.__,[{name:'type',value:'text/css'}]),
    merge:merge
};
