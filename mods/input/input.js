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
        var handler = input.mod + 'KeyUp';
        input[handler](event.key);
    },
    onDocumentKeyDown:function (event) {
        var handler = input.mod + 'KeyDown';
        input[handler](event.key);
    },
    disableInputarea:function () {
        coreElement.textarea.attr('disabled','1');
    },
    enableInputarea:function () {
        coreElement.textarea.attr('disabled',null);
    },
    mod:'onNormal',
    onNormalKeyDown:function (key) {
        switch(key){
            case 'h':
                input.inputMove(-1,0);
                cursor.updatePosition();
                break;
            case 'l':
                input.inputMove(1,0);
                cursor.updatePosition();
        }
    },
    inputMove:function (start,end) {
        var startp = coreElement.textarea.get(0).selectionStart += start;
        coreElement.textarea.get(0).selectionEnd = startp + end;
    },
    onNormalKeyUp:function (key) {
        switch(key){
            case 'i':
                input.enableInputarea();
                coreElement.textarea.focus();
                input.mod = 'onInsert';
                cursor.inputMod();
                break;
        }
    },
    onInsertKeyDown:function (key) {
        switch(key){
            case 'Escape':
                input.disableInputarea();
                coreElement.textarea.blur();
                input.mod = 'onNormal';
                cursor.normalMod();
                break;
            default:
                // cursor.updatePosition();
        }
    }
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