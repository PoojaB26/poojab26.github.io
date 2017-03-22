/**
 * Created by pblead26 on 03-Mar-17.
 */
var section2 = document.getElementById('section2');
var constOutput = document.getElementById("constantOutput");

function checkConstant(){

    var radios = document.getElementsByName('constant');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            switch(i){
                case 0: showRemark();
                    constOutput.innerHTML="But omelette doesnt need water.";
                    break;
                case 1: showRemark();
                    constOutput.innerHTML="We certainly don’t put salt in maggi, as far as I remember";
                    break;
                case 2: showRemark();
                    constOutput.innerHTML="That's correct";
                    next();
                    break;

            }

        }
    }
}

function showRemark(){
    constOutput.style.visibility = 'visible';
}

function next(){
    section2.style.visibility = 'visible';
}

function nextPage() {
    $(function() {
        $("#page2").load("page3.html");
    });   }