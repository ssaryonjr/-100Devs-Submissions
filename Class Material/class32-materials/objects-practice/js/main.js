// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 


class Contractor{
    constructor(name, role){
        this._name = name;
        this._role = role;
    }

    get name(){
        return this._name;
    }

    get role(){
        return this._role;
    }

    code(){
        console.log('We coding baby')
    }
}

class FrontEnd extends Contractor{
    constructor(name, role, techStack){
        super(name, role);
        this._techStack = techStack;
    }

    get techStack(){
        return this._techStack;
    }

    frontStack(){
        console.log(`I will be coding the front end using ${this._techStack}`)
    }
}


class BackEnd extends Contractor{
    constructor(name, role, techStack){
        super(name, role);
        this._techStack;
    }

    get techStack(){
        return this._techStack
    }

    backStack(){
        console.log(`I will be coding the back end using ${this._techStack}`)
    }
}

let Sam = new FrontEnd('Sam', 'Front-End', 'HTML5, CSS3, JavaScript, React.JS, TailWind')
let Kayla = new FrontEnd('Kayla', 'Front-End', 'BootStrap, TypeScript, Angular')








// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }



