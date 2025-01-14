
// Fetching tweets with Ajax

$(document).ready(function () {

  // Hide the errorMessage section by default
  $('.errorMessage').hide();


  const $form = $('#tweet-form');

  $form.on('submit', (event) => {
    event.preventDefault();

    const $inputField = $('#tweet-text');

    const tweetContent = $inputField.val().trim();


    console.log(tweetContent);
    if (tweetContent === null || tweetContent === "") {
      $('.errorMessage').text('Tweet content cannot be empty');
      $('.errorMessage').slideDown();
      // alert('Tweet content cannot be empty');
    } else if (tweetContent.length > 140) {
      $('.errorMessage').text('Tweet content exceeds 140 characters');
      $('.errorMessage').slideDown();
      // alert('Tweet content exceeds 140 characters');
    } else {
      $('.errorMessage').hide();
      const data = $(event.target).serialize();
      console.log(data);

      $.ajax({
        url: "/tweets", data: data,
        method: "POST",
        success: (response) => {
          console.log("Ajax call successful", response);
          $inputField.val('');
          loadTweets();

        },
        error: (err) => console.error(err),
      });

    }

  });


  const loadTweets = function () {

    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/tweets',
      dataType: 'json',
      success: function (data) {
        renderTweets(data);
        $('.counter').val(140);
      },
      error: function (error) {
        console.log(error);
      }
    });
  };

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function (tweet) {

    let $tweet = `<article class="tweet">
    
<header class="tweet-header2">
  <div class="profile">
    <div>
      <img src=${tweet.user.avatars} alt="Profile picture">
      
    </div>
    <h3>${tweet.user.name}</h3>
  </div>
  <div class="tweet-at">
    <span>${tweet.user.handle}</span>
  </div>
</header>

<div class="tweet-body">
  <p>${escape(tweet.content.text)}</p>
</div>
<footer>
  <span>${timeago.format(tweet.created_at)}</span>
  
  <div class="tweet-actions">
    <a href="#"><i class="fa-solid fa-flag"></i></a>
    <a href="#"><i class="fas fa-retweet"></i></a>
    <a href="#"><i class="fa-solid fa-heart"></i></a>
  </div>
</footer>
</article>
`;

    return $tweet;

  };

  const renderTweets = function (tweets) {
    // your code to render tweets goes here
    // const $tweetsContainer = document.querySelector('#tweets-container');// Assumes a tweets container element with ID "tweets-container"
    const $tweetsContainer = $("#tweets-container");

    // loops through tweets
    $('#tweet-container').empty();
    for (const tweet of tweets) {
      $("#tweets-container").prepend(createTweetElement(tweet))
    }
  };

  loadTweets();
});

