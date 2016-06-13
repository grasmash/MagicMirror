$(function() {
  var birthday;
  var totalTimer;
  var yearsTimer
  var monthsTimer;
  var weeksTimer;
  var daysTimer;
  var hoursTimer;
  var minutesTimer;
  var secondsTimer;
  var nextBirthdayTimer;

  startTimers('07/21/15');
  //startTimers('08/11/15');

  function startTimers(dateText) {
    // Convert mm/dd/yyyy to date object.
    birthday = $.datepicker.parseDate('mm/dd/yy', dateText);

    window.clearInterval(totalTimer);
    totalTimer = countdown(birthday, function(ts) {
      $('.totalTimer').html('Theodore is ' + ts.toHTML("strong") + ' old.');
    });

    startTimer(yearsTimer, 'years');
    startTimer(monthsTimer, 'months');
    startTimer(weeksTimer, 'weeks');
    startTimer(daysTimer, 'days');
    startTimer(hoursTimer, 'hours');
    startTimer(minutesTimer, 'minutes');
    startTimer(secondsTimer, 'seconds');

    $('.dow').html('You were born on a <strong>' + getDayOfWeek(birthday) + '</strong>');

    nextBirthdayTimer = countdown(getNextBirthday(birthday), function(ts) {
      var amt = ts.toHTML("strong");
      $('.next-birthday').html('Your next birthday is in ' + amt);
    });

  }

  function startTimer(timer, unit) {
    // Reset timer. E.g., resetting yearsTimer.
    window.clearInterval(window[unit + 'Timer']);
    // Start timer again.
    window[unit + 'Timer'] = countdown(birthday, function(ts) {
      var amt = ts.toHTML("strong");
      // Countdown.js stupidly does not print values when they are 0,
      // so we must provide for a 0 case.
      if (amt == '') amt = '<strong>0 ' + unit + '</strong>';
      // $('.' + unit + 'Timer').html('or ' + amt + ' old');
    }, countdown[unit.toUpperCase()]);
  }

  function getDayOfWeek(date) {
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[date.getDay()];

    return n;
  }

  function getNextBirthday(birthday) {
    window.clearInterval(nextBirthdayTimer);

    var month = birthday.getMonth();
    var date = birthday.getDate();

    var thisYearBday = $.datepicker.parseDate('mm/dd/yy', (month + 1) + '/' + date + '/' + new Date().getFullYear());

    if (thisYearBday > new Date()) {
      return thisYearBday;
    }
    else {
      var nextYearBday = $.datepicker.parseDate('mm/dd/yy', (month + 1) + '/' + date + '/' + (new Date().getFullYear() + 1));
      return nextYearBday;
    }
  }
});
