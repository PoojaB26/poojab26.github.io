
        function hiType () {
            $("#hi").typed({
                strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
                typeSpeed: 40,
                backSpeed: 0,
                loop: true,
                smartBackspace:false,

                //onComplete : nameType(),

            });

            //callback();

        }
      /*  function nameType () {
            $("#name").typed({
                strings: [ "I'm  ooja    haumik!"],
                typeSpeed : 50,
                showCursor : false,

            });

        }*/

        hiType();
       // setTimeout(nameType(), 2);

//nameType();