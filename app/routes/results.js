import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url= 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=f0883a2d39c7410faffa5e41bac44628&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
