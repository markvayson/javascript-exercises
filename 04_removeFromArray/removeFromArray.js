const removeFromArray = function(arr, ...rem) {
   let filteredArray = [];
   for (let i = 0; i<arr.length; i++){
    let currentValue = arr[i];
    if(!rem.includes(currentValue)){
        filteredArray.push(currentValue);
    }
   }
   return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
