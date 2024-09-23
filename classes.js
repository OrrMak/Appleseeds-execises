
//1
class Media{   
     // Private properties
    #title;
    #duration;
    #rating;
    constructor(title,duration){
        this.#title=title;
        this.#duration=duration;
        this.#rating=[];
    }
    //getters
    getTitle(){
        return this.#title;
    }
    getDuration(){
        return this.#duration;
    }
    //public method-addRating
    addRating(rating){
        this.#rating.push(rating)
    }
    //private method-avgRating
    #avgRating(){
        if(this.#rating.length===0){
            return 'No ratings yet';
        }
        else{
            const sum= this.#rating.reduce((currentSum, currnetIndexValue)=>currentSum+currnetIndexValue,0)
            const avg=sum/this.#rating.length;
            return avg;
        }
    }
    //get avgRating
    getAvgRating(){
        return  this.#avgRating();
    }
    displayDetails(){
        return `media's title:${this.getTitle()}, duration:${this.getDuration()}, average rating is: ${this.getAvgRating()}`
    }
}

const media1=new Media('the matrix',120);
media1.addRating(4);
console.log(media1.getTitle());
console.log(media1.getDuration());
console.log(media1.getAvgRating());
console.log(media1.displayDetails());

class Movie extends Media{
     // Private properties
    #director;
    #genre;
    constructor(title,duration,director,genre){
        super(title,duration); // Call the Media superclass constructor
        
        this.#director=director;
        this.#genre=genre;
    }
    //gettres
    getDirector(){
        return this.#director;
    }
    getGenre(){
        return this.#genre;
    }
    //Override the displayDetails
    displayDetails(){
        return `${super.displayDetails()}, director:${this.#director}, genere:${this.#genre}`
    }
}

const movie1=new Movie('matrix',120, 'biili', 'drama');
console.log(movie1.displayDetails());