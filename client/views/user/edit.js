// user edit

Template.userEdit.helpers({
  user: function(){
    return Meteor.users.findOne({ _id: this._id });
  }
});

Template.userEdit.events({
  'submit .form--edit': function(e, t){
    e.preventDefault();

    if(t.find('#type') != null){
      switch (t.find('#type').value) {
        case '1':
          var type = {
            name: 'Administrador',
            value: 1
          }
        break;

        case '2':
          var type = {
            name: 'Instrutor',
            value: 2
          }
        break;

        case '3':
          var type = {
            name: 'Praticante',
            value: 3
          }
        break;
      }

      var user = {
        'profile.name': t.find('#name').value,
        'profile.type': type
      }
    } else {
      var user = {
        'profile.name': t.find('#name').value
      }
    }

    Meteor.call('editUser', this._id, user, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },
});
