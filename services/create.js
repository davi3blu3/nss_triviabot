const https = require('https');
const axios = require('axios');

module.exports = {
  poll: function(data) {
    // determine which poll to create
    if (data.text.slice(0, 3).toUpperCase() === 'DAY') {
      return this.createDayPoll(data);
    } else if (data.text.slice(0, 5).toUpperCase() === 'VENUE') {
      return this.createVenuePoll(data);
    } else {
      console.log('problem with request text:', data.text);
    }
  },

  createDayPoll: function(data) {
    console.log('create dayPoll triggered');
    axios.post(
      'https://hooks.slack.com/services/' +
        process.env.team_id +
        process.env.test_channel_webhook,
      {
        text: 'This is the Day Poll'
      }
    );
  },

  createVenuePoll: function(data) {
    console.log('create venuePoll triggered');
    axios.post(
      'https://hooks.slack.com/services/' +
        process.env.team_id +
        process.env.test_channel_webhook,
      {
        text: 'This is the Venue Poll'
      }
    );
  }
};

// Local testing
module.exports.createDayPoll('MTWRF');
