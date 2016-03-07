// routes historical

Router.route('historical', {
  path: '/historical/:_id',

  waitOn: function(){
    return Meteor.subscribe('historicals', this.params._id) && Meteor.subscribe('users') && Meteor.subscribe('routines') && Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises') && Meteor.subscribe('props') && Meteor.subscribe('muscles');
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
