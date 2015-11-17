// city edit

Template.cityEdit.helpers({
  city: function(){
    return City.findOne({ _id: this._id });
  }
});

Template.cityEdit.events({
  'submit #city-edit': function(e, t){
    e.preventDefault();

    var city = {
      _id: this._id,
      name: t.find('#name').value
    };

    Meteor.call('editCity', city, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/city');
      }
    });
  },

  'click #city-status': function(e){
    e.preventDefault();

    Meteor.call('statusCity', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/city');
      }
    });
  },

  'click #city-delete': function(e){
    e.preventDefault();

    Meteor.call('deleteCity', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/city');
      }
    });
  }
});
