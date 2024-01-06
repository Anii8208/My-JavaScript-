//Function in JS

//Write a code once in a block and use repetedly in program

function Myfun()
{
    console.log("A");
    console.log("n");
    console.log("i");
    console.log("r");
    console.log("u");
    console.log("d");
    console.log("d");
    console.log("h");
    console.log("a");
}


//Calling the function
    
    //Myfun //Reference of fun
    
    //Myfun() //Calling fun

//******************************************************** */

//write fun to ADD toe nums

//fun without Returntype with Parameter
/*function AddTowNums(number1, number2) //Parameters
{
        console.log(number1+number2);
}

 AddTowNums(8,2) //Arguments
*/


//Fun With Returntype with Parameter
function AddTowNums(number1, number2) //no need to declare Datatype JS automatically get
{
    
    //let result = number1 + number2
    //return result

    return number1 + number2 //Save the memory space for extra variable


    console.log("ANii"); //After return fun not work, not execute after return code
}

const result = AddTowNums(1,4)
//console.log(`Result is ${result}`);

//*********************************************************** */


/*function UserLoggedIn(username)
{
        return `${username} just logged In`
}
*/

 //console.log(UserLoggedIn("Aniruddha")); //Aniruddha just logged In

 //console.log(UserLoggedIn()); //undefined just logged In

 //console.log(UserLoggedIn("")); //just logged In

 //console.log(UserLoggedIn(null)); //null just logged In

 //console.log(UserLoggedIn(25)); //25 just logged In

 //***************************************** */

 ///Checking With If()

 /*function UserLoggedIn(username)
{
        if(username === undefined)
        {
            console.log("Enter the User Name");
            return 
        }

        return `${username} just logged In`
}
*/
//console.log(UserLoggedIn()); 


/*function UserLoggedIn(username)
{
        if(!username)
        {
            console.log("Enter the User Name");
            return 
        }

        return `${username} just logged In`
}
*/
 //console.log(UserLoggedIn());

 //***************************************************************** */

 //Default Value in Parameter

 function UserLoggedIn(username = "Anii")
{
        if(!username)
        {
            console.log("Enter the User Name");
            return 
        }

        return `${username} just logged In`
}

console.log(UserLoggedIn()); //Anii just logged In