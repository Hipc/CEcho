/**
 * Created by HIPC on 16/7/25.
 */

$(document).ready(function () {
    core.init();
});

var core = {
    init:function () {
        var textshow = document.createElement('div');
        var textarea = document.createElement('textarea');
        var cursorLayer = document.createElement('div');
        var cursor = document.createElement('div');
        textshow.setAttribute('class','core-textshow');
        textshow.setAttribute('id','core-textshow-1');
        textarea.setAttribute('class','core-textarea');
        textarea.setAttribute('id','core-textarea-1');
        // textarea.setAttribute('disabled','true');
        cursorLayer.setAttribute('class','core-cursorlayer');
        cursorLayer.setAttribute('id','core-cursorLayer-1');
        cursor.setAttribute('class','core-cursor');
        cursor.setAttribute('id','core-cursor-1');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(textarea);
        body.appendChild(cursorLayer);
        body.appendChild(cursor);
        body.appendChild(textshow);


        var coreInitComplete = new CustomEvent(
            'core-init-complete'
        );
        window.dispatchEvent(coreInitComplete);
    },
    CORE_EVENT:{
    },
    getElememt:function () {
        return {
            textarea: $("#core-textarea-1"),
            textshow: $("#core-textshow-1"),
            cursor: $("#core-cursor-1"),
            cursorLayer: $("#core-cursorLayer-1")
        }
    }
};
