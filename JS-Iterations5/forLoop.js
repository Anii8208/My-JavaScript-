// For Loop = it is used to perform any task repetadly

for(index=0; index<=10; index++){

    if(index==8){
        //console.log(`8 is best number`);
    }
    //console.log(index);
}

for (let i = 20; i > 0; i--){
    //console.log(i);   
}

//************************************************************************************ */

//Nested For Loop

for (let i = 0; i<=10 ; i++) {
    //console.log(`Outer Loop Value ${i}`);
    for (let j = 0; j <=10; j++) {
                //console.log(`Inner Loop Value ${j} and Outer Loop $//{i}`);
    }
}

//T//ables 

for (let i = 1; i <= 10; i++) {
    
    //console.log(`Table of ${i}`);

    for (let j = 1; j <= 10; j++) {
      //console.log(`${i}*${j} = ${i*j}`);  
        
    }
    
}

/**************************************************************************** */

//For Loop On Array

let MyArray = ["Superman","Batman","Shaktiman"]

//console.log(MyArray.length)

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    //console.log(element);
    
}

//*************************************************************************************/

//Break Keyword = it is a forword Jump statement, it is use to jump outside the loop or it is used to terminate the loop

for (let i = 0; i <= 10; i++) {
    
    if(i==5){
        //console.log(`Number is detected 5`);
        break;

    }
    //console.log(i);
    
}

//********************************************************************************* */

//Continue = It is a Backword jump statement, it is used to jump Back side the loop to initial position or it is used to repeate the loop


for (let i = 0; i <=10; i++) {
    if (i==9) {
        console.log(`Number is ignore 9 `);
        continue;
    }
    console.log(i);
    
}