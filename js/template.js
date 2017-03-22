/**
 * Created by pblead26 on 24-Feb-17.
 */
var el = document.getElementById("codeHere");
var range = document.createRange();
var sel = window.getSelection();
range.setStart(el.childNodes[0], 0);
range.collapse(true);
sel.removeAllRanges();
sel.addRange(range);




function getCode(){
    var test=document.getElementById("test").innerHTML;
    var str = 'print "hello"';
    if(test===str){
        alert(test);
    }

}