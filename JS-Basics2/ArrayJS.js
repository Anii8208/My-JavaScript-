 //[]  = Square Bracket,  () = Parenthises, {} = qurly Brackess

 //Array in JAVA Script

 let MyArr = [0, 1, 2, 3, 4, 5]  //Array in JS
 
 //console.log(MyArr);     //Print All Array

 //console.log(MyArr[4]);  //Accessing Array ele using Index

 
 //In JS Array can Contain Diff Elements

 let MyArr2 = [0, 1, 2, "Anii", 3, "Devil", 4]
 
 //console.log(MyArr2 [3]);


 //In JS Array element Can be change it is not Fix we can insert and delete ele


 //Methods OF Array

 MyArr2.push(9)   //This Method Can PUSH Ele At the End of the Array

 //console.log(MyArr2);

 MyArr2.pop()   //This Method Can POP Ele From The End Of the Array

 //console.log(MyArr2);

//*************************************************************************** */

MyArr.unshift(9) //Insert The new Ele At the Start of the Array

//console.log(MyArr);

MyArr.shift(); //Remove The Ele From The Start OF the Array

//console.log(MyArr); 

//**************************************************************************** */

//Que Type Method

//console.log(MyArr.includes(8)) //includes Method Check the Ele Present in Array or Not And Returns "Boolean" Type Output

//console.log(MyArr.indexOf(4)); //Returns the Index of Passed Ele

//************************************************************************** */

let MyNewAr = MyArr.join() //Join the Array Ele And return The in "String"

//console.log(MyArr); //[ 0, 1, 2, 3, 4, 5 ]

//console.log(MyNewAr); //0,1,2,3,4,5

MyArr = MyArr2.join()

 //console.log(MyArr); //0,1,2,3,4,5 
                     //0,1,2,Anii,3,Devil,

//**************************************************************************** */

//Slice = 1)this Method Doesn't Manuplate the Array 2) Also the last range is not included.


let Ar1 = [0, 1, 2, 3, 4, 5]

console.log(Ar1); //[ 0, 1, 2, 3, 4, 5 ]

let NewAr1 = Ar1.slice(1, 3) 

console.log("A", Ar1); //A [ 0, 1, 2, 3, 4, 5 ]

console.log(NewAr1);  //[ 1, 2 ]

//************************************************************************ */

//Splice = 1)This Method Manuplate's The Array 2)Returns The Output including Last Range

let NewAr2 = Ar1.splice(1, 3)

console.log("B", Ar1); //B [ 0, 4, 5 ]

console.log(NewAr2);//[ 1, 2, 3 ]


