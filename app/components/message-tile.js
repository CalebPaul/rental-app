import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(message) {
      if (confirm('Delete message?')) {
        this.sendAction('destroyMessage', message);
      }
    }
  }
});
