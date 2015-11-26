// prop edit

Template.propEdit.helpers({
  prop: function(){
    return Prop.findOne({ _id: this._id });
  }
});

Template.propEdit.events({
  'submit .form-edit': function(e, t){
    e.preventDefault();

    var prop = {
      name: t.find('#name').value
    };

    Meteor.call('editProp', this._id, prop, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn-status': function(e){
    e.preventDefault();

    Meteor.call('statusProp', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn-delete': function(e){
    e.preventDefault();

    Meteor.call('deleteProp', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  }
});
