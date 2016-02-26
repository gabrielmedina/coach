// routine exercise show

Template.routineExerciseShow.rendered = function() {
  $('.section__gallery').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    margin: 10
  });
};

Template.routineExerciseShow.helpers({
  routineExercise: function(){
    return RoutineExercise.findOne({ _id: this._id });
  }
});

Template.routineExerciseShow.events({
  'click .execution__btn--initial': function(e, t) {
    e.preventDefault();

    var exercises = Historical.find({ practitioner: Meteor.userId() }, { sort: {createdAt: -1 }}).exercises || [];
    exercises.push(this._id);

    var historical = {
      exercises: exercises
    }

    Meteor.call('editHistorical', Session.get('historical'), historical, function(err, result){
      if(err){
        reason(err.reason, 'error');
      }
    });

    var exercise = {
      execution: 1
    };

    Meteor.call('executionRoutineExercise', this._id, exercise, function(err){
      if(err){
        reason(err.reason, 'error');
      }
    });
  },

  'click .execution__btn--finalize': function(e, t) {
    e.preventDefault();

    var exercise = {
      execution: 0,
      done: true
    };

    Meteor.call('executionRoutineExercise', this._id, exercise, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        history.back();
      }
    });
  }
});
