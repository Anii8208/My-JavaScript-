//Reduce = it is also a call back function, it is use in shopping list for total price count or to ADD values in Arrays List and Objects 

//Accumolater is use to store val 
//Current Val is use to store Current val of array list
//InitialVal is use to define Initial valu to start

const Myar = [1, 2, 3, 4]

const initialVal = 0

/*const MyNewar = Myar.reduce(function (Acc,CurrVal) {
   
    console.log(`acc= ${Acc} CurrVal= ${CurrVal}`);
   
    return Acc+CurrVal},initialVal )
*/

//const MyNewar = Myar.reduce((Acc,CurrVal) => Acc+CurrVal,0 )

//console.log(MyNewar);

//******************************************************************************** */

//Shpping cart PRICE


const ShopCart = [
    {
        Course: "JS",
        CoursePrice: 2999
    },
    {
        Course: "py",
        CoursePrice: 3999
    },
    {
        Course: "cpp",
        CoursePrice: 4999
    },
    {
        Course: "java",
        CoursePrice: 9999
    },
] 

const Totalbill=ShopCart.reduce((Acc,CurrVal) => CurrVal.CoursePrice+Acc,0)

console.log(Totalbill);