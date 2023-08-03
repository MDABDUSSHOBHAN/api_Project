// const a=2;
// const b='2';
// if(a === b){

//     console.log('value are equal');
// }
// else{

//     console.log('they are not equal');
// }
const first=[1,2,3];
const second=[1,2,3];
const firstNumbr= JSON.stringify(first);
const secondNumber= JSON.stringify(second);

if(firstNumbr===secondNumber){  

    console.log('equal');
}
else{
    console.log('not Equal');
}


print5();

//  scope
function add(a,b){

    const total = (a+b);
    console.log(total);
    return total
    
}


add(4,5);

function print5(){

    console.log('Inner of the function',5)
}
const print10= function(){


    console.log('this is print ten',10);
}
// JavaScript Function Closures
function kitchen(){

    let roast =0;
    return function(){

        roast++;
        return roast;
    }
}

const value = kitchen();

console.log(value());

//  js closures function...
function name(){
    const name='abdus_Shobhan';
    return function(){

        return name;
    }
}
const value1= name();
// const value2 = name();
// console.log(value2());
// console.log(value1());

// cllBack function in js

function greeting(greetingHandler,name){

    greetingHandler(name)
}

// greeting(object);
function greetingHandler(name){

    console.log('Good Morning',name);
}

function greetNigth(name){
    console.log('Good Night',name);
}
// function calling....
greeting(greetingHandler,'abdus shobhan');

greeting(greetingHandler,'susmita Aker');
greeting(greetingHandler,'siam ali');
greeting(greetNigth,'salma');


// example..

// const object={
//     name:'abdus Shobhan',
//     age:24,
// }
// function callback(object){

//     console.log(object)
// }
// callback(object);

function sum(a,b,c){

    const arg= [...arguments];
    console.log(arg)
  const  total1= a+b+c;
    return total1
}
const total= sum(12,43,56,45,34);

console.log(sum.length);//it's defined that the number of parameter you already asign..

// console.log(total);

let num1=5;
let num2=7;

function multiply(x,y){

    x=1;
    const result = x*y;
    return result;
}

const output = multiply(num1,num2);
// console.log( 'f',num1);
console.log('Result is: '+ output);

// pass by refarance..

let student1= {name:'abdus_shobhan',partner:'aklima'};
let student2= {name:'raj',partner:'borsha'};
function Makemovies(couple1,couple2){

 couple1.name='sakib';
 couple2.name='shobhan';
}
console.log(student1,student2);
 Makemovies(student1,student2);

 console.log(student1,student2);
let a={name:'abdus_shobhan',Job:'webDeveloper'};

let b=a;
console.log(b);

const t=[];

if(t===true){

    console.log('truthy');
}
else{
    console.log('folsy');
}
const myFunction = (a)=>{

if(typeof a == 'number'){

    console.log('ture');
}
else{
    console.log('false');
}


}
myFunction(4);

let storFalsyValue= true;
if(!storFalsyValue){

    console.log('Nothing to show!');
}
else{
    console.log('You are amazing!');
}
const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); 
}
const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];
  staffsDetails.forEach((staffDetail)=>{
    let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
    console.log(sentence);


  })

//   arrow function practis
let myResult = (a,b)=>{

let sum = (a+b);
if(sum%2===0){
    console.log('True');
}
else{
    console.log('False');
}
}
myResult(21,2);

const shobhan= function(name){

    console.log(name,'Wish Your Happy Marit Life 24.12.2024!');


}
shobhan('abdus_shobhan');
const newr =()=>{


    console.log('Hey! whats up!');
}
newr();

const sum1= (a,b)=>{

    const total= a+b;

    return total;
}

const tt = sum1(2,4);
console.log(tt);

function rose(){

    name='abdus_shobhan';
    return function(){



        return name;
    }
}
const val= rose();
console.log(val());

function greet(){

    console.log('Hello World');
}
function sayName(name){

    console.log('Hello'+ ' '+name);

}
sayName('abdsu_shobhan');
setTimeout(greet,3000)