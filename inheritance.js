class Parent{
    constructor(){
        this.father = "Swapon Ray"; 
    } 
}
class Child extends Parent{
    constructor(name){
        super();    
        this.name = name;         
    }
    getFullname(){
        return `${this.name} ${this.father}`
    }
}
const baby = new Child('Pue');
const baby1 = new Child('Prapty');
console.log(baby);
console.log(baby1);
console.log(baby.getFullname());
console.log(baby1.getFullname());