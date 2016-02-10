// routes routine

Router.route('routineCreate', {
  path: '/routine/create/:_id',

  data: function(){
    return {
      training_id: this.params._id
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

Router.route('routineEdit', {
  path: '/routine/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('routine', this.params._id);
  },

  data: function(){
    return {
      _id: this.params._id
    };
  }
});

Router.route('routineShow', {
  path: '/routine/show/:_id',

  waitOn: function(){
    return Meteor.subscribe('routine', this.params._id) && Meteor.subscribe('exercises') && Meteor.subscribe('routineExercises');
  },

  data: function(){
    return {
      _id: this.params._id
    }
  }
});
