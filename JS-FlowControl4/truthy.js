//{truthy value} = Assuming the value is true no comapre in IF() statement...

        // ("0"), ('false'), (" "), ([]), ({}), (function(){})


//*************************************************************************** */

//{falsey value} = Assuming the value is false no comapre in IF() statement
 
        // (false), (0), (-0), (BigInt 0n), (""), (null), (undefined), (NaN)




/*const userEmail = "@Anni.ai"

if (userEmail) //Assuming value is true 
{
    console.log("got user Email");
}
else{
    console.log('dont have user Email');
}
*/


/*const userEmail = ""

if (userEmail) //Assuming value is false 
{
    console.log("got user Email");
}
else{
    console.log('dont have user Email');
}
*/


//********************************************************************* */

//Array Check

/*const userEmail = []

if (userEmail.length===0) {
    console.log("Array is empty");
}
*/

//************************************************************************ */

//Object Check

const emptyobject = {}

if (Object.keys(emptyobject).length==0) {
    console.log("Object is empty");
}

//******************************************************************************** */

//Nullish Coalescing Operator (??) use with: Null, undefined

//when value is come from database assign that if not assign null or undefined


let val1;
//val1 = 5 ?? 10
//console.log(val1); //5

//val1 = null ?? 10
//console.log(val1); //12

//val1 = undefined ?? 10
//console.log(val1); //10

//val1 = null ?? 10 ?? 5  
//console.log(val1); //10


//******************************************************************************* */

//ternary operator

//condition ? true : false


const teaPrice = 100

//teaPrice >= 80 ? console.log("more than 80") : console.log("less than 80"); 