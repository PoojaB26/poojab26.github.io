/**
 * Created by pblead26 on 04-Mar-17.
 */

function showDiv() {
    document.getElementById('GoNext').style.visibility = "visible";
}

function nextPage() {
    $(function() {
        $("#page3").load("page4.html");
    });   }

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var outputText = document.getElementById("output");
    var resultText = document.getElementById("result");

    var out = outputText.innerHTML + text;
    outputText.innerHTML = out;

    var pattern = /True\nFalse\nTrue/;
    var output = pattern.test(out);

    if(output.toString()==="true"){
        resultText.innerHTML = "That is right!";
        showDiv();
    }
    else
    {
        resultText.innerHTML = "Try Again";
    }


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
    var userCode = document.getElementById("user_code").value;
    var PreDefinedCode = document.getElementById("predefined").value;
    var finalProg = userCode + "\n" + PreDefinedCode;
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