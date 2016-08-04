/**
 * Created by HIPC on 16/8/4.
 */
$(document).ready(function () {
    var ceditor = coreEditor();
    document.getElementsByTagName('body')[0].appendChild(ceditor);
    $(ceditor).on('input',function () {
        // renderEditor(this);
        console.log(this.memory.lines());
    })
});

var coreEditor = function(cssOptions){
    var ceditor = document.createElement('div');
    ceditor.setAttribute('class','core-ceditor');
    ceditor.setAttribute('contenteditable','true');
    $(ceditor).on('focus',function () {
        if($(this).text().trim() === '' && ($(this).html().length === 0)){
            render.initEditor(ceditor);
        }
    });
    $(ceditor).on('keydown',function(){
        console.log('div text length is',$(this).text().length);
        if($(this).text().length <= 1 && $(this).find('pre').length <= 1 && event.keyCode === 8){
            console.log('reset editor');
            render.initEditor(ceditor);
            $(ceditor).blur();
            event.preventDefault();
        }
    });
    ceditor.memory = {
        lines:()=>$(ceditor).find('.cecho-pre').length
    };
    //reset css from given option's
    for(var name in cssOptions){
        ceditor.style[name] = cssOptions[name];
    }
    return ceditor;
};

var render = {
    pre:function(){
        var p = document.createElement('pre');
        p.setAttribute('class','cecho-pre');
        p.innerHTML = '<br>';
        return p;
    },
    div:function(){
        var d = document.createElement('div');
        d.setAttribute('class','cecho-div');
        return d;
    },
    initEditor:function (editor) {
        $(editor).html('');
        var p = render.pre();
        var d = render.div();
        d.appendChild(p);
        editor.appendChild(d);
    }
};
