var conditionalSum = function(values, condition) {
  var output = 0;
  var remainder = 0;

  if (condition == "odd") remainder++;

  for (var i = 0; i < values.length; i++) {
    if (values[i] % 2 == remainder) output += values[i];
  }
  return output;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
