/**
 * Created by HIPC on 16/8/4.
 */

$(document).ready(function () {
    var editor = coreEditor({separator:javascriptmod.separator,syntax:javascriptmod.syntax});
    editor.memory.mod = 'javascript';
    document.getElementsByTagName('body')[0].appendChild(editor);
});

var javascriptmod = {
    editors:[],
    separator:new RegExp("[. !@#$&*()_=+\\-\\[\\]{}\'\",<>?;:|\\\\]",'g'),
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
    }
};
