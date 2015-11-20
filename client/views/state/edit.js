// state edit

Template.stateEdit.helpers({
  state: function(){
    return State.findOne({ _id: this._id });
  }
});

Template.stateEdit.events({
  'submit .form-edit': function(e, t){
    e.preventDefault();

    var state = {
      name: t.find('#name').value,
      uf: t.find('#uf').value,
      status: true
    };

    Meteor.call('editState', this._id, state, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/state');
      }
    });
  },

  'click .btn-status': function(e){
    e.preventDefault();

    Meteor.call('statusState', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/state');
      }
    });
  },

  'click .btn-delete': function(e){
    e.preventDefault();

    Meteor.call('deleteState', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        Router.go('/state');
      }
    });
  }
});
