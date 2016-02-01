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
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn--status': function(e){
    e.preventDefault();

    Meteor.call('statusExercise', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  },

  'click .btn--delete': function(e){
    e.preventDefault();

    Meteor.call('deleteExercise', this._id, function(err){
      if(err){
        console.log(err.reason);
      } else {
        history.back();
      }
    });
  }
});
