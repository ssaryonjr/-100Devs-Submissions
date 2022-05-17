//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixMovie {
    constructor(movieTitle, movieGenre, movieRated, runTime){
        this.title = movieTitle;
        this.genre = movieGenre;
        this.rated = movieRated;
        this.runtime = runTime;
    }

    pause(){
        alert('MOVIE IS STOPPED BECAUSE UR NETFLIXING')
    }

    play(){
        console.log('movie is playing again')
    }

    skipIntro(){
        console.log('BORINGGG')
    }
}

let allAmerican = new NetflixMovie('All American', 'Fantasy', 'R', 60)
