console.log("STARTING BOT...")

var Twit = require('twit');

var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
})

function postTweet(msg) {
    T.post('statuses/update', { status: msg }, function(err, data, response) {
    console.log("You posted: " + data.text);
    console.log("POSTED SUCCESSFULLY!");
})
}


postTweet("hello_bot");
