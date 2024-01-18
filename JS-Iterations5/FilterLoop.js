//ForEach Loop Does not Return any value thats Why the Filter loop is use

//Filter Loop

//The Filter Retrun a if and only if the Certen Condition is "True"..

/*const course = [1, 2, 3, 4, 5]

const NewCourse = course.filter((item) => {return item >= 3})

console.log(NewCourse);
*/

//************************************************************************************ */

//in ForEach Loop same Work

/*const MyArr = [1, 2, 3, 4, 5]

const MyNewArr = []

MyArr.forEach((item) => {

    if(item >= 3)
    {
        MyNewArr.push(item)
    }
})

console.log(MyNewArr);

*/

//********************************************************************************* */

/*const MYSub = ["JS", "py", "Html", "java"]

const SelectSub = MYSub.filter(( (item) => item.length >= 3 ))

console.log(SelectSub);
*/


//******************************************************************************** */

const books = [
    
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },

  ];

  //const Newbooks = books.filter((bk) => bk.genre==='Fiction' )

  //console.log(Newbooks);

//const Newbooks = books.filter((bk) => bk.publish >= 2000)

//console.log(Newbooks);

//const Newbooks = books.filter(function (bk) { return bk.genre==='Science' && bk.publish>2009})

//console.log(Newbooks);

