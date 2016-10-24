import Ember from 'ember';


export default Ember.Route.extend({
  model() { //model hook
    return this.store.findAll('rental');
  },

  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
