// historical index

Template.historical.helpers({
  user: function(){
    return Meteor.users.findOne({ _id: this._id });
  },

  historicals: function(){
    return Historical.find({ practitioner: this._id }, {sort: {createdAt: -1}});
  }
});

Template.historical.events({

});
