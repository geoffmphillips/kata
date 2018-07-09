/*jshint esversion: 6 */

var calculateChange = function(total, cash) {
  var denom = ['twenty', 'ten', 'five', 'twoDollar', 'dollar', 'quarter', 'dime', 'nickel', 'penny'];
  var values = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  var change = (cash - total);
  var output = {};

  for (var i = 0; i < denom.length; i++) {
    var x = values[i];
    for (var j = change; (j - x) >= 0; j -= x) {
      if (isNaN(output[`${denom[i]}`]) === true) output[`${denom[i]}`] = 0;
      output[`${denom[i]}`]++;
      change -= x;
    }
  }
  return output;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
