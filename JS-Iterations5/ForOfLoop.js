//Following Loops are Array specific Loops

//[" ", " ", " ", " ", " "]

//[{}, {}, {}, {}, {}]

//(For Of Loop)

let MyArray = [1, 2, 3, 4, 5]
for (const i of MyArray) {
   // console.log(i);
}

let Mystring = "Hello World!"

for (const Str of Mystring) {
    
    if(Str==" ") continue;
    //console.log(Str);
}

//******************************************************************************* */
//Maps = Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique. And remembers the original insertion order of the keys

const map = new Map()
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('UK', "United Kindom");
map.set('IN', "India");
//console.log(map);

//Map With For Of Loop

for (const [Key, val] of map) {
    console.log(Key, "=",val);
}

//(for OF) Loop Not work on objects
