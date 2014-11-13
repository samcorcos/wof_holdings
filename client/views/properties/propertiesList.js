var propertyData = [
  {
    address: "6551 University St, Chicago",
    purchasePrice: "$38,000",
    rehabCost: "$20,000"
  },
  {
    address: "3322 Next Ave, Chicago",
    purchasePrice: "$120,000",
    rehabCost: "$50,000"
  },
  {
    address: "929 Baltimore St, Chicago",
    purchasePrice: "$340,000",
    rehabCost: "$120,000"
  }
];

Template.propertiesList.helpers({
  properties: propertyData
});
