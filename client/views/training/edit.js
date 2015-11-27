// training edit

Template.trainingEdit.helpers({
  training: function(){
    return Training.findOne({ _id: this._id });
  }
});

Template.trainingEdit.events({
  'submit .form-edit': function(e, t){
    e.preventDefault();

    var muscles = [];
    var musclesElements = t.findAll('.muscles');

    for(var i = 0; i < musclesElements.length; i++){
      if(musclesElements[i].checked){
        muscles.push(musclesElements[i].value);
      }
    }

    var training = {
      name: t.find('#name').value,
      prop: t.find('#prop').value,
      muscles: muscles,
    };

    Meteor.call('editTraining', this._id, training, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn-status': function(e){
    e.preventDefault();

    Meteor.call('statusTraining', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn-delete': function(e){
    e.preventDefault();

    Meteor.call('deleteTraining', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  }
});
