//javascript is a Dynamically Typed language

//Primitive Datatypes

// 7 Types = String, Number, Boolean, Null, Undefined, Symbol, BigInt

const MyString = "123abc" //typeof => String

const MyNumber = 12345 //typeof => number

const LoggedIN = false //typeof => Boolean

const OutsideTemp = null //typeof => Object

let UserName; //typeof => Undefined

const Id = Symbol('1234')  //typeof => Symbol
const SecId = Symbol('1234') //typeof => Symbol

const BigInt = 51745184211115484848484844n

//console.log(typeof BigInt); => BigInt


//console.log( Id === SecId ) => false



//Reference (Non-Primitive)

// 3 Types = Array, Object, Function

const MyArray = ["Apple", "Banan", "Mango"];

//console.log(MyArray [0]); => Apple

//console.log(typeof MyArray); => Object

const MyObject = {
    Name : "Anni",
    age  : 21 ,

}
//console.log(MyObject); => {Name: 'Anni', age: 21}

//console.log(typeof MyObject); => object

const Myfun = function(){
 
    console.log("Hello World");
}
//console.log(Myfun()) => Hello World

//console.log(typeof Myfun); => function (object function)  

 

// All Non-Primitive type is Object
