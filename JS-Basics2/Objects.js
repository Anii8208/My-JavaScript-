//Object Can Be Declare in Tow wayes By constructor and object literals 

//Using constructor
//Singleton Object = When we are create object using constructor then singleton object is created...

//const TinderUser = new Object() //Singleton Object //using constructor

//const TinderUser = {} //Non-Singleton Object

//console.log(TinderUser);



//******************************************************************** */

//Object literals 
//when we use object literals then Non-Singleton object is created

//Q = Define Symbol Treat as Key And print

const MySymbol = Symbol("Key1") //imp

//Object Creation
let JSUser = {
    [MySymbol]: "Key1", //imp 
    name: "Anii",
    "Full Name": "Aniruddha Belkhede", //imp
    Ege: 18,
    Email: 'Anii@Gmail.Com',
    height: 5.7,
    IsLoggedIn: false,
    LastLoggedInDays: ["Saturday", "Sunday"]

}


//Accessing Object Elements

//By using "." Operatore

//JSUser.name
//console.log(JSUser.name);
//console.log(JSUser.LastLoggedInDays);


//*********************************************** */

//By using "[]" Square Brackets

//console.log(JSUser["name"]);
//console.log(JSUser["Email"]);
//console.log(JSUser["IsLoggedIn"]);
//console.log(JSUser["Full Name"]); //imp


//Symbol Call

//console.log(JSUser[MySymbol]);

//***************************************************************** */

//Changes in object

JSUser.Email = "Anni@ChatGpt.com"

//Object.freeze(JSUser) //This Keyword Freeze the obj so changes is not applied output remain same

JSUser.Email = "Anni@Browser.com"

//console.log(JSUser);



//******************************************************* */

//Function in object

JSUser.Greetings = function() {
    //console.log("Hello JSUser");
}

console.log(JSUser.Greetings());

JSUser.Greetings2 = function() {
    //console.log(`Hello JSUser ${this.name}`); //When you refference Same obj Use "this" keyword
}
//console.log(JSUser.Greetings2());


//*************************************************************** */

const SnapUser = {}

SnapUser.Id = 1
SnapUser.Name = "Anni"
SnapUser.Email = "Some@gmail.com"
//assigning the value outside of objects
//console.log(SnapUser);

//******************************************* */

//Nesting Of objects
const RegularUser = {
    Email: "Some@gmail.com",
    
    FullName: {
        
        UserFullName: {
            
            FirstName: "Aniruddha",
            LastName: "Belkhede"
        }
    }
}

//Accessing the nested objects

//console.log(RegularUser.FullName);
//console.log(RegularUser.FullName.UserFullName);
//console.log(RegularUser.FullName.UserFullName.LastName);

//******************************************************************************** */

//Merging of objects or Combine and Concantinate 


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//By using assign Method
obj3 = Object.assign(obj1, obj2) //assign the obj2 to obj1 and returns new modified object
//console.log(obj3);

//When merging 3 or more objects use empty object {}

const obj5 = Object.assign({}, obj1, obj2, obj3)
//console.log(obj5);


//By using Spread Operator (...) always use this Syntax

Obj6 = {...obj1, ...obj2, ...obj4}
//console.log(Obj6);

//************************************************************** */

//When Data is come from Database it comes in form of Array[]

const Users = [
    {
        Id: 101,
        email: "some@gmail.com"
    },
    {
        Id: 102,
        email: "asome@gmail.com"
    },
    {
        Id: 103,
        email: "hsome@gmail.com"
    }
]

//console.log(Users[0].Id);


//************************************************************* */

//Properties of object

//Object.keys
//console.log(Object.keys(SnapUser)); //returns the output in arrays[] type

//Object.values
//console.log(Object.values(SnapUser)); //returns the output in arrays[] type

//Object.entries
//console.log(Object.entries(SnapUser));//[['Id',1],['Name','Anni'],['Email','Some@gmail.com']]


//*********************** */

//hasOwnProperty = returns 'true' if value is exists in obj otherwise returns false

//console.log(SnapUser.hasOwnProperty('Id')); //true

//console.log(SnapUser.hasOwnProperty('PrentName')); //false

//*********************************************************************** */

//Object Distructring : To release the headack of '.' operator

const course = {
    courseName: "Chai aur codee",
    courseInstructor: "Hitesh",
    courseFee: 999
}

//const {} = course

const {courseName} = course

//console.log(courseName);

const {courseInstructor: Instructor} = course
//console.log(Instructor);

//********************************************************************************* */
 
//API = Application Programming Interface
//Its Nothing but the Witing the value Properly who come from Backend
//In history Backend Value come in from XML Structure but Now the value come in "JSON"

//JSON(JAVASCRIPT Object Notation) = nothing But the like Object

/*{
    "Name": "Anii",
    "course": "chai or code"
}*/

/*[
    {},
    {},
    {}
]*/