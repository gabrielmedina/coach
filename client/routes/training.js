// routes training

Router.route('training', {
  path: '/training',

  waitOn: function(){
    return Meteor.subscribe('users') && Meteor.subscribe('trainings') && Meteor.subscribe('routines');
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Treinamentos - Coach',
      og: {
        'title': 'Treinamentos - Coach'
      }
    });
  }
});

Router.route('trainingCreate', {
  path: '/training/create',

  waitOn: function(){
    return Meteor.subscribe('users') && Meteor.subscribe('routines');
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
      title: 'Adicionar treinamento - Coach',
      og: {
        'title': 'Treinamentos - Coach',
      }
    });
  }
});

Router.route('trainingEdit', {
  path: '/training/edit/:_id',

  waitOn: function(){
    return Meteor.subscribe('trainings') && Meteor.subscribe('users') && Meteor.subscribe('routines');
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
      title: 'Alterar treinamento - Coach',
      og: {
        'title': 'Alterar treinamento - Coach'
      }
    });
  }
});

Router.route('trainingShow', {
  path: '/training/show/:_id',

  waitOn: function(){
    return Meteor.subscribe('trainings') && Meteor.subscribe('routines') && Meteor.subscribe('routineExercises') && Meteor.subscribe('exercises');
  },

  data: function(){
    var obj = Training.findOne({ _id: this.params._id });

    return {
      training: obj
    };
  },

  onAfterAction: function(){
    var obj = this.data().training;

    SEO.set({
      title: obj.description + ' - Coach',
      og: {
        'title': obj.description + ' - Coach'
      }
    });
  }
});
