const player ={};
player.name='abdus_shobhan'; 
player.age=21;
player.Dept='CSE';
console.log(player);

// 2 object constructor:

const person = new Object();
console.log(person);

// 3 object create method..
const atel = Object.create(player);
console.log(atel.name);
// class

class person1{

    name = 'abdusShobhan';
    address =  'Thakurgaon';
    constructor(age){
        this.age= age;
    }

}

const person2 = new person1(21);



console.log(person2);


// consttroctor method....
function car(model, price){


    this.model= model;
    this.price= price;
}

const result= new car('tesla',3200);

console.log(result)


function chooch(name,partner){

    this.name=name;
    this.partner=partner;
}
const view= new chooch('abdus_shobhan','aklima');
console.log(view);
