// user email

Accounts.emailTemplates.resetPassword.text = function(user, url) {
  var token = url.substring(url.lastIndexOf('/') + 1, url.length);
  var newUrl = Meteor.absoluteUrl('recovery/' + token);

  var str = user.profile.name + ', \n';
      str+= 'Para redefinir sua senha, basta acessar o link abaixo: \n\n';
      str+= newUrl;
      str+= '\n\nSuporte Coach.';

  return str;
};
