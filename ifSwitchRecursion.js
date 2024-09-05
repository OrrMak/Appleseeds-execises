//IF
//1
const movieRating=8;
console.log(movieRating>7 ? "Highly rated movie" :"This movie has room for improvement")

//2
const movieBudget=1.2;
console.log(((movieBudget>=1) && (movieBudget<=100)) ? "Big-budget movie" :"Indie movie")

//3
const movieGenre = ["Horror", "Comedy","Drama","Thriller"];
movieGenre[0];
const audienceAge=16;
if ((movieGenre==='Horror' && audienceAge>=18) || (movieGenre==!'Horror')){
    console.log("Suitable for audience")
}
else{
    console.log("Not Suitable for audience")
}

//4
const firstMovieDuration=90;
const secondMovieDuration=90;
if(firstMovieDuration!==secondMovieDuration){
    if(secondMovieDuration<firstMovieDuration){
        console.log("The first movie is longer")
    }
    else{
        console.log("The second movie is longer")
    }
}
else {
    console.log("Movies have the same duration")
}

//5
const viewerAge=9;
if(viewerAge>=13 && viewerAge<=18){
    console.log("Suitable for teens")}
else if(viewerAge>18){
    console.log("Suitable for adults");
}
else {
    console.log("Suitable for Kids")
}

//6
const popularityScore=87;
console.log((popularityScore>=80)? "Popular movie":"Less known movie");

//7
const numOfAwards=15;
console.log((numOfAwards%2==0)? "Even nunber of awards":"odd nunber of awards");

//8
const actorAge=14;
if(actorAge>14){
    if(actorAge<=24){
        console.log("Young actor")
    }
    else{
        console.log("Adult actor")
    }
}
else {
    console.log("Child actor")
}

//9
const hasInvitation=false;
console.log(hasInvitation?"Welcome to the premiere":"Please check your invitation");

//10
const screeningDuration=0;
if(screeningDuration<40){
    console.log("Short film");
}
else if (screeningDuration>=40){
    if(screeningDuration<=120){
        console.log("Feature Movie");
    }
    else{
        console.log("Epic length movie")
    }
}



//SWITCH
//1
const dayOfWeek=0;
switch(dayOfWeek){
    case 1:
        console.log("on sunday Batman");
    break;
    case 2:
    console.log("on monday Batman");
    break;
    case 3:
    console.log("on tuesday Batman");
    break;
    case 4:
    console.log("on wednesday Batman");
    break;
    case 5:
    console.log("on thursday Batman");
    break;
    case 6:
    console.log("on friday Batman");
    break;
    case 7:
    console.log("on shabat Batman");
    break;
    default:
    console.log("invalid day");
}
//2
const themeColor = ["light", "dark", "night"];
const selectedTheme = "dark";  

switch(selectedTheme) {
    case themeColor[0]:
        console.log("Light theme selected.");
        break;
    case themeColor[1]:
        console.log("Dark theme selected.");
        break;
    case themeColor[2]:
        console.log("Night theme selected.");
        break;
    default:
        console.log("Unknown theme.");
}
//3 
const notificationStatus="new";
switch(notificationStatus) {
    case "new":
        console.log("you have new movie notification");
    break;
    case "unread":
    console.log("you have new movie notification");
    break;
    case "unopened":
    console.log("you have new movie notification");
    break;
    default:
        console.log("you DONT have any notification");
}
//4 
const moviesRating="G";
switch(moviesRating) {
    case "G":
        console.log("movie with P rating");
    break;
    case "PG":
    console.log("movie with PG rating");
    break;
    case "PG-13":
    console.log("movie with PG-13 rating");
    break;
    case "R":
    console.log("movie with R rating");
    break;
    case "NC-17":
    console.log("movie with NC-17 rating");
    break;
}
//5
const audienceScore=80;
if(audienceScore>=90){
    console.log("Must Watch");
}    
else if(audienceScore>=75 && audienceScore<=89){
    console.log("recommended");
}    
else if(audienceScore>=60 && audienceScore>=74){
    console.log("Mixed reviews");
} 
else if(audienceScore<60){
    console.log("skip it");
} 
//6
const userInput=1;
// console.log(typeof(userInput));
const userInputType=typeof(userInput);
switch(userInputType) {
    case "string":
        console.log("the user entered a string");
    break;
    case "number":
    console.log("the user entered a number");
    break;
    case "boolean":
    console.log("the user entered a boolean");
    break;
}

//7
const releaseMonth=2;
if(releaseMonth>=1&&releaseMonth<=3){
    console.log("Q1");
}    
else if(releaseMonth>=4&&releaseMonth<=6){
    console.log("Q2");
}    
else if(releaseMonth>=7&&releaseMonth<=9){
    console.log("Q3");
} 
else if(releaseMonth>=10&&releaseMonth<=12){
    console.log("Q4");
} 
else{
    console.log("it is not a valid month");
}