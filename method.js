const student ={

    name: 'abdusShobhan',
    money:5000,
    study:'Math',
    subjects:['calculus','English','Bangla'],
    exam: function(){
        console.log(this);

        return( this.name + ' is preparing in an exam.');
    },
    improveExam: function(subject){
        this.exam();
        return ` ${this.name} is taking improvement exam on ${subject}`
    },
    
    treatDey: function(amoount){
        this.money = this.money - amoount;
        return this.money
    }
    
    
}

console.log(student.exam())
console.log(student.improveExam('calculus'));
console.log(student.treatDey(900));

const bottle = { color:'yellow', price:50, isCleaned:true,capacity:1};
const key= Object.keys(bottle);
const values= Object.values(bottle);
const pair= Object.entries(bottle);

// console.log(pair);

// console.log(values);
// console.log(key);

console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.color;
bottle.color='red';
console.log(bottle);

const kodomAli={


    name:'kacha badam',
    money:800,
}


const value = student.exam.call(kodomAli);
const value2= student.treatDey.apply(kodomAli,[200]);
console.log(value2);

console.log(value);





// console.log(bottle);

