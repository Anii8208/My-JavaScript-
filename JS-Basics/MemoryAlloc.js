// Stack (Primitive) & Heap(Non-Primitive)

//For All the Primitive Datatypes, the Stack memory is used and it return the Copy of data when it Needed

let MyYoutubeName = "Devil@Youtube.com"

let AnotherName = MyYoutubeName
//Pass the Copy of value so Change in Another VAriable Not Change in original value

AnotherName = "AnniCode@Yt.com"

console.log(MyYoutubeName);
console.log(AnotherName);



//For All Non-Primitive Datatypes, The Heap Memory is used and It returns Reference Of the (Object) DATA to another variable

// So value Change in Next Variable can effect the original value


let User1 = {
    emailId: "User@gamil.com",  UpiId: "Ybl@Upi.com"
}  //Object1

let User2 = User1 //Object1 assign obj2

//console.log(User2);

User2.emailId = "User2@gmail.com"
//Value is changed in Heap area 

console.log(User1);
console.log(User2);

