//Create a constructor with 4 properties and 3 methods
function CarMaker(make,model,year,doors){
    this.make = make
    this.model = model
    this.year = year
    this.doors = doors
    this.bluetooth = true

    this.selfDriving = function(){
        console.log('dont touch the wheel!')
    }

    this.beep = function(){
        console.log('BEEP BEEP')
    }

    this.music = function(){
        console.log('we bumping in the car!')
    }

}


let toyotaCorolla = new CarMaker('toyta','corolla','2018',4)
