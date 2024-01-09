//  "This" Keyword
// "This" refer currunt context = {} //context means value under scope{}

/*const user = {
    username: "Anii",
    price: 999,

    welcomeMsg: function()
    {
        console.log(`${this.username},Welcome to Website`);
    }
}*/

//user.welcomeMsg()
//user.username = "Sam"
//user.welcomeMsg()
//************************************************************ */
/*const user = {
    username: "Anii",
    price: 999,

    welcomeMsg: function()
    {
        console.log(`${this.username},Welcome to Website`);
        console.log(this);    
    }
}*/

//user.welcomeMsg() //Anii,Welcome to Website {username:'Anii',price: 999,welcomeMsg: [Function: welcomeMsg] }

//user.username = "Sam"
//user.welcomeMsg() //Sam,Welcome to Website {username:'Sam',price: 999,welcomeMsg:[Function:welcomeMsg]}

//************************************************************* */

//console.log(this); //{}

//********************************************************** */

// "this" in function


/*function chai ()
{
    console.log(this);
}*/

//chai() //return many values

//1)
/*function chai ()
{
    const username = "ANii"
    console.log(this.username);
}

chai() //undefined  //"this" not work in fun
*/

//2)

/*const chai = function ()
{
    const username = "ANii"
    console.log(this.username);
}
chai() //undefined  //"this" not work in fun
*/

//************************************************************************* */

//arrow Function =>

//"this" in arrow fun
/*
const chai = () =>
{
    username ="Anni"
    console.log(this.username);

} 
chai() //undefine //"this" not work in fun
*/

//************************************************** */
//"this" in arrow fun

/*const chai = () =>
{
    username ="Anni"
    console.log(this);

} 
chai() //{}
*/

//********************************************************************** */
 
//normal arrow function 

/*const addTowVal = (num1, num2) => 
{
    return num1 + num2
}
console.log(addTowVal(5,6)) //11
*/

//Implicit Return

 

//When write in {} compelsory "return" keyword wrtie
//When write in () no need to write "return" keyword

//const addTowVal = (num1, num2) => num1 + num2

//Most use in React
/*const addTowVal = (num1, num2) => (num1 + num2)
console.log(addTowVal(5,6)); //11
*/


//object return parenthises() Required 

/*const addTowVal = (num1, num2) => {username: "anni"}

console.log(addTowVal()); //undefined
*/

/*const addTowVal = (num1, num2) => ({username: "anni"})
console.log(addTowVal()); //{ username: 'anni' }
*/
//  "This" Keyword
// "This" refer currunt context = {} //context means value under scope{}

/*const user = {
    username: "Anii",
    price: 999,

    welcomeMsg: function()
    {
        console.log(`${this.username},Welcome to Website`);
    }
}*/

//user.welcomeMsg()
//user.username = "Sam"
//user.welcomeMsg()
//************************************************************ */
/*const user = {
    username: "Anii",
    price: 999,

    welcomeMsg: function()
    {
        console.log(`${this.username},Welcome to Website`);
        console.log(this);    
    }
}*/

//user.welcomeMsg() //Anii,Welcome to Website {username:'Anii',price: 999,welcomeMsg: [Function: welcomeMsg] }

//user.username = "Sam"
//user.welcomeMsg() //Sam,Welcome to Website {username:'Sam',price: 999,welcomeMsg:[Function:welcomeMsg]}

//************************************************************* */

//console.log(this); //{}

//********************************************************** */

// "this" in function


/*function chai ()
{
    console.log(this);
}*/

//chai() //return many values

//1)
/*function chai ()
{
    const username = "ANii"
    console.log(this.username);
}

chai() //undefined  //"this" not work in fun
*/

//2)

/*const chai = function ()
{
    const username = "ANii"
    console.log(this.username);
}
chai() //undefined  //"this" not work in fun
*/

//************************************************************************* */

//arrow Function =>

//"this" in arrow fun
/*
const chai = () =>
{
    username ="Anni"
    console.log(this.username);

} 
chai() //undefine //"this" not work in fun
*/

//************************************************** */
//"this" in arrow fun

/*const chai = () =>
{
    username ="Anni"
    console.log(this);

} 
chai() //{}
*/

//********************************************************************** */
 
//normal arrow function 

/*const addTowVal = (num1, num2) => 
{
    return num1 + num2
}
console.log(addTowVal(5,6)) //11
*/

//Implicit Return

 

//When write in {} compelsory "return" keyword wrtie
//When write in () no need to write "return" keyword

//const addTowVal = (num1, num2) => num1 + num2

//Most use in React
/*const addTowVal = (num1, num2) => (num1 + num2)
console.log(addTowVal(5,6)); //11
*/


//object return parenthises() Required 

/*const addTowVal = (num1, num2) => {username: "anni"}

console.log(addTowVal()); //undefined
*/

/*const addTowVal = (num1, num2) => ({username: "anni"})
console.log(addTowVal()); //{ username: 'anni' }
*/
