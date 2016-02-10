// routes routine exercise

Router.route('routineExerciseCreate', {
  path: '/routine-exercise/create/:_id',

  waitOn: function(){
    return Meteor.subscribe('exercises');
  },

  data: function(){
    return {
      routine_id: this.params._id
    };
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('routineExerciseEdit', {
  path: '/routine-exercise/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('routineExercise', this.params._id) && Meteor.subscribe('exercises');
  },

  data: function(){
    return {
      _id: this.params._id
    };
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('routineExerciseShow', {
  path: '/routine-exercise/show/:_id',

  waitOn: function(){
    return Meteor.subscribe('routineExercise', this.params._id) && Meteor.subscribe('exercises') && Meteor.subscribe('props') && Meteor.subscribe('muscles');
  },

  data: function(){
    return {
      _id: this.params._id
    }
  }
});
