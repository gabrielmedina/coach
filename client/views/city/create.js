// city create

Template.cityCreate.helpers({
  states: function(){
    return State.find({});
  }
});

Template.cityCreate.events({
  'submit #city-create': function(e, t){
    e.preventDefault();

    var city = {
      name: t.find('#name').value,
      state: t.find('#state').value,
      status: true
    };

    Meteor.call('createCity', city, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/city');
      }
    });
  }
});
