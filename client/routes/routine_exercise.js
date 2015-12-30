// routes routine exercise

Router.route('routineExercise', {
  path: '/routine-exercise',

  waitOn: function(){
    return Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('routineExerciseCreate', {
  path: '/routine-exercise/create',

  waitOn: function(){
    return Meteor.subscribe('exercises');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('routineExerciseEdit', {
  path: '/routine-exercise/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises');
  },

  data: function(){
    return {
      _id: this.params._id
    };
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('routineExerciseShow', {
  path: '/routine-exercise/show/:_id',

  waitOn: function(){
    return Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises') && Meteor.subscribe('props') && Meteor.subscribe('muscles');
  },

  data: function(){
    return {
      _id: this.params._id
    };
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/');
    } else {
      this.next();
    }
  }
});
