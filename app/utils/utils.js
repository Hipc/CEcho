/**
 * Created by HIPC on 16/7/25.
 */

var R = require('ramda');

// [String]->String
var merge = R.reduce((res,item)=>R.concat(res,item),'');

module.exports = {
    merge:merge
};
