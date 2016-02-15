// exercise edit

Template.exerciseEdit.helpers({
  exercise: function(){
    return Exercise.findOne({ _id: this._id });
  },

  props: function(){
    return Prop.find({}, {sort: { name: 1 }});
  },

  muscles: function(){
    return Muscle.find({}, {sort: { name: 1 }});
  }
});

Template.exerciseEdit.events({
  'submit .form--edit': function(e, t){
    e.preventDefault();

    var muscles = [];
    var musclesElements = t.findAll('.muscles');

    for(var i = 0; i < musclesElements.length; i++){
      if(musclesElements[i].checked){
        muscles.push(musclesElements[i].value);
      }
    }

    var exercise = {
      name: t.find('#name').value,
      prop: t.find('#prop').value,
      muscles: muscles,
    };

    Meteor.call('editExercise', this._id, exercise, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        history.back();
      }
    });
  },

  'click .btn--status': function(e){
    e.preventDefault();

    Meteor.call('statusExercise', this._id, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        history.back();
      }
    });
  },

  'click .btn--delete': function(e){
    e.preventDefault();

    Meteor.call('deleteExercise', this._id, function(err){
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

  'change .images': function(e, t) {
    $('.form__btn--upload').html('Imagem selecionada ' + '<span class="icon--right ion-image"></span>');

    var files = event.target.files;
    var images = new Array();

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
      }
    });
  }
});
