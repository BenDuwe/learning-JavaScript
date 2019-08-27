        /* 
        Write your script here!

        Note: it is advised to work on this in small steps!
            1. When you click a button, make your code log something to the console.
                This way you can see if your event listener is linked properly!
            2. When you click a button, make the number/operation appear in the calc-preview div.
            3. ......
        */

        function calculus(symbol) {
            if (document.getElementById("calc-preview").innerHTML == "Make a calculation...") {
                // document.getElementById("calc-preview").innerHTML = "";
                document.getElementById("calc-preview").innerHTML = symbol;
            } else if (document.getElementById("calc-preview").innerHTML.includes("=")) {
                // document.getElementById("calc-preview").innerHTML = "";
                document.getElementById("calc-preview").innerHTML = symbol;
            } else {
                document.getElementById("calc-preview").innerHTML += symbol;
            }
        };

        function dispEval (){
            let orig = document.getElementById("calc-preview").innerHTML;
            let edit = orig.replace("%", "/100")
            document.getElementById("calc-preview").innerHTML += "<br/>" + "= " + eval(edit);
            window.setInterval(function() {
                var elem = document.getElementById('calc-preview');
                elem.scrollTop = elem.scrollHeight;
              }, 50);              
        }

        // buttons fill in the requested number in the calc-preview.

        document.getElementById("nr_0").addEventListener("click", function () {
            calculus(0);
        });

        document.getElementById("nr_1").addEventListener("click", function () {
            calculus(1);
        });

        document.getElementById("nr_2").addEventListener("click", function () {
            calculus(2);
        });

        document.getElementById("nr_3").addEventListener("click", function () {
            calculus(3);
        });

        document.getElementById("nr_4").addEventListener("click", function () {
            calculus(4);
        });

        document.getElementById("nr_5").addEventListener("click", function () {
            calculus(5);
        });

        document.getElementById("nr_6").addEventListener("click", function () {
            calculus(6);
        });

        document.getElementById("nr_7").addEventListener("click", function () {
            calculus(7);
        });

        document.getElementById("nr_8").addEventListener("click", function () {
            calculus(8);
        });

        document.getElementById("nr_9").addEventListener("click", function () {
            calculus(9);
        });


        // Operation buttons add the requested operations to the equation.


        document.getElementById("add").addEventListener("click", function () {
            calculus("+");
        });

        document.getElementById("subtract").addEventListener("click", function () {
            calculus("-");
        });

        document.getElementById("multiply").addEventListener("click", function () {
            calculus("*");
        });

        document.getElementById("divide").addEventListener("click", function () {
            calculus("/");
        });

        document.getElementById("percentage").addEventListener("click", function () {
            calculus("%");
        });

        document.getElementById("calc").addEventListener("click", dispEval);

        document.getElementById("reset").addEventListener("click", function () {
            document.getElementById("calc-preview").innerHTML = "Make a calculation...";
        });


        let btns = document.getElementsByTagName("button");
        // let i = 0;

        for (i = 0; i < btns.length; i++) {
            btns[i].addEventListener("mouseover", function () {
                this.classList.add("hovering")
            });
            btns[i].addEventListener("mouseout", function () {
                this.classList.remove("hovering")
            });
        };

        // keypresses, making the numbers and operators appear when their key is pressed on the keyboard.

        document.addEventListener("keyup", function (e) {
            if (e.key == "0") {
                calculus(0);
            } else if (e.key == "1") {
                calculus(1);
            } else if (e.key == "2") {
                calculus(2);
            } else if (e.key == "3") {
                calculus(3);
            } else if (e.key == "4") {
                calculus(4);
            } else if (e.key == "5") {
                calculus(5);
            } else if (e.key == "6") {
                calculus(6);
            } else if (e.key == "7") {
                calculus(7);
            } else if (e.key == "8") {
                calculus(8);
            } else if (e.key == "9") {
                calculus(9);
            } else if (e.key == "+") {
                calculus("+");
            } else if (e.key == "-") {
                calculus("-");
            } else if (e.key == "*") {
                calculus("*");
            } else if (e.key == "/") {
                calculus("/");
            } else if (e.key == "%") {
                calculus("%");
            } else if (e.key == "Enter" || e.key == "=") {
                dispEval();
            } else if (e.key == "c") {
                document.getElementById("calc-preview").innerHTML = "Make a calculation...";
            }
        });

        // function press() {
        //     console.log("key was pressed")
        // };
        document.addEventListener("keydown", function (e) {
        if (e.key == "Backspace") {
            if (document.getElementById("calc-preview").innerHTML !== "Make a calculation...") {
            let backsp = document.getElementById("calc-preview").innerHTML;
            document.getElementById("calc-preview").innerHTML = backsp.substring(0, backsp.length - 1);
                if (document.getElementById("calc-preview").innerHTML == "") {
                    document.getElementById("calc-preview").innerHTML = "Make a calculation..."
                }
        }}});