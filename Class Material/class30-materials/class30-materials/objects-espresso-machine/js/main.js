//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor (make,model,color,bluetooth){
        this.make = make
        this.model = model
        this.color = color
        this.bluetooth = bluetooth
    }

    hotWater(){
        console.log('Caution: HOT HOT!')
    }

    frenchVanilla(){
        console.log('Its smelling good in here!')
    }

    hotChocolate(){
        console.log('Its smelling like christmas!')
    }

}

let samPro = new EspressoMachine('Saryon', 'V1', 'Black', true)