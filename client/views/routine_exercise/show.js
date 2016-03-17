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
  },

  muscles: function(muscles){
    var musclesObj = [];

    for (var i = 0; i < muscles.length; i++) {
      musclesObj.push(Muscle.findOne({ _id: muscles[i] }));
    }

    return musclesObj;
  },

  props: function(props){
    var propsObj = [];

    for (var i = 0; i < props.length; i++) {
      propsObj.push(Prop.findOne({ _id: props[i] }));
    }

    return propsObj;
  },
});

Template.routineExerciseShow.events({
  'click .execution__btn--initial': function(e, t) {
    e.preventDefault();

    var historicalObj = Historical.findOne({ practitioner: Meteor.userId() }, { sort: {createdAt: -1 }});
    var routineExerciseObj =  RoutineExercise.findOne({ _id: this._id });

    var muscles = [];

    for (var i = 0; i < routineExerciseObj.exerciseObj.muscles.length; i++) {
      muscles.push(Muscle.findOne({ _id: routineExerciseObj.exerciseObj.muscles[i] }));
    }

    var props = [];

    for (var i = 0; i < routineExerciseObj.exerciseObj.props.length; i++) {
      props.push(Prop.findOne({ _id: routineExerciseObj.exerciseObj.props[i] }));
    }

    historicalObj.exercises.push({
      'name': routineExerciseObj.exerciseObj.name,
      'images': routineExerciseObj.exerciseObj.images,
      'muscles': muscles,
      'props': props,
      'sets': routineExerciseObj.sets,
      'reps': routineExerciseObj.reps,
      'interval': routineExerciseObj.interval,
      'speed': routineExerciseObj.speed,
      'weight': routineExerciseObj.weight
    });

    var historical = {
      'exercises': historicalObj.exercises
    };

    Meteor.call('editHistorical', historicalObj._id, historical, function(err, result){
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
