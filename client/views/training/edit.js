// training edit

Template.trainingEdit.helpers({
  training: function(){
    return Training.findOne({ _id: this._id });
  }
});

Template.trainingEdit.events({
  'submit .form--edit': function(e, t){
    e.preventDefault();

    var training = {
      instructor: t.find('#instructor').value,
      description: t.find('#description').value,
      practitioner: t.find('#practitioner').value,
      status: true
    }

    Meteor.call('editTraining', this._id, training, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Alteração realizada', 'success');
        history.back();
      }
    });
  },

  'click .btn--status': function(e){
    e.preventDefault();

    Meteor.call('statusTraining', this._id, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        history.back();
      }
    });
  },

  'click .btn--delete': function(e){
    e.preventDefault();

    Meteor.call('deleteTraining', this._id, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        reason('Feito', 'success');
        Router.go('/training');
      }
    });
  }
});
