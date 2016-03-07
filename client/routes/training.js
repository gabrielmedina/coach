// routes training

Router.route('trainingSearch', {
  path: '/training',

  waitOn: function(){
    return Meteor.subscribe('users');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training/' + Meteor.userId());
    } else {
      this.next();
    }
  }
});

Router.route('training', {
  path: '/training/:_id',

  waitOn: function(){
    return Meteor.subscribe('trainingsPractitioner', this.params._id);
  },

  data: function(){
    return {
      _id: this.params._id
    };
  }
});

Router.route('trainingCreate', {
  path: '/training/:_id/create',

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

Router.route('trainingEdit', {
  path: '/training/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('training', this.params._id);
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

Router.route('trainingShow', {
  path: '/training/show/:_id',

  waitOn: function(){
    return Meteor.subscribe('training', this.params._id) && Meteor.subscribe('routines') && Meteor.subscribe('historicals', this.params._id) && Meteor.subscribe('users');
  },

  data: function(){
    return {
      _id: this.params._id
    }
  }
});
