module.exports = {
  poll: function(command) {
    // determine which poll to create
    if (command.slice(0, 3).toUpperCase() === 'DAY') {
      return this.createDayPoll('MTWRF');
    } else if (command.slice(0, 5).toUpperCase() === 'VENUE') {
      return this.createVenuePoll('Thursday');
    } else {
      console.log('problem with request text:', command);
      console.log(command.slice(0, 3).toUpperCase());
      console.log(command.slice(0, 5).toUpperCase());
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
