let field = document.getElementById("field");

let standard = document.getElementById("generate");
standard.addEventListener("click", generateField);

let random = document.getElementById("random");
random.addEventListener("click", makeRandom)

let size = 7
// let arr = [];
// while (x < 101){
//     arr.push(x++);
// }
// console.dir(arr)
// could be used to create 100 div elements, but diffucult to give chessboard pattern


function generateField() {
    /*
    Write your code here to generate a field as indicated in the image.
    For now you don't need to write any CSS. Any necessary classes are already provided!
    */
    reset();
    // field.removeAttribute("style")
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10 ; j++) {

            let square = document.createElement("div");
            square.classList = "cell";
            if ((i + j)%2 === 1) {
                square.innerHTML = 10 * i + j + 1;
            }
            else {
                square.classList.add("bgblack");
                square.innerHTML = 10 * i + j + 1;
            }
            
            field.append(square);
        }                
    }
}

function makeRandom() {
    /* 
    Write your code here to randomize the colors.
    You could do this for example by making some classes in CSS with different color schemes,
    and then asigning a random one to each cell.
    */
    reset();
    for (i = 0; i < size; i++) {
        for (j = 0; j < size ; j++) {
            let square = document.createElement("div");

            square.classList = "cell";
            if ((i + j)%2 === 1) {
                square.innerHTML = 10 * i + j + 1;
            }
            else {
            let red = randomRed(256);
            let green = randomGreen(256);
            let blue = randomBlue(256);
            // let alpha =  ;
            let rndbg = `rgb(${red}, ${green}, ${blue})`;

            function randomRed(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            function randomGreen(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            function randomBlue(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
                square.style.backgroundColor = rndbg;
                // field.style.textShadow = "1px 1px white"
                square.innerHTML = 10 * i + j + 1;
                if (tinycolor(rndbg).isDark() == true){
                    square.style.color = "#fff";
                } else {
                    square.style.color = "#000";
                }
            }
            
            field.append(square);
        }                
    }
}

function reset() {
    field.innerHTML = "";
}