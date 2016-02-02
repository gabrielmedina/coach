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
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Equipamentos - Coach',
      og: {
        'title': 'Equipamentos - Coach'
      }
    });
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
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Adicionar equipamento - Coach',
      og: {
        'title': 'Adicionar equipamento - Coach'
      }
    });
  }
});

Router.route('propEdit', {
  path: '/prop/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('props');
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
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Alterar equipamento - Coach',
      og: {
        'title': 'Alterar equipamento - Coach'
      }
    });
  }
});
