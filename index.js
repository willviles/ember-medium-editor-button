/*jshint node:true*/
module.exports = {
  name: 'ember-cli-medium-editor-button',

  included: function(app) {
    this._super.included(app);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/medium-button/dist/medium-button.min.js');
    }

  },
};
