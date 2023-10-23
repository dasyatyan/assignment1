// This function calculates the time remaining between a given endtime and the current time.
function getTimeRemaining(endtime) {
  // Calculate the time difference in milliseconds between the endtime and the current time.
  var t = Date.parse(endtime) - Date.parse(new Date());
  
  // Calculate the remaining seconds, minutes, hours, and days.
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  
  // Return an object with the total time remaining and individual time components.
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// This function initializes a countdown clock and updates it at regular intervals.
function initializeClock(id, endtime) {
  // Get the HTML element that will display the countdown clock.
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  // This function updates the countdown clock based on the time remaining.
  function updateClock() {
    // Get the time remaining using the getTimeRemaining function.
    var t = getTimeRemaining(endtime);
 
    // Update the HTML elements to display the remaining days, hours, minutes, and seconds.
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2); // Ensure two-digit formatting.
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2); // Ensure two-digit formatting.
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); // Ensure two-digit formatting.
 
    // If the total time remaining is less than or equal to 0, stop the countdown.
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  // Call the updateClock function immediately to display the initial time remaining.
  updateClock();
  
  // Set up an interval to update the clock every 1000 milliseconds (1 second).
  var timeinterval = setInterval(updateClock, 1000);
}

// Create a deadline for the countdown (in this case, 23 * 13 * 38 * 21 seconds from the current time).
var deadline = new Date(Date.parse(new Date()) + 23 * 13 * 38 * 21 * 1000);
 
// Initialize the countdown clock with the specified ID and deadline.
initializeClock('countdown', deadline);
