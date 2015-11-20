// gym create

Template.gymCreate.helpers({
  cities: function(){
    return City.find({});
  }
});

Template.gymCreate.events({
  'submit .form-create': function(e, t){
    e.preventDefault();

    var gym = {
      name: t.find('#name').value,
      phone: t.find('#phone').value,
      email: t.find('#email').value,
      city: t.find('#city').value,
      status: true
    };

    Meteor.call('createGym', gym, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/gym');
      }
    });
  }
});
