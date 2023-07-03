$(function () {
    // dayjs is a function from Day.js library to get the current date and time in 24hr format
    const hour = dayjs().format('HH');
  
    // Set the color of the time block 
    const setColor = () => {

    // Selecting all elements with the class "time-block" and iterates over each element
      $('.time-block').each(function() {
    //Retrieves the id of the current element and assigns it to timeBlock
        const timeBlock = this.id;
  
        // If the id matches the current hour, then set color of the timeBlock for when it is present, past and future
        if (timeBlock === hour) {
          $(this).removeClass('past future').addClass('present');
        } else if (timeBlock > hour) {
          $(this).removeClass('past present').addClass('future');
        } else {
          $(this).removeClass('present future').addClass('past');
        }
      })
    }
  
    // render the current date and time in the header of the HTML
    const updateHeader = () => {
        //Select the element with the id currentDay using
                    const currentDay = document.getElementById('currentDay');
        //Get the current date and time using dayjs()
                    const now = dayjs();
        //Format the date as 'ddd. MMMM D, YYYY'
                    const formattedDate = now.format('ddd. MMMM D, YYYY');
        //Format the time as 'hh:mm:ss A'
                    const formattedTime = now.format('hh:mm:ss A');
            
        //Set the text content of the 'currentDay' element to the formatted date
                    currentDay.textContent = `${formattedDate} | ${formattedTime}`;
                  };
  
    // Save event to localStorage when the user clicks the save button
    const saveEvent = () => {
      $('.btn').on('click', function () {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('textarea').val();
  
        localStorage.setItem(key, value);
      })
    }
  
    // get event that were saved to localStorage, upon initial render
    const getEvent = () => {
        // Iterate over each element with the class "time-block"
                $('.time-block').each(function () {
        // Get the id attribute of the current element
                  const key = this.id;
        // Retrieve the value associated with the key from localStorage
                  const value = localStorage.getItem(key);
              
        // Set the value of the textarea child element of the current element
                  $(this).find('textarea').val(value);
                });
              };
    
    // setColor and updateHeader every second to update application
    setInterval(setColor, 1000);
    setInterval(updateHeader, 1000);
    saveEvent();
    getEvent();
  });