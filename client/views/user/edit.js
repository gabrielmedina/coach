// user edit

Template.userEdit.helpers({
  user: function(){
    return Meteor.users.findOne({ _id: this._id });
  }
});

Template.userEdit.events({
  'submit .form--edit': function(e, t){
    e.preventDefault();

    var user = {};

    if(t.find('#type') != null){
      switch (t.find('#type').value) {
        case '1':
          user['profile.type'] = {
            name: 'Administrador',
            type: 1
          }
        break;

        case '2':
          user['profile.type'] = {
            name: 'Instrutor',
            type: 2
          }
        break;

        case '3':
          user['profile.type'] = {
            name: 'Praticante',
            type: 3
          }
        break;
      }
    }

    user['profile.name'] = t.find('#name').value;

    Meteor.call('editUser', this._id, user, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        history.back();
      }
    });
  },

  'click .form__btn--upload': function(e, t){
    $('#image').click();
  },

  'change #image': function(e, t) {
    $('.form__btn--upload').html('Imagem selecionada ' + '<span class="icon--right ion-image"></span>');

    if(t.findAll('.images') != null){
      var file = $('.images').get(0).files[0];
      var fileObj = userImages.insert(file);

      user = {
        'profile.image': fileObj._id
      }

      Meteor.call('editUser', this._id, user, function(err){
        if(err){
          reason(err.reason, 'error');
        } else {
          $('.form__btn--upload').html('Imagem enviada ' + '<span class="icon--right ion-checkmark"></span>');
        }
      });
    }
  }
});
