const score = 500 //=> 500


const balance = new Number(100.0000);


//console.log(balance); //=> [Number: 100]

//console.log(balance.toString()); //Con Num to string

//console.log(balance.toFixed(2)); //Fixed decimal Value

const OtherNum = 132.86945

//console.log(OtherNum.toPrecision(3)); // => 133
//Return the precision value in 3 digit add the other value //it return always string


const hundreds = 1000000

//console.log(hundreds.toLocaleString('en-IN')); //to show num in simple form
                                //for indian standard


//**********************************Maths**************************************

//Math is a libarary wich is already present in javascript 
//it is used to use diff types of maths funs()


console.log(Math);

console.log(Math.PI); //=> 3.1415926

console.log(Math.abs(-5));// => 5

console.log(Math.round(4.3)); //=> 4  //RoundOF

console.log(Math.round(4.6)); //=> 5  //RoundOF

//TO Control RoundOF 2 Fun() = Ceil(), Floor()
console.log(Math.ceil(3.4)); //=> 4

console.log(Math.floor(3.4)); //=> 3


//for find lowest value in Array

console.log(Math.min(1,5,6,8)); //=>1
console.log(Math.max(1,5,6,8)); //=>8


//**********************Math.Random */

//it always produce val from 0 to 1

console.log(Math.random());

console.log((Math.random()*10) + 1); //Value not Produce less than 1

console.log(Math.floor(Math.random()*10) + 1); //for ROundof extra value



//When Ypu need Value from certain pair of 2 nums
const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min + 1)) + min ); //Learn this Formula

