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
        input.numCmd = '';
    },
    onNormal_keyUp_a:function () {
        var pos = input.getPosition();
        input.enableInputarea();
        input.inputMove(pos.line, pos.pos + 1, 0);
        coreElement.textarea.focus();
        input.mod = 'onInsert';
        cursor.inputMod();
        input.numCmd = '';
    },
    onInsert_keyDown_Escape:function () {
        input.disableInputarea();
        coreElement.textarea.blur();
        input.mod = 'onNormal';
        cursor.normalMod()
        input.numCmd = '';
    },
    onNormal_keyDown_h:function (num) {
        num = num||1;
        var pos = input.getPosition();
        var sel = input.getSelectionByPos(pos.line,pos.pos-num);
        input.inputMoveToSel(sel);
        input.updateCurrpos();
        input.numCmd = '';
    },
    onNormal_keyDown_l:function (num) {
        num = num||1;
        var pos = input.getPosition();
        var sel = input.getSelectionByPos(pos.line,pos.pos+num);
        input.inputMoveToSel(sel);
        input.updateCurrpos();
        input.numCmd = '';
    },
    onNormal_keyDown_k:function (num) {
        num = num || 1;
        var pos = input.getPosition();
        var sel = input.getSelectionByPos(pos.line-num,input.currpos);
        input.inputMoveToSel(sel);
        input.numCmd = '';
    },
    onNormal_keyDown_j:function (num) {
        num = num || 1;
        var pos = input.getPosition();
        var sel = input.getSelectionByPos(pos.line+num,input.currpos);
        input.inputMoveToSel(sel);
        input.numCmd = '';
    },
    onNormal_keyDown_e:function (num) {
        num = num || 1;
        var step = input.wordStep(num);
        input.inputMovev2(step.index);
        input.updateCurrpos();
        input.numCmd = '';
    },
    onNormal_keyDown_b:function (num) {
        num = num || 1;
        var step = input.wordStep(-num);
        input.inputMovev2(-step.index);
        input.updateCurrpos();
        input.numCmd = '';
    },
    onNormal_keyDown_1:function () {
        input.numCmd += '1';
    },
    onNormal_keyDown_2:function () {
        input.numCmd += '2';
    },
    onNormal_keyDown_3:function () {
        input.numCmd += '3';
    },
    onNormal_keyDown_4:function () {
        input.numCmd += '4';
    },
    onNormal_keyDown_5:function () {
        input.numCmd += '5';
    },
    onNormal_keyDown_6:function () {
        input.numCmd += '6';
    },
    onNormal_keyDown_7:function () {
        input.numCmd += '7';
    },
    onNormal_keyDown_8:function () {
        input.numCmd += '8';
    },
    onNormal_keyDown_9:function () {
        input.numCmd += '9';
    },
    onNormal_keyDown_0:function () {
        input.numCmd += '0';
    }
};
