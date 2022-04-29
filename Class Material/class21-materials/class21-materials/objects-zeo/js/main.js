//Create a stopwatch object that has four properties and three methods
const stopWatch = {

}

stopWatch.brand = 'Nike';
stopWatch.color = 'black';
stopWatch.shape = 'round';
stopWatch.size = 'medium';

stopWatch.start = function (){
    console.log(`Startingggg`)
}

stopWatch.stop = function(){
    console.log(`Stopping`)
}

stopWatch.beep = function (){
    console.log(this.brand)
}