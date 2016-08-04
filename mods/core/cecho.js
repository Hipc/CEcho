/**
 * Created by HIPC on 16/8/4.
 */
$(document).ready(function () {
    var ceditor = coreEditor();
    document.getElementsByTagName('body')[0].appendChild(ceditor);
});

var coreEditor = function(cssOptions){
    var ceditor = document.createElement('div');
    ceditor.setAttribute('class','core-ceditor');
    ceditor.setAttribute('contenteditable','true');
    var addBlankDiv = function () {
        var firstLine = document.createElement('div');
        firstLine.innerHTML = '<br>';
        ceditor.appendChild(firstLine);
    };
    $(ceditor).on('focus',function () {
        if($(this).text().trim() === '' && ($(this).html().length === 0)){
            addBlankDiv();
        }
    });
    $(ceditor).on('input',function(){
        if($(this).text().trim() === '' && ($(this).html().length === 0)){
            addBlankDiv();
        }
    });
    //reset css from given option's
    for(var name in cssOptions){
        ceditor.style[name] = cssOptions[name];
    }
    return ceditor;
};

