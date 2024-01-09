//IIFE = Immediately Invoked Function Expressions (IIFE)

//it is used to execute fun immediately
//It prevent Function from pollution of Global scope variables

/*function chai (){
    console.log("DB Connected");
}
chai()*/
//Simple Function


//Named IIFE Fun
(function chai(){
    console.log("DB connected");
})();

//IFFE Function

//Unnamed IIFE Function
(()=>{
    console.log("DB Function");
})();
//IIFE Arrow  Function

//******************************************************************* */


//IIFE Function With Parameter
(function chai(name){
    console.log(`Welcome ${name}`);
})("aniruddha");//Semicolon Req to end IIFE Fun


//IIFE (arrow) Function with parameter
((name)=>{
    console.log(`Hello Welcome ${name}`);
})("Sam");
