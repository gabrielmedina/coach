// routes exercise

Router.route('exercise', {
  path: '/exercise',

  waitOn: function(){
    return Meteor.subscribe('exercises');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('exerciseCreate', {
  path: '/exercise/create',

  waitOn: function(){
    return Meteor.subscribe('props') && Meteor.subscribe('muscles');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('exerciseEdit', {
  path: '/exercise/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('exercise', this.params._id) && Meteor.subscribe('props') && Meteor.subscribe('muscles');
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

Router.route('exerciseImage', {
  path: '/exercise/image/:_id',

  waitOn: function(){
    return Meteor.subscribe('exercise', this.params._id);
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
