//Create an a class and extend it - Can be anything you would like it to be! 
class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}


class Cat extends Animal {
    constructor(name, legs, color){
        super(name, legs)
        this.color = color;
    }
}

const Simba = new Cat('Simba', 4, 'Black')
