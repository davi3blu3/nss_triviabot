module.exports = {
  // validate the initial slash command request by comparing payload credentials
  initRequestIsValid: function(payload) {
    if (payload.token !== process.env.app_token) {
      console.log('error: app token mismatch');
      return false;
    } else if (payload.team_id !== process.env.team_id) {
      console.log('error: team id mismatch');
      return false;
    } else if (payload.command !== process.env.slash_command) {
      console.log('error: slash command mismatch');
      return false;
    } else {
      console.log('initial request: validated');
      return true;
    }
  }
};
