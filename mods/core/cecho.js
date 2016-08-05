/**
 * Created by HIPC on 16/8/4.
 */
$(document).ready(function () {
    // var ceditor = coreEditor({separator:new RegExp('[ ]','g'),syntax:{"javascript-system":["var"]}});
    // document.getElementsByTagName('body')[0].appendChild(ceditor);
});

var coreEditor = function(options){
    options = options || {};
    var ceditor = document.createElement('div');
    ceditor.setAttribute('class','core-ceditor');
    ceditor.setAttribute('contenteditable','true');
    $(ceditor).on('focus',function () {
        if($(this).text().trim() === '' && ($(this).html().length === 0)){
            render.initEditor(ceditor);
        }
    });
    $(ceditor).on('keydown',function(){
        if($(this).text().length <= 0 && $(this).find('pre').length <= 1 && event.keyCode === 8){
            // render.initEditor(ceditor);
            // $(ceditor).blur();
            event.preventDefault();
        }
    });
    $(ceditor).on('input',function () {
        ceditor.method.updatePos();
        var line = this.memory.currLine();
        var dd = render.lineText(line.parentPre,this.memory.separator,this.memory.syntax);
        line.parentPre.innerHTML = dd;
        this.method.setCursor(
            this.memory.savedCursor.line,
            this.memory.savedCursor.pos
        )
    });
    $(ceditor).on('keyup',function () {
        console.log(this.memory.savedCursor);
    });
    ceditor.memory = {
        // lines:()=>$(ceditor).find('.cecho-pre').length,
        mod:'textedit',
        currLine:function () {
            var basenode = window.getSelection().baseNode;
            var parentPre = basenode;
            while(parentPre.tagName !== 'PRE'){
                parentPre = parentPre.parentNode;
            }
            var line = $(parentPre).index();
            var text = $(parentPre).text();
            return {
                line:line,
                text:text,
                parent:basenode.parentNode,
                baseNode:basenode,
                parentPre:parentPre
            }
        },

        separator:options.separator || new RegExp('[]','g'),
        syntax:options.syntax || {},
        savedCursor:{line:0,pos:0},
    };
    ceditor.method = {
        updatePos:function () {
            ceditor.memory.savedCursor.pos = ceditor.method.cursorPos();
            ceditor.memory.savedCursor.line = ceditor.memory.currLine().line;
        },
        setCursor:function (line,pos) {
            var range = new Range();
            line = $(ceditor).find('.cecho-div').find('.cecho-pre').get(line);
            var elements = $(line).find('span');
            var lineText = $(line).text();
            var count = 0;
            var index = 0;
            // console.log('in setCursor',line,pos);
            while(count < pos && index < 1000){
                count += $(elements[index]).text().length;
                index += 1;
            }
            if(index > 0)index -= 1;
            count -= $(elements[index]).text().length;
            console.log(index,count,elements.get(index))

            range.setEnd(elements.get(index).childNodes[0], pos-count);
            range.setStart(elements.get(index).childNodes[0], pos-count);

            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        },
        cursorPos:function () {
            var selection = window.getSelection();
            var currElement = selection.baseNode.parentNode;
            var currPre = selection.baseNode.parentNode.parentNode;
            var currElementIndex = $(currElement).index();
            if(currElement.tagName != 'SPAN') return 0;
            var count = 0;
            for(var ii = 0; ii < currElementIndex; ii ++){
                count += $(currPre).find('span').get(ii).innerHTML.length;
            }
            count += selection.getRangeAt(0).startOffset;
            return count;
        },
    };
    //reset css from given option's
    for(var name in options.css){
        ceditor.style[name] = options.css[name];
    }
    return ceditor;
};

var render = {
    pre:function(){
        var p = document.createElement('pre');
        p.setAttribute('class','cecho-pre');
        return p;
    },
    div:function(){
        var d = document.createElement('div');
        d.setAttribute('class','cecho-div');
        return d;
    },
    span:function (classArr) {
        if(typeof classArr === 'string'){
            classArr = [classArr];
        }
        var sp = document.createElement('span');
        var classStr = 'cecho-span';
        for(var name in classArr){
            classStr += ' ' + classArr[name];
        }
        sp.setAttribute('class',classStr);
        sp.innerHTML = '<br>';
        return sp;
    },
    initEditor:function (editor) {
        $(editor).html('');
        var p = render.pre();
        var d = render.div();
        var s = render.span();
        s.innerHTML = '<br>';
        d.appendChild(p);
        p.appendChild(s);
        editor.appendChild(d);
    },
    lineText:function(line,separator,syntax) {
        var text = $(line).text();
        var separatedText = text.split(separator);
        var separatorUsed = text.match(separator);
        if(!separatorUsed) separatorUsed = [];
        var renderedStr = '';
        for (var separatedTextIndex in separatedText) {
            var currText = separatedText[separatedTextIndex];
            var sp = render.span();
            sp.innerHTML = currText;
            for (var syntaxName in syntax) {
                var currSyntax = syntax[syntaxName];
                var spanClass = '';
                if (currSyntax.indexOf(currText) >= 0) {
                    spanClass += syntaxName;
                }
                sp = render.span(spanClass);
                sp.innerHTML = currText;
            }
            if(separatorUsed[separatedTextIndex]){
                sp.innerHTML += separatorUsed[separatedTextIndex];
            }
            renderedStr += sp.outerHTML;
        }
        if(renderedStr === '<span class="cecho-span "></span>'){
            renderedStr = '<span class="cecho-span "><br></span>'
        }
        return renderedStr;
    }
};

