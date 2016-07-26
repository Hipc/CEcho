/**
 * Created by HIPC on 16/7/25.
 */
var coreElement;
$(document).ready(function () {
    // $("#core-textshow-1").on('click', input.onCoreTextshowClick);
    coreElement = core.getElememt();
    input.disableInputarea();
    $(document).on('keyup',input.onDocumentKeyUp);
    $(document).on('keydown',input.onDocumentKeyDown);
    $(coreElement.textarea).bind('input',input.onCoreTextareaInput);
});

var input = {
    onCoreTextareaInput:function () {
        cursor.updatePosition();
    },
    onCoreTextshowClick:function () {
    },
    onDocumentKeyUp:function (event) {
        var handler = input.mod + '_keyUp_' + event.key;
        input.runCharCommand(handler);
    },
    onDocumentKeyDown:function (event) {
        var handler = input.mod + '_keyDown_' + event.key;
        input.runCharCommand(handler);
    },
    runCharCommand:function (handler) {
        charcommand[handler]();
        cursor.updatePosition();
    },
    disableInputarea:function () {
        coreElement.textarea.attr('disabled','1');
    },
    enableInputarea:function () {
        coreElement.textarea.attr('disabled',null);
    },
    mod:'onNormal',
    onNormalKeyDown:function (key) {
        var pos = input.getPosition();
        var sel = input.getSelectionByPos(pos.line,pos.pos);
        switch(key){
            case 'h':
                input.inputMove(pos.line,pos.pos-1,0);
                break;
            case 'l':
                input.inputMove(pos.line,pos.pos+1,0);
                break;
            case 'k':
                input.inputMove(pos.line-1,pos.pos,0);
                break;
            case 'j':
                input.inputMove(pos.line+1,pos.pos,0);
            case 'e':
                input.inputMoveBySel(sel + input.wordStep(1).index);
                break;
            case 'E':
                input.inputMoveBySel(sel + input.wordStep(1,' ').index);
                break;
            case 'b':
                input.inputMoveBySel(sel - input.wordStep(-1).index);
                break;
            case 'B':
                input.inputMoveBySel(sel - input.wordStep(-1,' ').index);
                break;
        }
        cursor.updatePosition();
    },
    inputMoveBySel:function (sel,end) {
        end = end||0;
        coreElement.textarea.get(0).selectionStart = sel;
        coreElement.textarea.get(0).selectionEnd = sel + end;
    },
    inputMove:function (line, pos, end) {
        console.log('input move',line,pos)
        var startp = input.getSelectionByPos(line,pos);
        coreElement.textarea.get(0).selectionStart = startp;
        coreElement.textarea.get(0).selectionEnd = startp + end;
    },
    getSelectionByPos:function (line, pos) {
        var text = coreElement.textarea.val();
        var lines = text.split('\n');
        for(var ii = 0; ii < lines.length; ii++){
            lines[ii] += '\n';
        }
        var sel = 0;
        for(var ii = 0; ii < line; ii ++){
            sel += lines[ii].length;
        }
        console.log('in get selection',line,pos,lines[line].length);
        if(pos >= lines[line].length)pos = lines[line].length - 1;
        if(pos < 0)pos = 0;
        sel += pos;
        return sel;
    },
    getPosition:function () {
        var text = coreElement.textarea.val();
        var lines = text.split('\n');
        for(var ii = 0; ii < lines.length; ii ++){
            lines[ii] += '\n';
        }
        var startpos = coreElement.textarea.get(0).selectionStart;
        var currline = 0;
        var calcu = 0;
        for(var ii = 0; ii < lines.length; ii ++){
            if(calcu + lines[ii].length > startpos){
                currline = ii;
                break;
            }
            calcu += lines[ii].length;
        }
        return {
            line:currline,
            pos:startpos - calcu
        }
    },
    wordStep:function (num,specialChar) {
        specialChar = specialChar || input.wordSeparator;
        var text = coreElement.textarea.val();
        var startp = coreElement.textarea.get(0).selectionStart;
        text = num>0?text.substr(startp + 1):R.reverse(text.substr(0,startp));
        console.log(text);
        var count = Math.abs(num);
        var preindex = -1;
        var index = 0;
        while(count > 0){
            if(specialChar.indexOf(text[index]) >= 0){
                preindex = index;
                if(index !== 0)count -= 1;
            }
            index += 1;
            if(index >= text.length) {index +=1;break;}
        }
        return {
            index:index - 1,
            preindex:preindex
        }
    },
    wordSeparator:"~!@#$%^&*()_+`-=<>,./?;:'\"[]{}\\|\n "
};

var cursor = {
    updatePosition:function () {
        var pos = coreElement.textarea.textareaHelper('caretPos');
        coreElement.cursor.css('left',pos.left);
        coreElement.cursor.css('top',pos.top);
    },
    inputMod:function () {
        coreElement.cursor.css('width','2px');
    },
    normalMod:function () {
        coreElement.cursor.css('width','1.1ex');
    }
};