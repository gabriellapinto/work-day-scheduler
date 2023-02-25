$(function () {
    // adds event listener to save button to get elements in time block
    $('.saveBtn').on('click', function() {
      var timeBlockId = $(this).parent().attr('id');
      var userInput = $(this).siblings('.description').val();
      localStorage.setItem(timeBlockId, userInput);
    });
    // saves elements in time block to local storage
    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var userInput = localStorage.getItem(timeBlockId);
      $(this).find('.description').val(userInput);
      // sets current hour and time block hours to variables
      var currentHour = dayjs().hour();
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
      // tells whether it is the past, present, or future and adds class depending on time
      if (timeBlockHour < currentHour) {
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    })
    // displays current date at the top of the page
    var today = dayjs();
    $('#currentDay').text(today.format('MMMM D, YYYY'));
  });