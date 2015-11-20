// city edit

Template.cityEdit.helpers({
  city: function(){
    return City.findOne({ _id: this._id });
  },

  states: function(){
    return State.find({});
  }
});

Template.cityEdit.events({
  'submit .form-edit': function(e, t){
    e.preventDefault();

    var city = {
      name: t.find('#name').value,
      state: t.find('#state').value
    };

    Meteor.call('editCity', this._id, city, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn-status': function(e){
    e.preventDefault();

    Meteor.call('statusCity', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn-delete': function(e){
    e.preventDefault();

    Meteor.call('deleteCity', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  }
});
