// VARIABLES

var x = 1;
/* Variable x declared in a global scope
can be used outside and inside of subsuequent functions
as well as subsequent blocks.
If they are declared in a function scope (inside of a funtion), they are only 
usable within this fucntion.
Declaring them in a Block will result in a global scope for var */

let y = 2;
/* using let to declare a variable inside of a block, gives the
variable a block scope so it is only viable inside the block it is written in
Otherwise it operates the same as a var*/

const z = 3;
/* const variables function the same as a let variable but their value can't 
be reasinged later. And their value has to be assigned in the same line as it 
is being declared, it cannot be undefined!*/

console.log(x, y, z);
console.dir(x)
console.dir(y)
console.dir(z)

// DATA-TYPES
// tell the computer what sort of data is presented, so the computer knows how to solve it.

/* Numbers: no quotes, with or without decimals,
 sientific notation is allowed (ex. 123e5)*/
let a = 1;
let b = 1.4;

// Strings: with quotes "" or '', is a series of characters
let c = "Jhon Doe";
/* quotation marks within a string are possible, but should differ from the 
 surrounding qoutation marks*/
let d = "his name's ";

// Strings are used for storing and manipulating text.

// Boolean: can only have two values, "true" or "false"
let e = 5, f = 5, g = 6;
console.log(e == f); // true
console.log(f == g); // false

// Arrays: written with square brackets [], items are separated by commas.
let h = [10 , 11 , 12];
console.log(h);
console.dir(h);

/* Arrays are used to store multiple values in a single variable and you 
can access the values by referring to an index number. */


// OPERATORS

// Arithmetic Operators:
// used to perform arithmetic on numbers

/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (power)
/	Division
%	Modulus
++	Increment
--	Decrement
*/

// Assignment Operators:
// used to assign values to JavaScript variables.

/*
=	x = 5
+=	x += 5 is the same as x = x + 5
-=	x -= 5 is the same as x = x - 5
*=	x *= 5 is the same as x = x * 5
/=	x /= 5 is the same as x = x / 5
%=	x %= 5 is the same as x = x % 5
**=	x **= 5 is the same as x = x ** 5
*/

let content = document.querySelectorAll("td");

document.getElementById("col1").innerHTML = "3 + 2";
document.getElementById("col2").innerHTML = z + 2;
document.getElementById("col3").innerHTML = "3 - 2";
document.getElementById("col4").innerHTML = z - 2;
document.getElementById("col5").innerHTML = "3 * 2";
document.getElementById("col6").innerHTML = z * 2;
document.getElementById("col7").innerHTML = "3 ** 2";
document.getElementById("col8").innerHTML = z ** 2;
document.getElementById("col9").innerHTML = "3 / 2";
document.getElementById("col10").innerHTML = z / 2;
document.getElementById("col11").innerHTML = "3 % 2";
document.getElementById("col12").innerHTML = z % 2;
document.getElementById("col13").innerHTML = "++3";
let j = 3;
document.getElementById("col14").innerHTML = ++j;
document.getElementById("col15").innerHTML = "--3";
let k = 3;
document.getElementById("col16").innerHTML = --k;


let l = "string";
document.getElementById("col17").innerHTML = "3 + string";
document.getElementById("col18").innerHTML = z + l;
document.getElementById("col19").innerHTML = "3 - string";
document.getElementById("col20").innerHTML = z - l;
document.getElementById("col21").innerHTML = "3 * string";
document.getElementById("col22").innerHTML = z * l;
document.getElementById("col23").innerHTML = "3 ** string";
document.getElementById("col24").innerHTML = z ** l;
document.getElementById("col25").innerHTML = "3 / string";
document.getElementById("col26").innerHTML = z / l;
document.getElementById("col27").innerHTML = "3 % string";
document.getElementById("col28").innerHTML = z % l;
document.getElementById("col29").innerHTML = "++string";
document.getElementById("col30").innerHTML = ++l;
l = "string";
document.getElementById("col31").innerHTML = "--string";
document.getElementById("col32").innerHTML = --l;
l = "string";

let bool = true;
let lean = false;

document.getElementById("col33").innerHTML = "3 + true";
document.getElementById("col34").innerHTML = z + bool;
document.getElementById("col35").innerHTML = "3 - true";
document.getElementById("col36").innerHTML = z - bool;
document.getElementById("col37").innerHTML = "3 * false";
document.getElementById("col38").innerHTML = z * lean;
document.getElementById("col39").innerHTML = "3 ** true";
document.getElementById("col40").innerHTML = z ** bool;
document.getElementById("col41").innerHTML = "3 / true";
document.getElementById("col42").innerHTML = z / bool;
document.getElementById("col43").innerHTML = "3 % true";
document.getElementById("col44").innerHTML = z % bool;
document.getElementById("col45").innerHTML = "++true";
document.getElementById("col46").innerHTML = ++bool;
bool = true;
document.getElementById("col47").innerHTML = "--true";
document.getElementById("col48").innerHTML = --bool;
bool = true;    

document.getElementById("col49").innerHTML = "3 + array";
document.getElementById("col50").innerHTML = z + h;
document.getElementById("col51").innerHTML = "3 - array";
document.getElementById("col52").innerHTML = z - h;
document.getElementById("col53").innerHTML = "3 * array";
document.getElementById("col54").innerHTML = z * h;
document.getElementById("col55").innerHTML = "3 ** array";
document.getElementById("col56").innerHTML = z ** h;
document.getElementById("col57").innerHTML = "3 / array";
document.getElementById("col58").innerHTML = z / h;
document.getElementById("col59").innerHTML = "3 % array";
document.getElementById("col60").innerHTML = z % h;
document.getElementById("col61").innerHTML = "++array";
document.getElementById("col62").innerHTML = ++h;
h = [10 , 11 , 12];
document.getElementById("col63").innerHTML = "--array";
document.getElementById("col64").innerHTML = --h;
h = [10 , 11 , 12];

