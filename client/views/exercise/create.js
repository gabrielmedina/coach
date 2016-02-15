// exercise create

Template.exerciseCreate.helpers({
  props: function(){
    return Prop.find({}, {sort: {name: 1}});
  },

  muscles: function(){
    return Muscle.find({}, {sort: {name: 1}});
  }
});

Template.exerciseCreate.events({
  'submit .form--create': function(e, t){
    e.preventDefault();

    var muscles = [];
    var musclesElements = t.findAll('.muscles');

    for(var i = 0; i < musclesElements.length; i++){
      if(musclesElements[i].checked){
        muscles.push(musclesElements[i].value);
      }
    }

    var props = [];
    var propsElements = t.findAll('.props');

    for(var i = 0; i < propsElements.length; i++){
      if(propsElements[i].checked){
        props.push(propsElements[i].value);
      }
    }

    var exercise = {
      name: t.find('#name').value,
      props: props,
      muscles: muscles,
      status: true
    };

    Meteor.call('createExercise', exercise, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        Router.go('/exercise');
      }
    });
  },

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
      }
    });
  }
});
