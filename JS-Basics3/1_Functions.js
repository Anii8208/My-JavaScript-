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

//console.log(UserLoggedIn()); //Anii just logged In

//************************************************************************** */

//When N number of Arguments are Come Function parameter At that time we use "REST" Operator ""..."" Same as the Spread Operator Depends on use 

//REST "..." Operator Take individual value from Argu And make the Array of all Argu

function calculateCartPrice(...price)
{
    return price 
}

//console.log(calculateCartPrice(100,455,5656,465456,565))

//*********************************************************************************** */

//Passing Objects as a arguments
const user = {
    name: "anii",
    ege: 18
}

function handlingObject(anyobject) //in this method TypeSafety must be check val of obj pre
{
    console.log(`Name of User is ${anyobject.name} and Ege of user is ${anyobject.ege}`);
}

//handlingObject(user)

//another Type to pass object
 
  /*handlingObject({
    name: "Aniruddha",
    ege: 22
  })*/

//********************************************************************************** */

//PAssing Array as Argument in Fun Parameter

const MyArray = [10, 20, 30, 40, 50]

function returnSecEle(getArray)
{
        return `Second Ele is ${getArray[1]}`
}

console.log(returnSecEle(MyArray))