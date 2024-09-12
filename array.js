//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
//The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
//The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
//The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().
//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//1
movieLibrary=["Inception","The Matrix","Interstellar"];
const movieToCheck="Inception";
console.log(movieLibrary.includes(movieToCheck));
//2
releaseDates=["1999","2010","2014"];
console.log(releaseDates.reverse());
//3
movieGenres=["Sci-Fi","Action","Aadventure"];
console.log(movieGenres.join());
//4
const genreToCeck="Action";
console.log(movieGenres.includes(genreToCeck));
//5
const specificMovie="Interstellar";
if(movieLibrary.indexOf("Interstellar")!=-1){
    console.log(`Interstellar found at ${movieLibrary.indexOf("Interstellar")}`);
}
else{
    console.log("Movie not found")
}
//6
upComingReleases=["Avatar","Dune","Tenet"];
upComingReleases.pop();
console.log(upComingReleases);
//7
classicMovies=["The Godfather","Citizen Kane"];
const newMovie="Casablanca";
classicMovies.unshift(newMovie);
console.log(classicMovies);
//8
filmNoir=["The Maltese Falcon","Touch of Evil","Double Indemnity"];
const firstMovie=filmNoir.shift();
console.log(firstMovie);
//9
actionMovies=["Die Hard","Jhon Wick"]
comedyMovies=["Superbad","The Hangover"]
newConArray=actionMovies.concat(comedyMovies);
console.log(newConArray);
//10
movieTitels=["Inception","The Matrix","Interstellar"];
console.log(movieTitels.sort());
//11
const quotesSstrings="I'll be back, May the force be with you, To infinty and beyond";
quotesArray=quotesSstrings.split(",");
console.log(quotesArray);
//12
topMovies=["The Shawshank Redemption","The Godfathe","The Dark Knight"]
const n=2;
console.log(topMovies.slice(0,n));    
//13
movieWishList=["The Matrix 4","Avatar 2","Dune"]
movieWishList.splice(0,movieWishList.length);
console.log(movieWishList.length);
//14
movies=["Inception","Interstellar"]
newMovieTenet="Tenet";
movies.push(newMovieTenet);
console.log(movies);
//15
console.log(movies.shift());
//16
movies=["Inception","Interstellar","Tenet"];
console.log(movies.join());
//17
movieToFind="Interstellar";
console.log(movies.indexOf(movieToFind));
//18
console.log(movies.reverse(movieToFind));
//19
releaseDatesSorted=[2001,2023,1998,2014];
console.log(releaseDatesSorted.sort((a,b)=>a-b));

//object.keys() & object.values()
//for of arrays -- for in objects