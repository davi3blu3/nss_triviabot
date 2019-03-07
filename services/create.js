module.exports = {
  poll: function(command) {
    // determine which poll to create
    if (command.slice(0, 2).toUpperCase() === 'DAY') {
      return createDayPoll('MTWRF');
    } else if (command.slice(0, 4).toUpperCase() === 'VENUE') {
      return createVenuePoll('Thursday');
    } else {
      console.log('problem with request text:', command);
    }
  },

  createDayPoll: function(dayString) {
    console.log('create dayPoll triggered');
    return dayString;
  },

  createVenuePoll: function(day) {
    console.log('create venuePoll triggered');
    return day;
  }
};
