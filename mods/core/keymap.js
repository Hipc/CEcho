// create by HIPC 2016-08-06

//should call keyMap with .bind(editor)
var keyMap = {
    Meta_Backspace:function(){
        var currLine = this.memory.currLine();
        render.initLine(currLine.parentPre);
    },
    Alt_Backspace:function(){

    },
    Control_Backspace:function(){

    },
    Meta_V:function(){
        
    },
    Control_V:function(){

    }
};

var keyCode = {
    "17":"Control",
    "8":"Backspace",
    "18":"Alt"
};
