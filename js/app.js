App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function(){
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params){
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});

Ember.Handlebars.helper('format-date', function(date){
  return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input){
  return new Handlebars.SafeString(showdown.makeHtml(input));
});


var posts = [{
  id: '1',
  title: "Ruby on Rails",
  author: {name: "Hartl"},
  date: new Date('12-25-13'),
  excerpt: "There is a lot of good tutorials but this one was really good for rails"
  body: "I wanted to share about the most impactful tutorials and this one was the one"
}, {
   id: '2',
  title: "Javascript the Good Parts",
  author: {name: "Crowford"},
  date: new Date('1-25-14'),
  excerpt: "There is a lot of good tutorials but this one was really good for rails"
  body: "I wanted to share about the most impactful tutorials and this one was the one"
}];