const numbers=[2,3,4,5,7];

for(let number of numbers){


    console.log(number);
}

const bottle = { color:'yellow', price:50, isCleaned:true,capacity:1};

// for( const value in bottle){

//     console.log(value, bottle[value]);
// }
// way to read boject properties....

const key= Object.keys(bottle);
console.log(key);
console.log(key);

for( const val of key){


    // console.log( val, bottle[val]);
}

// compare with object array ...
// const first={a:2};
// const second={b:2};
// const third= second;

// if(third === second){

//     console.log('They Are Totaly Same!');
// }
// else{

//     console.log('different');
// }


// compare object in bangla method...


const first={a:2,b:4,c:7};
 const second={a:2,b:4,c:7};

 const firstString= JSON.stringify(first);
 const secondString= JSON.stringify(second);

//  if(firstString === secondString){

//     console.log('They are same');
//  }

//  else{

//     console.log('different');
//  }

function compareObject(first,second){

 const firstKeys= Object.keys(first); 
 const secondKeys= Object.keys(second); 
 

 if(firstKeys.length ===  secondKeys.length){
     for( const key of firstKeys){ 

         if(first[key] === second[key])
         {
            // console.log('They are same');
            return true
        }
        
     
 }
 



}
else{

    return false;
}

}


  const Valueof= compareObject(first,second);

  console.log(Valueof);
