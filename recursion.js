
//1
arr= ['Inception', 'The Matrix', 'Interstellar'];
function countMovies(arr){

    if(arr.length===0){
        return 0;
    }
        
    return 1 + countMovies(arr.slice(1));
}
console.log(countMovies(arr))

// 2 
nestedMovie=[['Inception', 'The Matrix'], ['Interstellar', 'Dunkirk']];
function findMovie(arr,title){
    if(arr.length===0){
        return false;
    }
    if(arr[0]===title){
        return true;
    }
    if(Array.isArray(arr[0])){
        return findMovie(arr[0], title) || findMovie(arr.slice(1), title);
    }
}
console.log(findMovie(nestedMovie,'Inception'))

//3
const duration= [120, 150, 180];
function sumDuration(arr){
    if(arr.length===0){
        return 0;
    }
    if(typeof(arr[0])!=="number"){
        arr[0]=0;
    }
    return arr[0] + sumDuration(arr.slice(1));
}
// console.log(sumDuration(duration))

//4
const longest= [120, 150, 180];
function findLongest(arr){
    if(arr.length===1){
        return arr[0];
    }
    if(typeof(arr[0])!=="number"){
        arr[0]=0;
    }
    if(typeof(arr[1])!=="number"){
        arr[1]=0;
    }
    if(arr[0]>arr[1]){
        arr[1]=arr[0]
        return findLongest(arr.slice(1))
    }
    else{
        return findLongest(arr.slice(1));
}}
// console.log(findLongest(longest))

//5
const rating=[4.5, 4.0, 5.0];
function avgRating(arr){
    
    if (arr.length === 0) {
        return 0; 
    }
    let sum = arr[0] + avgRating(arr.slice(1));
    let count= countMovies(arr);
    return sum / count;
}

// console.log(avgRating(rating));

//7
const movieDirectors=[{title: 'Inception', director: 'Nolan'}, {title: 'TheMatrix', director: 'Wachowski'}];


//8
const earnings= [{title: 'Inception', earnings: 800}, {title: 'The Matrix', earnings: 700}]
function officeEarnings(arr){
    if(arr.length===0){
        return 0;
    }
    if(typeof(arr[0]['earnings'])!=='number'){
        earnings[0]['earnings']=0;
    }
    return arr[0]['earnings'] + officeEarnings(arr.slice(1));
}
console.log(officeEarnings(earnings));

//9
const movieRatings= [{title: 'Inception', rating: 4.5}, {title: 'The Matrix', rating: 4.0}]
function highestMovieRated(arr){

    if(arr.length===1){
        return arr[0]['title']
    }

    if(typeof(arr[0]['rating'])!=='number'){
        arr[0]['rating']=0;
    }

    if(typeof(arr[1]['rating'])!=='number'){
        arr[1]['rating']=0;
    }

    if(arr[0]['rating']>arr[1]['rating']){
        arr[1]['rating']=arr[0]['rating'];
        return highestMovieRated(arr.slice(1))
    }
    else {
        return highestMovieRated(arr.slice(1))
    }
}
console.log(highestMovieRated(movieRatings));
//10
const movieGenre = [{title: 'Inception', genre: 'Sci-Fi'}, {title: 'The Matrix', genre: 'Sci-Fi'}, {title: 'Titanic', genre:'Drama'}];

function countGenre(arr,Genre){
    if(arr.length===0){
        return 0;
    }
    if (arr[0]['genre']===Genre){
        return 1+ countGenre(arr.slice(1),Genre)
    }
    else{
        return countGenre(arr.slice(1),Genre)
    }
}

console.log(countGenre(movieGenre,"Sci-Fi"))

//11
const lenMovies= ['Inception', 'The Matrix', 'Up']
function movieLength(arr){
    if (arr.length==1){
        return arr[0];
    }
    if(arr[0].length>arr[1].length){
        arr[1].length=arr[0].length;
        return movieLength(arr.splice(1));
    }
    else{
        return movieLength(arr.splice(1));
    }
}
console.log(movieLength(lenMovies));

//12
const filterRating=[{title: 'Inception', rating: 4.5}, {title: 'The Matrix',rating: 4.0}, {title: 'Interstellar', rating: 5.0}]
function filterRateBase(array,rating){
    
    const filteredArray=[]
    
    function recursionRateBase(arr){
        if(arr.length===0){
            return;
        }
        if(arr[0]['rating']>=rating){
            filteredArray.push(arr[0]['rating'])  
        } 
        return recursionRateBase(arr.slice(1),rating)
    }
    
    recursionRateBase(array);
    if(filteredArray.length===0){
        console.log('there are not movies with this rating or above')
    }
    return filteredArray;
 }
console.log(filterRateBase(filterRating,4.5))

//13