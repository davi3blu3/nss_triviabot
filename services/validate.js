const env = require('../environment/env');

module.exports = {
  // validate the initial slash command request by comparing payload credentials
  initRequest: function(payload) {
    if (payload.command !== env.payloadModel.command) {
      console.log('error: slash command mismatch');
      return false;
    } else if (payload.team_id !== env.payloadModel.team_id) {
      console.log('error: team_id mismatch');
      return false;
    } else if (payload.team_domain !== env.payloadModel.team_domain) {
      console.log('error: team_domain mismatch');
      return false;
    } else {
      return true;
    }
  }
};
