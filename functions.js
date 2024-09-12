//1+2 ?
const movieRatings=[];
function initializeRating(movieName, movieRating){
    movieRatings.push({movie:movieName, rating:movieRating}) 
    console.log(movieRatings);
}

initializeRating("billi",5);
initializeRating("levender",4.7);
//3
function findRating(movieTitle){
    let found=false;
    for(i=0; i<movieRatings.length; i++){
        if(movieRatings[i].movie===movieTitle){
            console.log(`The rating of ${movieTitle} is ${movieRatings[i].rating}`);
            found=true;
            break; // Stop the loop if movie is found
        }
    }
    if(found!=true){
        console.log(`Movie was not found`);
    }
}
findRating("levender");
//4
function updateRating(movieTitle,newRatign){
    let found=false;
    for(i=0; i<movieRatings.length; i++){
        if(movieRatings[i].movie===movieTitle){
            movieRatings[i].rating=newRatign;
            found=true;
            console.log(movieRatings[i]);
            break; // Stop the loop if movie is found
        }
    }
    if(found!=true){
        console.log(`Movie was not found`);
    }
}

updateRating("levender",8);
//5
function removeRating(movieTitle){
    const removeIndex=movieRatings.findIndex(mrObject=> mrObject.movie==movieTitle);
    if(removeIndex!==-1){
        console.log(removeIndex);
        movieRatings.splice(removeIndex);
    }
    else{
        console.log(`Movie was not found`);
    }
}
// removeRating("levender")
console.log(movieRatings);
//6
function listMovies(){
    for(i=0; i<movieRatings.length; i++){
        console.log(`${movieRatings[i].movie}-${movieRatings[i].rating}`)
    }
}
listMovies();
//7
function highestRatedMovie(){
    let highestRate=-1;
    for(i=0; i<movieRatings.length; i++){
        if(movieRatings[i].movie!==""){
            for(i=0; i<movieRatings.length; i++){
                if(movieRatings[i].rating>highestRate){
                    highestRate=movieRatings[i].rating;
                }
            }
        }
    }
    if(highestRate>-1){
        console.log(highestRate);
    }
    else{
        console.log("No movies were found");
    }
}
highestRatedMovie(movieRatings)

//pure functions
//1
const movieRatingAvg=[3,4,5,3,5];
function claculateAverageRating(){
    let sum=0;
    for(i=0; i<movieRatingAvg.length; i++){
        sum+=movieRatingAvg[i];
    }
    return console.log(sum/movieRatingAvg.length);
}
claculateAverageRating()

//2
const filterInput=[[3,4,5,2,1,5],4]
function filterByRating(){
    const minIndex=filterInput[1];
    const filtered=[];
    for(i=0; i<filterInput[0].length; i++){
        if(filterInput[0][i]>=filterInput[0][i-1] && filterInput[0][i]>=minIndex){
            filtered.push(filterInput[0][i]);
        }
    }
    console.log(filtered)
}
filterByRating();
//3
const findHighest=[3,4,5,3,5];
function findHighestRating(){
    let rank=-1;
    for(i=0; i<findHighest.length; i++){
        if(findHighest[i]>rank){
            rank=findHighest[i];
        }
    }
    console.log(rank);
}
findHighestRating()
//4 *********more easy with sort
const aboveInput=[[3,4,5,2,1,5],3]
function ratingAbove(){
    const aboveIndex=aboveInput[1];
    const above=[];
    for(i=0; i<aboveInput[0].length; i++){
        if(aboveInput[0][i]>aboveInput[0][i-1] && aboveInput[0][i]>aboveIndex){
            above.push(aboveInput[0][i]);
        }
    }
    console.log(above)
}
ratingAbove()
//5

function countingRating(){

}

