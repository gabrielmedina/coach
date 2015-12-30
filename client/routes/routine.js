// routes routine exercise

Router.route('routine', {
  path: '/routine',

  waitOn: function(){
    return Meteor.subscribe('routines') && Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('routineCreate', {
  path: '/routine/create',

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

Router.route('routineEdit', {
  path: '/routine/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('routines') && Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises');
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
