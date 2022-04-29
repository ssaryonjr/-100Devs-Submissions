//Create a mouse object that has four properties and three methods
// let mouse = {
//     brand: 'HP',
//     color: 'black',
//     batterylife: '100%',
//     created: 1999,

//     leftClick(){
//         return console.log('You left clicked something!');
//     },

//     rightClick(){
//         return console.log('You right clicked something')
//     },

//     turnOff(){
//         return console.log('you turned off the keyboard')
//     }
// }


function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors

    this.honk = function(){

    }
}