const sumAll = function(numOne,numTwo) {
    let sum = 0;
    let min = 0;
    let max = 0;
    if(typeof numOne === 'number'
    && typeof numTwo === 'number'
    && numOne >= 0
    && numTwo >= 0
    && !isNaN(numOne)
    && !isNaN(numTwo)){

        if(numOne < numTwo && !isNaN(numOne) && !isNaN(numTwo) ){
            min = numOne;
            max = numTwo;
           } else {
            min = numTwo;
            max = numOne;
           }
       
               for(min; min <= max; min++){
                   sum += min;
               }
           
           return sum;
    } else { return "ERROR";}
    
};

// Do not edit below this line
module.exports = sumAll;
