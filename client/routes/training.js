// routes training

Router.route('training', {
  path: '/training',

  waitOn: function(){
    return Meteor.subscribe('trainings');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('trainingCreate', {
  path: '/training/create',

  waitOn: function(){
    return Meteor.subscribe('users');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/');
    } else {
      this.next();
    }
  }
});

Router.route('trainingEdit', {
  path: '/training/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('trainings');
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