document.getElementById("col65").innerHTML = "string + string";
document.getElementById("col66").innerHTML = l + l;
document.getElementById("col67").innerHTML = "string - string";
document.getElementById("col68").innerHTML = l - l;
document.getElementById("col69").innerHTML = "string * string";
document.getElementById("col70").innerHTML = l * l;
document.getElementById("col71").innerHTML = "string ** string";
document.getElementById("col72").innerHTML = l ** l;
document.getElementById("col73").innerHTML = "string / string";
document.getElementById("col74").innerHTML = l / l;
document.getElementById("col75").innerHTML = "string % string";
document.getElementById("col76").innerHTML = l % l;
document.getElementById("col77").innerHTML = "++string";
document.getElementById("col78").innerHTML = ++l;
l = "string";
document.getElementById("col79").innerHTML = "--string";
document.getElementById("col80").innerHTML = --l;
l = "string";

document.getElementById("col81").innerHTML = "string + true";
document.getElementById("col82").innerHTML = l + bool;
document.getElementById("col83").innerHTML = "string - true";
document.getElementById("col84").innerHTML = l - bool;
document.getElementById("col85").innerHTML = "string * false";
document.getElementById("col86").innerHTML = l * lean;
document.getElementById("col87").innerHTML = "string ** true";
document.getElementById("col88").innerHTML = l ** bool;
document.getElementById("col89").innerHTML = "string / true";
document.getElementById("col90").innerHTML = l / bool;
document.getElementById("col91").innerHTML = "string % true";
document.getElementById("col92").innerHTML = l % bool;
document.getElementById("col93").innerHTML = "++true";
document.getElementById("col94").innerHTML = ++bool;
bool = true;
document.getElementById("col95").innerHTML = "--true";
document.getElementById("col96").innerHTML = --bool;
bool = true;    

document.getElementById("col97").innerHTML = "string + array";
document.getElementById("col98").innerHTML = l + h;
document.getElementById("col99").innerHTML = "string - array";
document.getElementById("col100").innerHTML = l - h;
document.getElementById("col101").innerHTML = "string * array";
document.getElementById("col102").innerHTML = l * h;
document.getElementById("col103").innerHTML = "string ** array";
document.getElementById("col104").innerHTML = l ** h;
document.getElementById("col105").innerHTML = "string / array";
document.getElementById("col106").innerHTML = l / h;
document.getElementById("col107").innerHTML = "string % array";
document.getElementById("col108").innerHTML = l % h;
document.getElementById("col109").innerHTML = "++array";
document.getElementById("col110").innerHTML = ++h;
h = [10 , 11 , 12];
document.getElementById("col111").innerHTML = "--array";
document.getElementById("col112").innerHTML = --h;
h = [10 , 11 , 12];

document.getElementById("col113").innerHTML = "true + true";
document.getElementById("col114").innerHTML = bool + bool;
document.getElementById("col115").innerHTML = "true - true";
document.getElementById("col116").innerHTML = bool - bool;
document.getElementById("col117").innerHTML = "true * false";
document.getElementById("col118").innerHTML = bool * lean;
document.getElementById("col119").innerHTML = "true ** true";
document.getElementById("col120").innerHTML = bool ** bool;
document.getElementById("col121").innerHTML = "true / true";
document.getElementById("col122").innerHTML = bool / bool;
document.getElementById("col123").innerHTML = "true % true";
document.getElementById("col124").innerHTML = bool % bool;
document.getElementById("col125").innerHTML = "++true";
document.getElementById("col126").innerHTML = ++bool;
bool = true;
document.getElementById("col127").innerHTML = "--true";
document.getElementById("col128").innerHTML = --bool;
bool = true;    

document.getElementById("col129").innerHTML = "true + array";
document.getElementById("col130").innerHTML = bool + h;
document.getElementById("col131").innerHTML = "true - array";
document.getElementById("col132").innerHTML = bool - h;
document.getElementById("col133").innerHTML = "true * array";
document.getElementById("col134").innerHTML = bool * h;
document.getElementById("col135").innerHTML = "true ** array";
document.getElementById("col136").innerHTML = bool ** h;
document.getElementById("col137").innerHTML = "true / array";
document.getElementById("col138").innerHTML = bool / h;
document.getElementById("col139").innerHTML = "true % array";
document.getElementById("col140").innerHTML = bool % h;
document.getElementById("col141").innerHTML = "++array";
document.getElementById("col142").innerHTML = ++h;
h = [10 , 11 , 12];
document.getElementById("col143").innerHTML = "--array";
document.getElementById("col144").innerHTML = --h;
h = [10 , 11 , 12];    

document.getElementById("col145").innerHTML = "array + array";
document.getElementById("col146").innerHTML = h + h;
document.getElementById("col147").innerHTML = "array - array";
document.getElementById("col148").innerHTML = h - h;
document.getElementById("col149").innerHTML = "array * array";
document.getElementById("col150").innerHTML = h * h;
document.getElementById("col151").innerHTML = "array ** array";
document.getElementById("col152").innerHTML = h ** h;
document.getElementById("col153").innerHTML = "array / array";
document.getElementById("col154").innerHTML = h / h;
document.getElementById("col155").innerHTML = "array % array";
document.getElementById("col156").innerHTML = h % h;
document.getElementById("col157").innerHTML = "++array";
document.getElementById("col158").innerHTML = ++h;
h = [10 , 11 , 12];
document.getElementById("col159").innerHTML = "--array";
document.getElementById("col160").innerHTML = --h;
h = [10 , 11 , 12];    
