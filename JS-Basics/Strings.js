const Name = "Aniruddh";
//String Declartion
const RepoId = 50;

//console.log(Name + RepoId + "HEllo"); ---- Not Use This Syntax Outdated

console.log(`Hello My Name is ${Name} And My RepoID is ${RepoId}`);
//Use This Syntax to Print str, Its also called String Interpolation


//Other type to declare String
const Mystring = new String('Aniruddha-Ab-AE-CN-DC');

//console.log(Mystring[0]); //Access From Key Value pair

//console.log(Mystring.__proto__); //For Access Proto in Console



//Methods OF String Class

//Length
//console.log(`THE LENGTH OF THE STRING IS ${Mystring.length}`);

//ToUpperCase
//console.log(Mystring.toUpperCase());

//TOLowerCase
//console.log(Mystring.toLowerCase());

//CharAt
//console.log(Mystring.charAt(7)); //=> h

//indexOf
//console.log(Mystring.indexOf('u')); //=> 4

//Substring
const NewString = Mystring.substring(0, 2); //Imp Last Value Not included, Not use for neg Val
//console.log(NewString);

//__________________________________________________________________________//
//Slice (Aniruddha-A b)
      // 01234567891011

const anotherString = Mystring.slice(3); //=>ruddha-Ab
//console.log(anotherString);

 const anotherString = Mystring.slice(0, 3); //=> Ani
//console.log(anotherString);

 const anotherString = Mystring.slice(-4, -1); //=> a-A  we can use also Negative val
//console.log(anotherString);


//trim
const NameString = "   Aniruddha    ";
//console.log(NameString);
//console.log(NameString.trim());


//Replace
const url = "https://Aniruddha%20Belkhede.com"

//console.log(url.replace("%20","-"));


//Include
//console.log(url.includes('Belkhede')); //=>true


//Split
//console.log(Mystring.split('-')); //=>[ 'Aniruddha', 'Ab', 'AE', 'CN', 'DC' ]
