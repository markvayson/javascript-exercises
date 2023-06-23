const convertToCelsius = function(y) {
  let cel = (y-32) *(5/9);;
  return parseFloat(cel.toFixed(1));
}

function convertToFahrenheit(x) {
  let far = (x*9/5)+ 32;
  return parseFloat(far.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
