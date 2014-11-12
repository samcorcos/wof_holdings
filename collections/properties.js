Properties = new Mongo.Collection('properties');

Properties.allow({
  insert: function(userId, doc) {
    return !! userId;
  }
})

if (Properties.find().count === 0) {
  Properties.insert({
    address: "6551 University, Chicago",
    purchasePrice: "$38,000",
    rehabCost: "$20,000",
  })
}
