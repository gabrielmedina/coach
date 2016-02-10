// routes prop

Router.route('prop', {
  path: '/prop',

  waitOn: function(){
    return Meteor.subscribe('props');
  },

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('propCreate', {
  path: '/prop/create',

  onBeforeAction: function(){
    if(Meteor.user().profile.type.value == 3){
      Router.go('/training');
    } else {
      this.next();
    }
  }
});

Router.route('propEdit', {
  path: '/prop/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('prop', this.params._id);
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
