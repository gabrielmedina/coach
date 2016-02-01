// routes configure

Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading'
});

Router.onBeforeAction(function(){
  if(!Meteor.userId()){
    this.render('userLogin');
  } else {
    this.next();
  }
}, {
  except: ['userLogin', 'userRegister', 'userRecovery']
});
