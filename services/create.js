const createDayPoll = function(dayString) {
  console.log('create dayPoll triggered');
  return dayString;
},

const createVenuePoll = function(day) {
  console.log('create venuePoll triggered');
  return day;
}

module.exports = {
  poll: function(command) {
    // determine which poll to create
    if (command.slice(0, 3).toUpperCase() === 'DAY') {
      return createDayPoll('MTWRF');
    } else if (command.slice(0, 5).toUpperCase() === 'VENUE') {
      return createVenuePoll('Thursday');
    } else {
      console.log('problem with request text:', command);
      console.log(command.slice(0, 3).toUpperCase());
      console.log(command.slice(0, 5).toUpperCase());
    }
  },
};
