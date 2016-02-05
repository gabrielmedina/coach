// user methods

Meteor.methods({
  editUser: function(id, user){
    return Meteor.users.update({ _id: id }, { $set: user });
  }
});
