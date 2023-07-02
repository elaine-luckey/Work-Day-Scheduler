$(function () {
    // get the current hour in 24-hour clock time using day.js
    const hour = dayjs().format('HH');
  
    // set the color of the time block 
    const setColor = () => {
      $('.time-block').each(function() {
        const timeBlock = this.id;
  
        // if the id matches the current hour, then set color of the timeblock accordingly
        if (timeBlock === hour) {
          $(this).removeClass('past future').addClass('present');
        } else if (timeBlock > hour) {
          $(this).removeClass('past present').addClass('future');
        } else {
          $(this).removeClass('present future').addClass('past');
        }
      })
    }
  
