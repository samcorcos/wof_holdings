Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('properties'); }
});

Router.route("/", {name: 'homePage'});
Router.route("/properties", {name: "propertiesList"})
Router.route("/properties/:_id", {
  name: 'propertyPage',
  data: function() { return Properties.findOne(this.params._id); }
});
Router.route("/contact", {name: "contact"});
