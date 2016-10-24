import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },

    saveMessage() {
      var params = {
        text: this.get('text'),
        type: this.get('type')
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage', params);
    }
  }
});
