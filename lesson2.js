//adding
var x = 5;
var y = 2;
var z = x + y;
//subtracting
var x = 5;
var y = 2;
var z = x - y;
//multiplying
var x = 5;
var y = 2;
var z = x * y;
//dividing
var x = 5;
var y = 2;
var z = x / y;
//Modulus
var x = 5;
var y = 2;
var z = x % y;
//---------------------------------------increment----


var x = 5;
x++;
var z = x;
//decrementing
var x = 5;
x--;
var z = x;

//Pre and post-increment operators
/*Increment operators may be applied before or after a variable.
 When they are applied before or after a variable, they are pre-increment 
or post-increment operators, respectively. The choice of 
which to use changes how they affect operations.*/

// increment occurs before a is assigned to b
var a = 1;
var b = ++a; // a = 2, b = 2;

// increment occurs to c after c is assigned to d
var c = 1;
var d = c++; // c = 2, d = 1;

// increment occurs before a is assigned to b
var a = 1;
a += 1;
var b = a; // a = 2, b = 2;

// increment occurs to c after c is assigned to d
var c = 1;
var d = c;
c += 1; // c = 2, d = 1;


//----------------------------------------------------------------------------------
//Operator Precedence
var x = 100 + 50 * 3;

/*As in traditional school mathematics, the multiplication is done first.

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

And (as in school mathematics) the precedence can be changed by using parentheses:*/


var x = (100 + 50) * 3;

/*When using parentheses, the operations inside the parentheses are computed first.

When many operations have the same precedence (like addition and subtraction),
 they are computed from left to right:*/
var x = 100 + 50 - 3;


//ASSIGNMENT Simple assignment operator which assigns a value to a variable.

//Syntax Operator: x = y
// Assuming the following variables
x = 5
y = 10
z = 25

x = y     // x is 10
x = y = z // try x, y and z they are all 25 

//Addition assignment

//syntax Operator: x += y 
//syntax Meaning:  x  = x + y

var x = 5;
x += 4; // x now equals 9, same as writing x = x + 4;
x -= 3; // x now equals 6, same as writing x = x - 3;
x *= 2; // x now equals 12, same as writing x = x * 2;
x /= 3; // x now equals 4, same as writing x = x / 3;
console.log(x);
//---------------------------------------------------------

// Assuming the following variables
foo = 'whatever'; //string
bar = 5;     //number
baz = true;  //boolean


// Number + Number -> addition
bar += 2 // 7

// Boolean + Number -> addition
baz += 1 // 2

// Boolean + Boolean -> addition
baz += false // 1

// Number + String -> concatenation
bar += 'whatever' // "5whatever"

// String + Boolean -> concatenation
foo += false // "whateverfalse"

// String + String -> concatenation
foo += 'bar' // "whateverbar"

