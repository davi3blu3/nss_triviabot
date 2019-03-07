module.exports = {
  // validate the initial slash command request by comparing payload credentials
  initRequest: function(payload) {
    if (payload.command !== process.env.slash_command) {
      console.log('error: slash command mismatch');
      console.log(payload.command, process.env.slash_command);
      return false;
    } else if (payload.team_id !== process.env.team_id) {
      console.log('error: team_id mismatch');
      console.log(payload.team_id, process.env.team_id);
      return false;
    } else if (payload.team_domain !== process.env.team_domain) {
      console.log('error: team_domain mismatch');
      console.log(payload.team_domain, process.env.team_domain);
      return false;
    } else {
      console.log('request validation successful!');
      return true;
    }
  }
};
