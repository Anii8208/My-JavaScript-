//****************Simple Comparisons Wich is using same Datatypes************************\

//Note in js Comariosn (<,>) And Equality check (==) operation can have diff syntax

//console.log( 2 > 1 );
//console.log( 2 < 1 );
//console.log( 2 == 1 );
//console.log( 2 != 1 );
//console.log( 2 <= 1 );
//console.log( 2 >= 1 );

//*Comparison using Diff Dataypes (Not Recomended to use only understand for interview and exam purpose) */
//Avoid to use in code

//console.log("2" > 1); //it can converted automatically
//console.log("2" == 1);

//console.log(null > 0); => false
//console.log(null == 0); => false //null value automatically converted and gen Unpredictable outcome
//console.log(null >= 0); => true //Value conversion problem


//console.log(undefined > 0);  =>false
//console.log(undefined < 0);   -//-
//console.log(undefined == 0);  -//-
//console.log(undefined <= 0);  -//-

//***********************************Strict Check(===)******************************/
//Strict check operator can check the datatypes strictly and not allow diff datatypes

//console.log("2" === 2); =>false