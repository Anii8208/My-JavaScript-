let score = 33

console.log(typeof score);

//TypeConversion
let scoreINnum = Number(score)

console.log(typeof (scoreINnum));

console.log(scoreINnum);

/*
       "33" => 33
    "33abc" => NaN (Not an Number)
    "anii"  => NaN
      Null  => 0
  Undefined => NaN
      true  => 1 /  false => 0



*/


let IsLoggedIn = 1

//TypeConversion 
let BooleanIsLoggedIn = Boolean(IsLoggedIn)

console.log(typeof BooleanIsLoggedIn);

console.log(BooleanIsLoggedIn);


/*
    1   =>  true
    0   =>  false
    "string"    =>  true
    ""  =>  true
    1545    =>  true
    -1545   =>  true
    -0  =>  false



*/