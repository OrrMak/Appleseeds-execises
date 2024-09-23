//What is an entity in object-oriented programming? In object-oriented programming (OOP), an entity is often called an object. Objects encapsulate both data and behaviors, allowing us to model real-world entities and interact with them through methods and properties.
//In JavaScript, methods are used to manipulate objects. They are written in the same way as functions, but they are defined within the object.
//1

const movieTheater={
    movies: [],
    seats: {}, 
    //for example:
    //A:[1,2,3,4..],
    //B:[1,2,3,4..]
    bookedSeats:{}, 
    //for example: 
    //A: { 
    //     1: true,   // Seat 1 in row A is booked
    //     2: false,  // Seat 2 in row A is available
    //     3: false   // Seat 3 in row A is available
    // },
    // B: { 
    //     1: false,  // Seat 1 in row B is available
    //     2: false,  // Seat 2 in row B is available
    //     3: false   // Seat 3 in row B is available
    // }
    seatGenerator(movieTitle,NumOfRows,NumOfSeats){
        
    },
    addMovie(movie){
        //Adds a new movie to the theater.
        if (this.movies.indexOf(movie)===-1){
            return this.movies.push(movie); 
        }
        else{
            console.log(`${movie} already exists`)
        }
    },
    removeMovie(movieTitle){
        //Removes a movie by title
        if (this.movies.indexOf(movieTitle)!==-1){
            removeIndex=this.movies.indexOf(movieTitle);
            return this.movies.splice(removeIndex,1);
        }
        else{
            console.log(`${movieTitle} does not exists`)
        }
    },
    bookSeat(seatNumber){
        // Books a seat.
    },
    calculateRevenue(){
        //Calculates the total revenue.
    },
    listMovies(){
        //Lists all movies currently playing.
    },
    findMovieByTitle(){
        //Finds a movie by its title.
    }
}

///this explanation:
//1. Binding to the Instance: When you use this, it refers to the specific instance of the object created by the constructor. So, when you write this.getInfo = function() {}, it ensures that every instance of Movie will have its own getInfo() method, allowing it to access the instance's unique properties like title, duration, and ticketPrice.
//2. Encapsulation: By defining this.getInfo = function() {...}, the method becomes part of the instance itself, meaning it can interact with other instance properties via this. If you didn't use this, the method wouldn't be aware of which specific movie object it's working on, as this provides the necessary context.Without this, the function wouldn't be correctly associated with the instance's properties.
//3. Dynamic Method Access: The methods defined with this will always work based on the current state of the instance. This means if the properties are updated (e.g., if the ticket price changes), the method still works with the updated values.
//In short, using this ensures that methods inside the constructor are tied to the instance, and the context remains correct across different instances.

//2 Movie constructor
function Movie(title, duration, ticketPrice){
    //propertires
    this.title=title;
    this.duration=duration;
    this.ticketPrice=ticketPrice;
    
    //Methods:
    this.getInfo=function(){
        return `Title: ${this.title}, Duration: ${this.duration}, Ticket Price is: ${this.ticketPrice}`
        }
    this.calculateRevenue=function(seatsBooked){
        return this.ticketPrice*seatsBooked;
    }
    this.updateTicketPrice=function(newPrice){
        return this.ticketPrice=newPrice;
    }
}

const movie1=new Movie('the matrix',120, 12)
console.log(movie1)
console.log(movie1.getInfo())
console.log(movie1.calculateRevenue(34))
console.log(movie1)
console.log(movie1.updateTicketPrice(11))
console.log(movie1)

//3
function Seat(seatNumber,row){
    this.seatNumber=seatNumber;
    this.row=row;
    this.status='available';
    // this.movieTheater=movieTheater;

    //methods
    this.isOccupied=function(){
        //may add a check if num of row and seat exists -this.movieTheater.bookedSeats.hasOwnProperty(this.row) && this.movieTheater.bookedSeats[this.row].includes(this.seatNumber))
        if(this.movieTheater.bookedSeats[this.row][this.seatNumber]==='true'){
            return true;
        }
        else{
            return false;
        }
    }

    this.book=function(){
        if (this.isOccupied==='true'){
            console.log(`this seat number:${this.seatNumber} has already been taken, choose another`)
        }
        if (this.movieTheater.seats.hasOwnProperty(this.row) && this.movieTheater.seats[this.row].includes(this.seatNumber)){
            this.movieTheater.bookedSeats[this.row][this.seatNumber]='true';
            console.log(`Seat ${this.seatNumber} in row ${this.row} has been booked.`); 
        }
        else {
            console.log(`Seat ${this.seatNumber} in row ${this.row} does not exist.`);
        }
    }

    this. changeSeatStatus=function(status){
        if(this.movieTheater.bookedSeats[this.row][this.seatNumber]==='true'){
        this.status='booked'
        }
    }
}

//4
