// var propertyData = [
//   {
//     address: "x6551 University St, Chicago",
//     purchasePrice: "$38,000",
//     rehabCost: "$20,000"
//   },
//   {
//     address: "x3322 Next Ave, Chicago",
//     purchasePrice: "$120,000",
//     rehabCost: "$50,000"
//   },
//   {
//     address: "x929 Baltimore St, Chicago",
//     purchasePrice: "$340,000",
//     rehabCost: "$120,000"
//   },
//   {
//     address: "x6551 University St, Chicago",
//     purchasePrice: "$38,000",
//     rehabCost: "$20,000"
//   },
//   {
//     address: "x3322 Next Ave, Chicago",
//     purchasePrice: "$120,000",
//     rehabCost: "$50,000"
//   },
//   {
//     address: "x929 Baltimore St, Chicago",
//     purchasePrice: "$340,000",
//     rehabCost: "$120,000"
//   }
// ];
//
// Template.propertiesList.helpers({
//   properties: propertyData
// });


Template.propertiesList.helpers({
  properties: function() {
    return Properties.find();
  }
});
