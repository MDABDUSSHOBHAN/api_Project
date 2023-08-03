 /*
 condition of truthy:

 1. True
 2. any number (+ve, -ve) will be truthy, other then Zero.
 3. Any string is truthy, other than empty string.
 4. empty object {}
 5. empty array []
 
 condition of false:
 1> false
 2>  0
 2> '' (empty string)
 3> undefined
 4> null is false
 
 */

 
 
 
 const x= null;
 if(x){
    console.log('value of x is true.');
 }
 else{

    console.log('value of x is false.');
 }
 const y= null;

 if(!y){
    console.log(' value is falsy');
 }