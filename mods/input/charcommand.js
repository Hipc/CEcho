/**
 * Created by HIPC on 16/7/26.
 */

var charcommand = {
    //[input mod state]+'_'+[keyUp/keyDown/keyPress]+'_'+[event.key]
    onNormal_keyUp_i:function () {
        input.enableInputarea();
        coreElement.textarea.focus();
        input.mod = 'onInsert';
        cursor.inputMod();
    },
    onNormal_keyUp_a:function () {
        var pos = input.getPosition();
        input.enableInputarea();
        input.inputMove(pos.line, pos.pos + 1, 0);
        coreElement.textarea.focus();
        input.mod = 'onInsert';
        cursor.inputMod();
    },
    onInsert_keyDown_Escape:function () {
        input.disableInputarea();
        coreElement.textarea.blur();
        input.mod = 'onNormal';
        cursor.normalMod()
    },
    onNormal_keyDown_j:function (num) {
        num = num||1;

    },
};
