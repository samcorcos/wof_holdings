Meteor.startup(function() {
  var id, id2;
  if (Meteor.users.find().count() === 0) {
    id = Accounts.createUser({
      username: "sam",
      email: "sam@wofholdings.com",
      password: "samadmin",
      profile: {
        contactName: "Sam Corcos",
        phone: "415-515-4630",
        companyName: "WOF Holdings LLC"
      }
    });
    id2 = Accounts.createUser({
      username: "leon",
      email: "leon@wofholdings.com",
      password: "leonadmin",
      profile: {
        contactName: "Leon Corcos",
        phone: "916-548-9966",
        companyName: "WOF Holdings LLC"
      }
    });
    Roles.addUsersToRoles(id, ['admin']);
    return Roles.addUsersToRoles(id2, ['admin']);
  }
});
