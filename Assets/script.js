// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function () {
  //
  // TODO: Add code to display the current date in the header of the page.
  // Display today's day and date

  var displayTime = document.querySelector("#currentDay");

  var currentTime = dayjs().format("dddd, MMMM D, YYYY");

  displayTime.textContent = currentTime;


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function timeTracker() {

    var timeNow = moment().hour();


    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);


        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
      // Get item from local storage if any
      $("#hour8 .time-block").val(localStorage.getItem("hour8"));
      $("#hour9 .time-block").val(localStorage.getItem("hour9"));
      $("#hour10 .time-block").val(localStorage.getItem("hour10"));
      $("#hour11 .time-block").val(localStorage.getItem("hour11"));
      $("#hour12 .time-block").val(localStorage.getItem("hour12"));
      $("#hour13 .time-block").val(localStorage.getItem("hour13"));
      $("#hour14 .time-block").val(localStorage.getItem("hour14"));
      $("#hour15 .time-block").val(localStorage.getItem("hour15"));
      $("#hour16 .time-block").val(localStorage.getItem("hour16"));
      $("#hour17 .time-block").val(localStorage.getItem("hour17"));
  
      timeTracker();


  })
