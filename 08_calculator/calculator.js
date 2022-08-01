const add = function(a,b) {
	return (a+b);
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(arr) {
	return arr.reduce((total, x) => total + x, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, x) => total * x, 1);
};

const power = function(a, b) {
	return (a**b);
};

const factorial = function(numbah) {
	let ans = 1;
  if (numbah == 0 || numbah == 1) {
    return ans;
  }
  for ( let i = numbah; i >= 1; i--) {
    ans = i * ans;
  }
  return ans;
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
