// city create

Template.cityCreate.helpers({

});

Template.cityCreate.events({
  'submit #city-create': function(e, t){
    e.preventDefault();

    var city = {
      name: t.find('#name').value,
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
