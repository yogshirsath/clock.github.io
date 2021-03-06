function setSeconds(date) {
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    $('.tick.seconds').css('transform', 'rotate(' + (6 * seconds + 6 / 1000 * milliseconds) + 'deg)');
  }
  function setMinutes(date) {
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    $('.tick.minutes').css('transform', 'rotate(' + (6 * minutes + 0.1 * seconds) + 'deg)');
  }
  function setHours(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    $('.tick.hours').css('transform', 'rotate(' + (30 * hours + 0.5 * minutes) + 'deg)');
  }
  function updateClock() {
    var date = new Date();
    setHours(date);
    setMinutes(date);
    setSeconds(date);
  }
  $(document).ready(function() {
    updateClock();
    setInterval(function() {
      updateClock();
    }, 100);
  });