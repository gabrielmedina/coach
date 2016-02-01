// muscle edit

Template.muscleEdit.helpers({
  muscle: function(){
    return Muscle.findOne({ _id: this._id });
  }
});

Template.muscleEdit.events({
  'submit .form--edit': function(e, t){
    e.preventDefault();

    var muscle = {
      name: t.find('#name').value
    };

    Meteor.call('editMuscle', this._id, muscle, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  },

  'click .btn--status': function(e){
    e.preventDefault();

    Meteor.call('statusMuscle', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn--delete': function(e){
    e.preventDefault();

    Meteor.call('deleteMuscle', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  }
});
