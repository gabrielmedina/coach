// state create

Template.stateCreate.helpers({

});

Template.stateCreate.events({
  'submit .form-create': function(e, t){
    e.preventDefault();

    var state = {
      name: t.find('#name').value,
      uf: t.find('#uf').value,
      status: true
    };

    Meteor.call('createState', state, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/state');
      }
    });
  }
});
