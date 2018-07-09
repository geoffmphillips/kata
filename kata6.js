var multiplicationTable = function(maxValue) {
  var table = "";
  var maxSquareString = String(maxValue * maxValue);
  var boxWidth = maxSquareString.length + 2;

  var addBorder = function(numOfBoxes) {
    table += "+";
    for (var i = 0; i < numOfBoxes; i++) {
      for (var j = 0; j < boxWidth; j++) {
        table += "-";
      }
      table += "+";
    }
    table += "\n";
  };

  var addNumbers = function(multiplier) {
    table += "|";
    var endValue = multiplier * maxValue;
    for (var i = multiplier; i <= endValue; i += multiplier) {
      table = table + " " + String(i) + addPad(i) + "|";
    }
    table += "\n";
  };

  var addPad = function(number) {
    var pad = " ";
    var numString = String(number);
    var needPad = boxWidth - numString.length - 2;
    for (var i = 0; i < needPad; i++) {
      pad += " ";
    }
    return pad;
  };

  for (var j = 1; j <= maxValue; j++) {
    addBorder(maxValue);
    addNumbers(j);
  }

  addBorder(maxValue);

  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
