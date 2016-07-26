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
    currpos:0,
    numCmd:'',
    updateCurrpos:function () {
        var pos = input.getPosition();
        input.currpos = pos.pos;
    },
    onCoreTextareaInput:function () {
        input.updateCurrpos();
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
        if(charcommand[handler]) {
            console.log(input.numCmd);
            charcommand[handler](parseInt(input.numCmd));
            cursor.updatePosition();
        }
    },
    disableInputarea:function () {
        coreElement.textarea.attr('disabled','1');
    },
    enableInputarea:function () {
        coreElement.textarea.attr('disabled',null);
    },
    mod:'onNormal',
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
    inputMovev2:function (startMove,endMove) {
        startMove = startMove || 0;
        endMove = endMove || startMove;
        var currSelStart = coreElement.textarea.get(0).selectionStart;
        var currSelEnd = coreElement.textarea.get(0).selectionEnd;
        coreElement.textarea.get(0).selectionStart = currSelStart + startMove;
        coreElement.textarea.get(0).selectionEnd = currSelEnd + endMove;
    },
    inputMoveToSel:function (startSel, endSel) {
        endSel = endSel || startSel;
        var currSelStart = coreElement.textarea.get(0).selectionStart;
        var currSelEnd = coreElement.textarea.get(0).selectionEnd;
        console.log('in inputmove sel ',currSelStart,currSelEnd,startSel,endSel);
        input.inputMovev2(startSel - currSelStart, endSel - currSelEnd);
    },
    getSelectionByPos:function (line, pos) {
        console.log('in get selection by pos',line,pos);
        var text = coreElement.textarea.val();
        var lines = text.split('\n');
        for(var ii = 0; ii < lines.length; ii++){
            lines[ii] += '\n';
        }
        if(line >= lines.length) line = lines.length - 1;
        if(line < 0)line = 0;
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