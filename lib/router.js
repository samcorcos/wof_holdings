Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('properties'); }
});

Router.route("/", {name: 'homePage'});
Router.route("/properties", {name: "propertiesList"})
