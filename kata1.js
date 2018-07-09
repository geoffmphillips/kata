var repeatNumbers = function(data) {
  var output = "";

  for (var i = 0; i < data.length; i++) {
    var x = data[i][0];
    var y = data[i][1];
    var string = "";
    for(var j = 0; j < y; j++) {
      string += x;
    }
    if (i < data.length - 1) output += string + ", ";
    else output += string;
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
