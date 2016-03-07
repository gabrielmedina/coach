
Template.exerciseImage.helpers({
  exercise: function(){
    return Exercise.findOne({ _id: this._id });
  }
});

Template.exerciseImage.events({
  'click .form__btn--upload': function(e, t){
    $('#image').click();
  },

  'change .images': function(e, t) {
    $('.form__btn--upload').html('Imagem selecionada ' + '<span class="icon--right ion-image"></span>');

    var files = event.target.files;
    var images = [];

    for (var i = 0, ln = files.length; i < ln; i++) {
      var fileObj = exerciseImages.insert(files[i]);
      images.push(fileObj._id);
    }

    exercise = {
      images: images
    };

    Meteor.call('editExercise', this._id, exercise, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        $('.form__btn--upload').html('Imagens enviadas ' + '<span class="icon--right ion-checkmark"></span>');
        reason('Imagens enviadas', 'success');
        Router.go('/exercise');
      }
    });
  }
});
