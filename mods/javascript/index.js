/**
 * Created by HIPC on 16/8/4.
 */

$(document).ready(function () {
    var editor = coreEditor({separator:javascriptmod.separator,syntax:javascriptmod.syntax});
    editor.memory.mod = 'javascript';
    // $(editor).on('input',javascriptmod.renderLine);
    document.getElementsByTagName('body')[0].appendChild(editor);
    // javascriptmod.editors.push(editor);
});

var javascriptmod = {
    editors:[],
    // separator:". !@#$&*()_=+-[]{}\'\",<>/?;:|",
    separator:new RegExp("[. !@#$&*()_=+\\-\\[\\]{}\'\",<>?;:|\\\\]",'g'),
    renderLine:function () {
        var editor = javascriptmod.editors[0];
        var currLine = editor.memory.currLine();
        console.log('reg is ',javascriptmod.separator);
        var strs = currLine.text.split(javascriptmod.separator);
        var mats = currLine.text.match(javascriptmod.separator);
        if(!mats)mats = [];
        var renderedStr = [];
        for(var name in strs){
            renderedStr.push(javascriptmod.matchStr(strs[name]));
        }
        var outerStr = '';
        for(var index in renderedStr){
            outerStr += renderedStr[index];
            if(mats[index]){
                outerStr += mats[index];
            }
        }
        console.log(outerStr);
        currLine.parent.innerHTML = outerStr;
    },
    syntax: {
        "javascript-system": ["abstract", "arguments", "boolean", "break", "byte",
            "case", "catch", "char", "class", "const",
            "continue", "debugger", "default", "delete", "do",
            "double", "else", "enum", "eval", "export",
            "extends", "false", "final", "finally", "float",
            "for", "function", "goto", "if", "implements",
            "import", "in", "instanceof", "int", "interface",
            "let", "long", "native", "new", "null",
            "package", "private", "protected", "public", "return",
            "short", "static", "super", "switch",
            "synchronized", "this", "throw", "throws", "transient",
            "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"]
    },
    matchStr:function (str) {
        var s;
        if(javascriptmod.system.indexOf(str) >= 0){
            s = render.span('javascript-system');
            s.innerHTML = str;
        }else{
            s = render.span();
            s.innerHTML = str;
        }
        str = s.outerHTML;
        return str;
    }
};