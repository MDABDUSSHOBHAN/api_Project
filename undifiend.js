// 8 wat to get undefined


/*
1.  variable that is not intialized will give undefined..
2.  function with no return.
3.  parameter that is not passed will be undefined.
4.  if return has nothing on the right side will return undefined
5.  property that doesn't exists on an object will give you undefined
6.  accessing array elements outside of the index range
7.  deleting an element inside an array
8. set a value directly to undefined



*/ 

let first;
console.log(first);

function secound(a,b){
   
    let result=(a+b);
    // return result;

}
 const d= secound();
 console.log(d);

 function sum(a,b,c,d){

    let total= (a+b+c+d);
    console.log(a,b,c,d);
 }

 const result = sum(2,3);

 const fifth={id:400393, name:'abdusShobhan',Address:'Thakurgaon'};

//  console.log(fifth.salary);
 const sixth=[3,4,5,7,8];
 console.log(sixth[2]);
 const array=[2,3,4,5];
delete array[2];
 console.log(array);
 console.log(typeof(null));