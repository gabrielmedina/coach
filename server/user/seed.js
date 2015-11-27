// accounts seed

Meteor.startup(function() {
  if(Meteor.users.find().count() === 0){
    Accounts.createUser({
      email: 'suporte@coach.com.br',
      password: 'coach',

      profile: {
        name: 'Coach',
        type: {
          name: 'Administrador',
          value: 1
        },
        status: true
      }
    });
  }
});
