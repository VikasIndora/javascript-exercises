function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
const convertToCelsius = function(fahrenheit) {
  let number = (fahrenheit - 32) * (5/9);
  return round(number,1);
};

const convertToFahrenheit = function(celsius) {
  let number = celsius * (9/5) + 32;
  return round(number,1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
