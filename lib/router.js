Router.configure({
  layoutTemplate: 'layout'
});

Router.route("/", {name: 'mainPage'});
Router.route("/properties", {name: "propertiesList"})
