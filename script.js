// Gives Day, Month, Date of, Year and Time
var date = moment().format("dddd, MMMM Do YYYY, h:mm: a");
// Puts text into HTML
var currentDay = document.getElementById("currentDay");
currentDay.textContent = date;

var timeBlock = document.querySelector("#time-block");
// jQuery way $ is document.QuerySelector
var time = [$(".hour").text()];
console.log(time)
//Vanilla Javacript way
// var time = document.querySelector(".hour").innerHtml
var hour = parseInt[time];

var saveButton = document.querySelector(".saveBtn");
var description = document.querySelector(".description");

//Selects 9 am ID
var hour9 = $("#hour-9");
//Selects 10 am ID
var hour10 = $("#hour-10");
//Selects 11 am ID
var hour11 = $("#hour-11");
//Selects 12 pm ID
var hour12 = $("#hour-12");
//Selects 1 pm ID
var hour13 = $("#hour-13");
//Selects 2 pm ID
var hour14 = $("#hour-14");
//Selects 3 pm ID
var hour15 = $("#hour-15");
//Selects 4 pm ID
var hour16 = $("#hour-16");
//Selects 5 pm ID
var hour17 = $("#hour-17");

// Array of selectors
var timeFrame = [
  hour9,
  hour10,
  hour11,
  hour12,
  hour13,
  hour14,
  hour15,
  hour16,
  hour17,
];
console.log(timeFrame)

//this will change the color of the time blocks
function buildTimeBlock(hour) {
  console.log(hour);
  var background = "background-color";
  var currentHour = moment().hours();
  console.log(currentHour)
  if (currentHour == hour) {
    background = "present";
  } else if (currentHour > hour) {
    background = "past";
  } else {
    background = "future";
  }
  return background;
}

function start() { localStorage.getItem
  for (var index = 0; index < timeFrame.length; index++) {
    console.log(timeFrame[index])
    var element = timeFrame[index];
    var timeString = element.find( ".hour" ).text().trim()
    var backgroundColor = buildTimeBlock(timeString.substring(0,timeString.length-3));
    element.find("textarea").addClass(backgroundColor)
  }
}
start()
//Need save info to local storage
saveButton.addEventListener("click", function (event) {
  //prevents page from refreshing
  event.preventDefault();
  var HourlyText = []
  for (var index = 0; index < timeFrame.length; index++) {
    console.log(timeFrame[index])
    var element = timeFrame[index];
    var timeString = element.find( ".hour" ).text().trim()
    HourlyText.push(element.find("textarea").text())
  }
  localStorage.setItem("Text Array", HourlyText);
});
