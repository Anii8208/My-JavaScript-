//************************Arithmatic Operations*************************************\


//Basic Math Operations
let Value = 3

let NegValue = -Value
//console.log(NegValue);

//console.log("Addition",(2+2));
//console.log("Subtraction",(2-2));
//console.log("Mul",(2*2));
//console.log("Power",(2**2));
//console.log("Div",(2/2));
//console.log("Mod",(2%2));

//*****************************String Concantination*************************************
let str1 = "hello "
let str2 = "Akola"
let str3 = str1 + str2
//console.log(str3);

//***************************Conversion Guidelines for Objects****************************

//console.log("1"+2); => 12
//console.log(1+"2"); => 12
//console.log("1"+2+2); => 122
//console.log(1+2+"2"); => 32

//console.log((3 + 2) * 4 /5); //Use Parenthises to seprate operations


//********************************Tricky Special Conversions**********************/

//console.log(true); => true
//console.log(+true);  => 1
//console.log(true+);  => error
//console.log(+""); => 0
//console.log(""+);  => error


 let num1, num2, num3
 num1 = num2 = num3 = 2+2
 //console.log((num1),(num2),(num3)); => 4 4 4

//Avoid Confeusing Code Write simple readable code

//**************************increment and Decrement Operations**********************/

let GameCounter = 100
GameCounter++;
//console.log(GameCounter); => 101

++GameCounter;
//console.log(GameCounter); => 101

GameCounter--;
//console.log(GameCounter); => 99

//Postfix
let x = 3
const y = x++
//console.log("x:",(x),"y:",(y));  => x: 4  y: 3

//Prefix
let a = 4
const b = ++a
//console.log("a:",(a),"b:",(b)); => a: 5  b: 5

 