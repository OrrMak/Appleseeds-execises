//Ex1.1 - Yes or No

let bool=false;
console.log(typeof(bool));

function yesOrNo(bool){
    if(typeof(bool)!=="boolean"){
        console.log("you didnt enter a boolean value")
    }
    else{
     return console.log(bool);
    }
}

//Ex2.1
const exmArray= [19, 5, 42, 2, 77];
// console.log(Math.min(...exmArray));
function sumOfLowest(inputArray){
    const copyInputArray=inputArray; // making a copy of the input array cause it's going to be spliced.
    const min=Math.min(...copyInputArray); //finding the valueof min 1 
    console.log(`${min}`);  //check
    const minIndex=copyInputArray.indexOf(min); // finding the index of min1
    console.log(`${minIndex}`); //check
    copyInputArray.splice(minIndex,1);// deleting the min value
    const min2=Math.min(...copyInputArray); // finding min2
    console.log(`${min2}`); //check
    return console.log(`${min+min2}`);
}
sumOfLowest(exmArray);

//Ex2.2 - One and Zero - Binary