// training index

Template.training.helpers({
  trainings: function(){
    var user = Meteor.users.findOne({ _id: Meteor.userId() });

    if(user.profile.type.value === 3){
      return Training.find({ practitioner: Meteor.userId() }, {sort: {modifiedAt: -1}});
    } else {
      return Training.find({}, {sort: {modifiedAt: -1}});
    }
  }
});

Template.training.events({

});
