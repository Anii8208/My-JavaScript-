

//Object literals 

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


//Changes in object

JSUser.Email = "Anni@ChatGpt.com"

//Object.freeze(JSUser) //This Keyword Freeze the obj so changes is not applied output remain same

JSUser.Email = "Anni@Browser.com"

//console.log(JSUser);

//******************************************************* */

//Function in object

JSUser.Greetings = function() {
    console.log("Hello JSUser");
}

console.log(JSUser.Greetings());

JSUser.Greetings2 = function() {
    console.log(`Hello JSUser ${this.name}`); //When you refference Same obj Use "this" keyword
}
console.log(JSUser.Greetings2());
