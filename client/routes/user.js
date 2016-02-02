// routes user

Router.route('userLogin', {
  path: '/login',

  onBeforeAction: function(){
    if(Meteor.userId()){
      Router.go('/training');
    } else {
      this.next();
    }
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Acessar o sistema - Coach',
      meta: {
        'description': 'Mostre suas credenciais e vamos malhar!'
      },
      og: {
        'title': 'Acessar o sistema - Coach',
        'description': 'Mostre suas credenciais e vamos malhar!'
      }
    });
  }
});

Router.route('userProfile', {
  path: '/profile',

  waitOn: function(){
    return Meteor.subscribe('user', Meteor.userId());
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Perfil - Coach',
      meta: {
        'description': 'Perfil do usuário'
      },
      og: {
        'title': 'Perfil - Coach',
        'description': 'Perfil do usuário'
      }
    });
  }
});

Router.route('userRegister', {
  path: '/register',

  onBeforeAction: function(){
    if(Meteor.userId()){
      Router.go('/training');
    } else {
      this.next();
    }
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Crie sua conta - Coach',
      meta: {
        'description': 'Registre-se e venha malhar conosco!'
      },
      og: {
        'title': 'Crie sua conta - Coach',
        'description': 'Registre-se e venha malhar conosco!'
      }
    });
  }
});

Router.route('userRecovery', {
  path: '/recovery',

  onBeforeAction: function(){
    if(Meteor.userId()){
      Router.go('/training');
    } else {
      this.next();
    }
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Não se desespere - Coach',
      meta: {
        'description': 'Você poderá recuperar sua senha, fique tranquilo!'
      },
      og: {
        'title': 'Não se desespere - Coach',
        'description': 'Você poderá recuperar sua senha, fique tranquilo!'
      }
    });
  }
});

Router.route('userRecoveryPassword', {
  path: '/recovery/:_token',

  onBeforeAction: function() {
    Session.set('resetPassword', this.params._token);
    this.next();
  },

  action: function() {
    this.render('userRecovery');
  },

  onAfterAction: function(){
    SEO.set({
      title: 'Quase lá - Coach',
      meta: {
        'description': 'Falta pouco para que você possa acessar o aplicativo novamente.'
      },
      og: {
        'title': 'Quase lá - Coach',
        'description': 'Falta pouco para que você possa acessar o aplicativo novamente.'
      }
    });
  }
});

Router.route('userLogout', {
  path: '/logout',

  action: function(){
    if(Meteor.userId()){
      Meteor.logout();
    }

    Router.go('/training');
  }
});
