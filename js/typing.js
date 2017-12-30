
        function one (callback) {
            $(".write").typed({
                strings: [ "Hey there!", "I'm currently revamping my website"],
                typeSpeed : 10,
                smartBackspace: true,
                backSpeed : 10,
                backDelay : 2000,
                showCursor : false,
                callback: function(){
                    $("#btn-dwnload").css({display:'unset'});

                }
            });

            callback();
        }

        function two () {
        }
        one(two);