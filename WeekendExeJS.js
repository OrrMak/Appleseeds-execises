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
// const binaryArray = [1, 0, 1, 1];
// const integerValue = parseInt(binaryArray.join(''), 2);
// console.log(integerValue); 

//Ex2.3 - Find the Next Perfect Square

function perfectSquare(num){
     // Check if num is not an integer
    if (Number.isInteger(num)===false) {
        console.log('there is no non-integer n that can create a perfect square.');
      }
    // Check if num is negative
    if (num<0) {
       console.log('there is no true square root of a negative number');
      }
    // Check if num has an integer square root
    if(Number.isInteger(Math.sqrt(num))===false && num >= 0){
        console.log(-1);
    }
    // If num is a perfect square
    if (Number.isInteger(Math.sqrt(num))){
        const sq=Math.sqrt(num);
        console.log(`${sq}`);
        const nextSq=sq+1;
        console.log(`${nextSq}`);
        console.log(Math.pow(nextSq,2));
    }
    
}
perfectSquare(100);

// Ex2.4 - Unique

const findUniq= [ 1, 1, 1, 2, 1, 1 ];
function uniqe(arr){
    const min=Math.min(...arr);
    const max=Math.max(...arr);
    const sorted=arr.sort((a,b)=>a-b);
    if(arr[0]===min && arr[1]===min){
        return console.log(`the uniqe num is ${max}`)
    }
    else{
        return console.log(`the uniqe num is ${min}`)
    }
}
uniqe(findUniq)

//Ex2.5 - Summation
function Summation(n) {
    if(n<1 | Number.isInteger(Math.sqrt(n))===false){
        console.log(`The number needs to be a positive integer greater than 0`)
    }
    //if the given number is 1?
    const array=Array.from({ length: n }, (v, i) => i+1); // _  It's a convention rather than a feature of the language itself.
    console.log(array);

    return console.log(array.reduce((accumulator, currentValue) => accumulator + currentValue,0))
}
Summation(4);

// Ex2.6 - Years and Centuries
function centuries(year){
    if (Number.isInteger(year)===false){
        console.log("Please insert a number")
    }
    if (year<0){
        console.log("B.C")
    }
    if(Number.isInteger(year) && year>=0){
        const century=Math.floor((year/100)+1);
        return console.log(`${century} century`);
    }

}
centuries(1400);

// Ex2.7 - Basic Math

function basicMath(operator, num1, num2){
    const validhOperators = ['+', '-', '*', '/', '%', '**'];
    let res;

    if(validhOperators.indexOf(operator)!==-1 && typeof(num1)==="number" && typeof(num2)==="number"){
        switch (operator){
            case '+':
                res=num1+num2;
                break;
            case '-':
                res=num1-num2;
                break;
            case '*':
                res=num1*num2;
                break;
            case '/':
                res=num1/num2;
                break;
            case '%':
                res=num1%num2;
                break;
            case '**':
                res=num1**num2;
                break;
        }
        return console.log(res)
    }

    else{
        console.log("value 1 and 2 needs to be numbers, and the operator from the list:'+', '-', '*', '/', '%', '**'")
    }
}
basicMath('0',1,4);

// Ex3.1 - Growth Of population
function growth(p0,growthPercent,staticChange,p){
            
            let yearsCount = 0;
            let newPplCount = p0;
        
            // Check if inputs are valid
            if (
                Number.isInteger(p0) && p0 > 0 &&
                Number.isInteger(p) && p > 0 &&
                Number.isInteger(staticChange)
            ) {
                // If growthPercent is null, treat it as 0
                const effectiveGrowthPercent = (growthPercent === null ? 0 : growthPercent);
                
                if (typeof effectiveGrowthPercent !== 'number' || effectiveGrowthPercent < 0) {
                    console.error("Invalid growthPercent value. It should be a positive number or null.");
                    return;
                }

                if(p<p0){
                    console.log("Future population entered needs to be greater than current");
                    return;
                }
        
                const positivePercentChange = newPplCount * (effectiveGrowthPercent / 100);
        
                console.log(`Effective growth rate: ${effectiveGrowthPercent}%`); // Check ***
                console.log(`Change in count of people per year: ${positivePercentChange}`); // Check ***
        
                if (effectiveGrowthPercent === 0) {
                    // Handle case where growthPercent is null or 0
                    if (staticChange < 0) {
                        console.log("Population count will decrease each year");
                        return; // Population will decrease and never reach target
                    }
                    if (staticChange === 0) {
                        console.log("Population count stays the same");
                        return; // Population will stay the same
                    }
                    // Static change is positive
                    while (newPplCount < p) {
                        newPplCount += staticChange;
                        console.log(newPplCount); // Check ****
                        yearsCount++;
                        if (yearsCount > 100) {
                            console.log("It'll take at least 100 years");
                            return; // Exceeded 100 years
                        }
                    }
                    console.log(`It'll take ${yearsCount} years`);
                } else {
                    // Handle case where growthPercent is a positive number (not null or 0)
                    if (staticChange < 0) {
                        if (positivePercentChange <= Math.abs(staticChange)) {
                            console.log("Population count will decrease each year");
                            return; // Population will decrease and never reach target
                        }
                        if (positivePercentChange === Math.abs(staticChange)) {
                            console.log("Population count stays the same");
                            return; // Population will stay the same
                        }
                    }
        
                    // Calculate years until population reaches target p
                    while (newPplCount < p) {
                        newPplCount += positivePercentChange + staticChange;
                        console.log(newPplCount); // Check ****
                        yearsCount++;
                        if (yearsCount > 100) {
                            console.log("It'll take at least 100 years");
                            return; // Exceeded 100 years
                        }
                    }
                    console.log(`It'll take ${yearsCount} years`);
                }
            } else {
                console.error("Invalid input parameters.");
            }
        }
        
        // Test cases
        // growth(1500, 5, 100, 5000);   
        // Valid growthPercent
        // growth(1500, null, 100, 5000); 
        // GrowthPercent is null
        // growth(1500, 0, 100, 5000);  
         // GrowthPercent is 0

         growth(1500, 5, 100, 100);  
         // GrowthPercent is 0

//Ex3.2 - People on the Bus

function PeopleLeftOTheBus(arrayInt) {
    
    const intCheck = arrayInt.every(row => row.every(value => Number.isInteger(value) && value >= 0));

    if(!intCheck){
        console.log("The array contains non-integer values or negative numbers.");
        return;
    }
        
    if(arrayInt[0][1]!==0){
        console.log("No passengers should be taking off at the first bus stop.");
        return;
    }
    if(arrayInt[arrayInt.length-1][0]!==0){
        console.log("Passengers should only be taking off at the last bus stop.");
        return;
    }
    let currentOn=0;

    for(i=0; i<arrayInt.length; i++){
        const [on, off] = arrayInt[i];
        currentOn += on - off;
        console.log(`countOn=${on}`)
        console.log(`countOf=${off}`)
        console.log(`CurrentOn=${currentOn}`)
        }
        
    return currentOn;
}
    

console.log(PeopleLeftOTheBus([[10, 0], [3, 5], [10, 8]])); // Output should be 5
