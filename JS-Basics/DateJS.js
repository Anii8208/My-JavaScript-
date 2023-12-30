//Date in JavaScript

let MyDate = new Date()

//console.log(MyDate);

//console.log(MyDate.toDateString());

//console.log(MyDate.toLocaleDateString());

//console.log(MyDate.toLocaleString());

//console.log(MyDate.toLocaleTimeString());

//console.log(MyDate.toString());

//console.log(MyDate.toUTCString());

//console.log(MyDate.valueOf());



//User Genrated Date

let MyGenDate = new Date(2024, 0, 15) //=> 1/15/2024 //In JS Month always start from 0

//let MyGenDate = new Date(2024, 0, 15, 5, 20) => 1/15/2024, 5:20:00 AM
//console.log(MyGenDate.toLocaleString());

//let MyGenDate = new Date("2024-01-15")  //YYMMDD

//let MyGenDate = new Date("01-15-2024") //MMDDYY
//console.log(MyGenDate.toLocaleString());


//Tme Stamps => use in polls, Quizs

let MyTStamp = Date.now()

//console.log(MyTStamp); // 1703958432201 = MiliSec From 1 Janury 1970

//console.log(MyGenDate.getTime());

//console.log(Date.now()/1000);  //to Convert milisec to sec

//console.log(Math.floor(Date.now()/1000)); //To dont show decimal values


let newDate = new Date()

//console.log(newDate);
//console.log(newDate.getMonth()+1);
//console.log(newDate.getHours());

//console.log(`The Month is ${newDate.getMonth()+1} and The Hour is ${newDate.getHours()}`);

//Most Using Method to organize date  and also Customize the format of output

console.log(newDate.toLocaleString('default',{
     weekday: "short"

}));