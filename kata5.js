var camelCase = function(input) {
  var output = input;

  for (var i = output.length - 1; i >= 0; i--) {
    if (output[i] === " ") {
      var temp = output[i + 1].toUpperCase();
      output = output.slice(0,i) + temp + output.slice(i + 2);
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
