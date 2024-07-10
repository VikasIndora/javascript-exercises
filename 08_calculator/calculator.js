const add = function(num1 , num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr == []) return 0;
	let addition = 0;
  for(let i = 0; i < arr.length; i++){
    addition += arr[i];
  }
  return addition;
};

const multiply = function(arr) {
  if (arr == []) return 0;
	let product = 1;
  for(let i = 0; i < arr.length; i++){
    product *= arr[i];
  }
  return product;
};

const power = function(num,toPower) {
	return num ** toPower;
};

const factorial = function(num) {
  let product = 1;
  if (num == 0 || num == 1) return 1;
	for (num; num >= 1; num--){
    product *= num;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
