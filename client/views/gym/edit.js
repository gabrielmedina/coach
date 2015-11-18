// gym edit

Template.gymEdit.helpers({
  gym: function(){
    return Gym.findOne({ _id: this._id });
  },

  cities: function(){
    return City.find({});
  }
});

Template.gymEdit.events({
  'submit #gym-edit': function(e, t){
    e.preventDefault();

    var gym = {
      name: t.find('#name').value,
      phone: t.find('#phone').value,
      email: t.find('#email').value,
      city: t.find('#city').value
    };

    Meteor.call('editGym', this._id, gym, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/gym');
      }
    });
  },

  'click #gym-status': function(e){
    e.preventDefault();

    Meteor.call('statusGym', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/gym');
      }
    });
  },

  'click #gym-delete': function(e){
    e.preventDefault();

    Meteor.call('deleteGym', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/gym');
      }
    });
  }
});
