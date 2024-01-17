//For Each Loop = It is Use for Array

const Myarr = ["JS", "CPP", "JAva", "HTML"]

/*//Myarr.forEach( function (item) {
    console.log(item);
})*/

/*Myarr.forEach( (Val) => {
    console.log(Val);
})*/

/*function Printme(item) {
  console.log(item);
}*/

//Myarr.forEach(Printme)

//******************************************************************************* */

/*Myarr.forEach((items, index, arr) => {
    //console.log(`items = ${items}, index = ${index}, array = ${arr}`);
})*/

//*********************************************************************************** */

//Objcets retrive in array

const RecVal = [
  {
    LanguageName: "Java Script",
    LanguageFileName: "Js"
  },

  {
    LanguageName: "Python",
    LanguageFileName : "Py"
  },

  {
    LanguageName: "C++",
    LanguageFileName : "cpp"
  }
]

RecVal.forEach((Obj) => {
    //console.log(Obj.LanguageFileName);
})