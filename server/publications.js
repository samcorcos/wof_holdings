Meteor.publish('properties', function() {
  return Properties.find();
});


//// This would make properties available with two parameters, one is the collection, the other is the owner (so it would filter by owner);
// Meteor.publish('properties', function(owner) {
//   return Properties.find({owner:owner});
// })
