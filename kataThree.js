var talkingCalendar = function(date) {
  var monthArray =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var year = date.slice(0, 4);
  var month = monthArray[Number(date.slice(5, 7)) - 1];
  var day = date.slice(8);
    if (day[1] === "1" && day[0] !== "1") day += "st";
    else if (day[1] === "2" && day[0] !== "1") day += "nd";
    else if (day[1] === "3" && day[0] !== "1") day += "rd";
    else day += "th";

    if (day[0] === "0") day = day.slice(1);

  if (month === undefined || Number(date.slice(8)) > 31) return "Not a real date!";
  else return month + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
