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
        text: 'This is the Day Poll',
        attachments: [
          {
            text: 'What day should we do trivia this week?',
            fallback: "Buttons aren't working",
            callback_id: 'day_vote',
            attachment_type: 'default',
            actions: [
              {
                name: 'Monday',
                text: 'Monday',
                type: 'button',
                value: 'Monday'
              },
              {
                name: 'Tuesday',
                text: 'Tuesday',
                type: 'button',
                value: 'Tuesday'
              },
              {
                name: 'Wednesday',
                text: 'Wednesday',
                type: 'button',
                value: 'Wednesday'
              },
              {
                name: 'Thursday',
                text: 'Thursday',
                type: 'button',
                value: 'Thursday'
              },
              {
                name: 'Friday',
                text: 'Friday',
                type: 'button',
                value: 'Friday'
              }
            ]
          }
        ]
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
        text: 'This is the Venue Poll',
        attachments: [
          {
            text: 'Yay buttons!',
            fallback: "Buttons aren't working",
            callback_id: 'venue_vote',
            attachment_type: 'default',
            actions: [
              {
                name: 'yes',
                text: 'yes',
                type: 'button',
                value: 'yes'
              },
              {
                name: 'no',
                text: 'no',
                type: 'button',
                value: 'no'
              }
            ]
          }
        ]
      }
    );
  }
};
