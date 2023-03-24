$(document).ready(function () {
  // --- our code goes here ---

  $('#tweet-text').on('input', function () {
    let maxLength = 140;
    let length = $(this).val().length;
    console.log(length);
    let charactersLeft = maxLength - length;
    let counter = $('.counter');
    console.log(counter);
    counter.text(charactersLeft);

    if (charactersLeft < 0) {
      counter.addClass('invalid');
    } else {
      counter.removeClass('invalid');
    }

  });
});

//1 can i type in my text area see the value - make sure to clean things up confusing

//2 test little by little console it

//3