//Every code in JS is need to be conditional based ex. user loggedin Run this code, user not loggedin run that code...

//Conditional Operator - <,>,<=,>=,==,!=,===,!==

//(If keyword) = if the condition is true then always if statement executed...

if (true){
    //console.log("hello");
}

//let userloggedin = true

/*if(userloggedin){
    //console.log("Welcome to website");
}*/

if(2==2){
    //console.log("true");
}

if(2<4){
    //console.log("2<4");
}

if(5!=="ad"){
   // console.log("5 is not equal to 4");
}

//********************************************************************************* */

//(if else) = if the condition is true iF() execute, if it is false else block execute

if (0>5) {
 
    //console.log("if() block executed");
}
else{
    //console.log("else block executed");
}

//********************************************************************************* */

//Short Hand Notation or Single line IF Statement

let score = 3000
//if(score>2000) //console.log("Winner");

//********************************************************************************** */

//Nested IF Else = when we  need to check multiple Conditions

let balance = 1000


if(balance > 500){
    //console.log("greater than 500");
}
else if(balance < 750){
    //console.log("Less than 750");
}
else if(balance > 800){
    //console.log("greater than 800");
}
else{
    //console.log("Balance is 0");
}

//************************************************************************************ */

//Logical operator

//"&& operator" = Used to check multiple Conditions in one IF statement, if every conditon is true the IF() block executed..

//"|| Operator" = if condtion is ture or second condtion false then also IF() block executed...

let userloggedin = true
let debitCard = true

if(userloggedin && debitCard){
    //console.log("User loggedin successful");

}

let loggedinfromEmail = true
let loggedinfromGoogle = false

if (loggedinfromEmail || loggedinfromGoogle) {
    //console.log("User loggedin Successful");
}