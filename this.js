console.log(this);

console.log('abdus_shobhan is a student of cst.');

const student ={

    name: 'abdusShobhan',
    money:5000,
    study:'Math',
    subjects:['calculus','English','Bangla'],
    exam: function(){
        console.log(this);
        return( this.name + ' is preparing in an exam.');
    },
    examArrow: () => {
        console.log(this);
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
const df=  student.improveExam('calculas');
console.log(df);
const badamAli={
    name:'badamAli',
    money:800
}

badamAli.exam = student.exam;
badamAli.exam()






