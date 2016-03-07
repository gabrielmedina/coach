// training index

Template.training.helpers({
  trainings: function(){
    if(Meteor.user().profile.type.value === 3) {
      return Training.find(
        { $and: [
          { practitioner: this._id },
          { status: true }
        ]},
        { sort: {modifiedAt: -1} });
    } else {
      return Training.find(
        { practitioner: this._id },
        { sort: {modifiedAt: -1} }
      );
    }
  },

  practitionerId: function(){
    return this._id;
  }
});

Template.training.events({

});
