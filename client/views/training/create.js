// training create

Template.trainingCreate.helpers({
  practitioners: function(){
    return Meteor.users.find({});
  }
});

Template.trainingCreate.events({
  'submit .form-create': function(e, t){
    e.preventDefault();

    var training = {
      description: t.find('#description').value,
      practitioner: t.find('#practitioner').value,
      instructor: Meteor.userId(),
      status: true
    }

    Meteor.call('createTraining', training, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/training');
      }
    });
  }
});
