const movieDetails=
{title:"Avatar",
director:"James Cameron",
releaseYear:"",
generes:"2009",
rating:[9.5,9,9.8,10],
}

//1
const movieRatings=movieDetails.rating; //this is the rating array from the object.
console.log(`this is the rating array- ${movieRatings}`)
const sumOfRatings=movieRatings.reduce(
    (acc, currentValue, currentIndex) => { return acc + currentValue;},0
)
console.log(`this is the sum result of the array- ${sumOfRatings}`)
const avgRating=sumOfRatings/movieRatings.length
console.log(`this is the average rating- ${avgRating}`)

//2 how to add new properties into an object.
movieDetails.cast=[{name:"Sam Worthington",role:"aa"},{name:"Zoe Saldana",role:"theAvatar"}]
movieDetails.generes=["","",""]
movieDetails.generes[0]="fiction";
movieDetails.generes[1]="nature";
movieDetails.generes[2]="drama";
movieDetails['generes'][3]="science";
//log the second genere.
console.log(movieDetails['generes'][1])
console.log(movieDetails.generes[1])
//log the second name of the actress rolling.
console.log(movieDetails['cast'][1]['name'])
console.log(movieDetails.cast[1].name)

//3
console.log(movieDetails)
//update release year
movieDetails.releaseYear="2009";
console.log(movieDetails.releaseYear)
// add new rating
movieDetails.rating.push(8.9);
console.log(movieDetails.rating);
//modify role of the first actor
movieDetails.cast[0].role="main";
console.log(movieDetails.cast[0].role);
movieDetails['cast'][0]['role']="researcher";
console.log(movieDetails['cast'][0]['role']);


//FIRST WAY
console.log('rating' in movieDetails)
console.log(`Using the "in" Operator: ${'rating' in movieDetails}`)
//second - more modern and straightforward way to check if an object has a specific property as its own (not inherited).
Object.hasOwn(movieDetails,'rating');
console.log(Object.hasOwn(movieDetails,'rating'));
//third - The hasOwnProperty() method is used to check if an object has a specific property as its own property (excluding properties in the prototype chain).
movieDetails.hasOwnProperty('rating');
console.log(movieDetails.hasOwnProperty('rating'));
//fourth
console.log(movieDetails.rating !== undefined)

//4
const movies=[
    {title:"Inception",
     details:{duration: 148, rating:13}
    },
    {title:"Interstellar",
        details:{duration: 169, rating:15}
       }
]
console.log(movies[0]['title']);
///a
function avg(movies){
    const newArr=movies.map((el)=>(el.details.rating))
    console.log(newArr);
    const sum=newArr.reduce(
    (acc, currentValue, currentIndex) => {
       return acc+currentValue;
    },0 );
    console.log(sum);
    console.log(sum/newArr.length);
}
avg(movies)


//5
const mergedMovies=Object.assign({}, movies[0], movies[1]);
console.log(mergedMovies)
//how to prevent further changes inside an object? 
// [1] Object.freeze() is a built-in method that makes an object immutable. Once an object is frozen, you cannot add, delete, or modify its properties. However, this only applies to the object's properties, not to nested objects or arrays.
// [2] Object.seal() prevents new properties from being added to the object and marks all existing properties as non-configurable. However, it allows modification of existing properties.
// [3] Object.preventExtensions() prevents new properties from being added to an object, but existing properties can still be modified or deleted.

//6 
const movieDetails= {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    ratings: [8,9,9.5,8.5]
};

