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

});
