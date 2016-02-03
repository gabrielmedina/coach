// training index

Template.training.helpers({
  practitionerId: function(){
    return this._id;
  },

  trainings: function(){
    return Training.find({ practitioner: this._id }, {sort: {modifiedAt: -1}});
  }
});

Template.training.events({

});
