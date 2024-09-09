// let num=0;
// while (num<101){
//     console.log(num);
//     num=+1;
// }

// for(let number=0; number<51; number=+1)
//     {
//         if(number%3===0){
//             console.log(number);
//         }
// }

//Movie Rating System - Loops

//1 
const movieTitels = ["Inception","The dark Knight","Interstellar"];
let longest='';
// console.log(longest.length);

for(let i = 0; i<movieTitels.length; i++ ){
    if (movieTitels[i].length>=longest.length){
        longest=movieTitels[i];
    }
}

console.log(longest);

//2
const movieRating=[8.3, 7.5, 9.0, 8.7];
// const denominator=movieRating.length;
// console.log(denominator);
let sum=0;
for(let i=0; i<movieRating.length; i++){
    sum=+movieRating[0];
}
console.log(sum/movieRating.length);

//3
// console.log(movieTitels);
const newArray=[];
let aIndex=0;
for(let i=movieTitels.length-1; i>=0; i--){
        newArray[aIndex]=movieTitels[i];
        aIndex++;
}
console.log(newArray);

//4
// const movieRating=[8.3, 7.5, 9.0, 8.7];
for(let i=0; i<movieRating.length; i++){
    movieRating[i]+=0.5;
}
console.log(movieRating);

//5
// const movieRating=[8.3, 7.5, 9.0, 8.7];
const newRating=[];
let rIndex=0;
for(let i=0; i<movieRating.length; i++){
    if (movieRating[i]>8.0){
        newRating[rIndex]=movieRating[i];
        rIndex++;
    }
}
console.log(newRating);

//6
const newMovieRating=[8.3, 8.7, 9.0, 8.7, 8.3];
const specificRating=8.7;
let count=0;
for(i=0; i<newMovieRating.length; i++){
    if(newMovieRating[i]===specificRating){
        count+=1;
    }
}
console.log(count);

//7
const watchedList=["Inception","The Dark Knight"];
const wishList=["Interstaller","Inception"];
const newList=[];
let lIndex=0;
for(i=0; i<watchedList.length; i++) {
    for(j=0; j<wishList.length; j++) {
        if(watchedList[i]===wishList[j]){
            newList[lIndex]=watchedList[i];
            lIndex++;
        }
}}
console.log(newList);

//8
// const movieRating=[8.3, 7.5, 9.0, 8.7];
const minRating=8.0;
let bool=false;
for(i=0; (i<movieRating.length || movieRating[i]<minRating); i++){
    if(i==movieRating.length-1){
        bool!=false;
    }
}
console.log(bool);

//9
// const movieRating=[8.3, 7.5, 9.0, 8.7];
let max=0;
for(i=0; i<movieRating.length; i++){ //i==0
        if(movieRating[i]>max){
            max=movieRating[i];
        }
}
console.log(max);

//10 same as 9

//11 
const ratingList=[[8,7,9],[6,8,7],[9,9,10]];


