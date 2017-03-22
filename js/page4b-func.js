/**
 * Created by pblead26 on 04-Mar-17.
 */

function showSection2() {
    document.getElementById('section2').style.visibility = "visible";
}

function showDivGoNext() {
    document.getElementById('GoNext').style.visibility = "visible";
}

function nextPage() {
    $(function() {
        $("#page4b").load("page5.html");
    });   }

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var outputText = document.getElementById("output");
    var resultText = document.getElementById("result");

    outputText.innerHTML = outputText.innerHTML + text;
    showSection2();

}


function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() {

    var finalProg =  document.getElementById("test_code").value;
    var mypre = document.getElementById("output");
    mypre.innerHTML = '';
    Sk.pre = "output";
    Sk.configure({output:outf, read:builtinRead});
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, finalProg, true);
    });
    myPromise.then(function(mod) {
            console.log('success');
        },
        function(err) {
            console.log(err.toString());
        });
}
