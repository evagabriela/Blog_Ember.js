App = Ember.Application.create();

  // App.Store = DS.Store.extend({
  // this help us to be notify if the API breaks 
  // revision: 12,
  // it tell us where to look for those records that we ask for
  // allow us to specify all our models in javascript and later on in the development cycle, we can switch to a live server
  // adapter: 'DS.FixtureAdapter'
// });

App.Router.map(function() {
  // put your routes here that says when the users click on the specific tab, we want to render the correct info 
  // Define all URLS 
  // this.resource('post');
  this.resource('about');
  this.resource('posts');
});

