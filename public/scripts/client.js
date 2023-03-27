/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json

const tweets = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Mike",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Hello"
    },
    "created_at": 777777777777
  }
];

// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// };




const createTweetElement = function(tweet) {
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
  <p>${tweet.content.text}</p>
</div>
<footer>
  <span>${tweet.created_at}</span>
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

//Define another function renderTweets in the same file. 
//This function can be responsible for taking in an array 
//of tweet objects and then appending each one to the #tweets-container. 
///In order to do this, the renderTweets will need to leverage the createTweetElement function 
//you wrote earlier by passing the tweet object to it, then using the returned 
//jQuery object by appending it to the #tweets-container section.

const renderTweets = function(tweets) {
  // const $tweetsContainer = document.querySelector('#tweets-container');// Assumes a tweets container element with ID "tweets-container"
  const $tweetsContainer = $("#tweets-container");
  
  // loops through tweets
  for (const tweetData of tweets) { 
    console.log("+++++++", tweetData);
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweetData);
    // takes return value and appends it to the tweets container
    $tweetsContainer.append($tweet);
  }
};


// const tweet = createTweetElement(tweetData);
// Test / driver code (temporary)
// console.log(tweet); // to see what it looks like
console.log($('#tweets-container'));



$(document).ready(function() {
  // $('#tweets-container').append(tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  renderTweets(tweets);

});
